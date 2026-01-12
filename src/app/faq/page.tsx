'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const faqs = [
  {
    question: 'Nesti est-elle vraiment gratuite?',
    answer: 'Nesti offre une version gratuite avec toutes les fonctionnalités essentielles. Une version premium avec des fonctionnalités avancées est disponible moyennant un abonnement optionnel.'
  },
  {
    question: 'Mes données familiales sont-elles sécurisées?',
    answer: 'Oui, vos données sont protégées par des normes de sécurité RGPD strictes et des certificats SSL. Nous ne partageons jamais vos informations avec des tiers.'
  },
  {
    question: 'Quel est l\'âge minimum pour utiliser Nesti?',
    answer: 'Les parents ou tuteurs légaux peuvent créer des comptes pour des enfants de moins de 13 ans. L\'app est conçue pour être utilisée en famille.'
  },
  {
    question: 'Comment fonctionne l\'IA Nesti?',
    answer: 'Notre IA utilise vos préférences familiales pour suggérer les meilleures activités. Elle apprend de vos intérêts pour personnaliser ses recommandations au fil du temps.'
  },
  {
    question: 'Puis-je utiliser Nesti hors ligne?',
    answer: 'Certaines fonctionnalités sont disponibles hors ligne. Les données se synchronisent automatiquement quand vous êtes reconnecté à Internet.'
  },
  {
    question: 'Comment supprimer mon compte?',
    answer: 'Vous pouvez supprimer votre compte à tout moment depuis les paramètres de l\'app. Toutes vos données seront supprimées définitivement après 30 jours.'
  },
  {
    question: 'Quelle est la politique de remboursement?',
    answer: 'Nous offrons un remboursement complet pour les abonnements annuels dans les 30 jours suivant l\'achat, sans poser de questions.'
  },
  {
    question: 'Nesti fonctionne-t-elle sur tous les appareils?',
    answer: 'Oui, Nesti fonctionne sur iOS, Android et via le navigateur web. Vos données se synchronisent sur tous vos appareils automatiquement.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Questions Fréquemment Posées
          </motion.h1>
          <motion.p
            className="text-lg text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Trouvez les réponses aux questions les plus courantes sur Nesti
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-semibold text-left">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.div>
                </button>
                
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-700"
                  >
                    <p className="text-slate-600 dark:text-slate-400">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="mt-12 p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-3">Vous n'avez pas trouvé votre réponse?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Contactez-nous directement, nous répondons dans les 24 heures
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Nous contacter
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
