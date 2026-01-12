import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configuration du transporteur email (à adapter selon votre setup)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

// Rate limiting simple (en production, utiliser Redis)
const requestMap = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowMs = 60 * 60 * 1000 // 1 heure
  const maxRequests = 5

  if (!requestMap.has(ip)) {
    requestMap.set(ip, [])
  }

  const requests = requestMap.get(ip)!
  const recentRequests = requests.filter(time => now - time < windowMs)

  if (recentRequests.length >= maxRequests) {
    return true
  }

  recentRequests.push(now)
  requestMap.set(ip, recentRequests)

  return false
}

export async function POST(request: NextRequest) {
  try {
    // Récupérer l'IP du client
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'

    // Vérifier le rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Trop de demandes. Veuillez réessayer plus tard.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis.' },
        { status: 400 }
      )
    }

    // Validation email simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide.' },
        { status: 400 }
      )
    }

    // Vérifier que le message n'est pas vide
    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Le message doit contenir au moins 10 caractères.' },
        { status: 400 }
      )
    }

    // Préparer le mail pour Nesti
    const mailToNesti = {
      from: process.env.SMTP_USER || 'noreply@nesti-app.fr',
      to: process.env.CONTACT_EMAIL || 'contact@nesti-app.fr',
      subject: `Nouveau message de contact de ${name}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="font-size: 12px; color: #666;">
          Date: ${new Date().toLocaleString('fr-FR')}
        </p>
      `,
      replyTo: email,
    }

    // Préparer le mail de confirmation pour l'utilisateur
    const mailToUser = {
      from: process.env.SMTP_USER || 'noreply@nesti-app.fr',
      to: email,
      subject: 'Confirmation de réception - Nesti',
      html: `
        <h2>Merci de votre message!</h2>
        <p>Bonjour ${escapeHtml(name)},</p>
        <p>Nous avons bien reçu votre message et reviendrons vers vous dans les 24 heures.</p>
        <hr>
        <p><strong>Votre message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="font-size: 12px; color: #666;">
          Merci de nous avoir contacté,<br>
          L'équipe Nesti
        </p>
      `,
    }

    // Envoyer les emails
    await transporter.sendMail(mailToNesti)
    await transporter.sendMail(mailToUser)

    return NextResponse.json(
      { 
        success: true,
        message: 'Votre message a été envoyé avec succès. Nous vous répondrons bientôt!'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error)
    
    // Ne pas révéler les erreurs internes au client
    return NextResponse.json(
      { error: 'Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}

// Fonction utilitaire pour échapper les caractères HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}
