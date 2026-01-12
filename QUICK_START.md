# 🚀 Quick Start Nesti

Bienvenue ! Voici comment démarrer rapidement avec votre site Nesti.

## 📋 En 5 Minutes

### 1️⃣ Installation (2 min)
```bash
cd /Users/s.sy/Documents/Nesti/static-nesti
npm install
cp .env.example .env.local
```

### 2️⃣ Configuration (1 min)
Éditez `.env.local` avec vos credentials SMTP :
```bash
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
CONTACT_EMAIL=contact@nesti-app.fr
```

### 3️⃣ Lancer (1 min)
```bash
npm run dev
```
Ouvrir http://localhost:3000

### 4️⃣ Tester (1 min)
- Cliquer sur le formulaire de contact
- Envoyer un message
- Vérifier l'email reçu

## 🎯 Points Clés

### Pages Disponibles
- `/` - Accueil avec hero, features, témoignages
- `/faq` - Questions fréquemment posées
- `/legal/privacy` - Politique de confidentialité
- `/legal/terms` - Conditions d'utilisation
- `/legal/cookies` - Politique des cookies

### Fonctionnalités
- ✨ Animations fluides Framer Motion
- 🌓 Mode sombre/clair
- 📱 Responsive design
- 📧 Formulaire contact avec emails
- 🔒 RGPD compliant

### Commandes Utiles
```bash
npm run dev      # Lancer local
npm run build    # Build production
npm run lint     # Checker code
npm start        # Lancer build produit
```

## 🌐 Déployer sur Vercel

### Option A : Via GitHub
1. `git init && git add . && git commit -m "initial commit"`
2. Créer repo GitHub `static-nesti`
3. `git push -u origin main`
4. Sur vercel.com → Import projet
5. Ajouter variables d'env dans Vercel
6. Deploy !

### Option B : Direct Vercel
1. aller sur https://vercel.com/new
2. Connecter GitHub (ou upload zip)
3. Sélectionner `static-nesti`
4. Ajouter variables d'env
5. Deploy

> **⏱️ Temps total** : ~5-10 minutes

## 📧 Configuration Email (Important!)

### Avec Gmail
1. Aller sur https://myaccount.google.com/security
2. Activer "2-Step Verification"
3. Aller dans "App passwords"
4. Sélectionner Mail + Linux/Mac/Windows
5. Google génère un mot de passe
6. Copier dans `.env.local` SMTP_PASSWORD

### Avec Autres Fournisseurs
- **SendGrid** : Utiliser API key
- **Mailgun** : Utiliser credentials
- **Amazon SES** : Utiliser AWS credentials

> Sans email configuré, le formulaire de contact ne fonctionnera pas.

## 🔧 Fichiers Importants

```
📂 src/
  ├─ 📄 page.tsx          ← Contenu accueil
  ├─ 📄 layout.tsx        ← Meta, theme
  ├─ 📄 globals.css       ← Styles globaux
  ├─ 📂 components/
  │  ├─ Navigation.tsx    ← Header
  │  ├─ Hero.tsx          ← Banner principal
  │  ├─ Features.tsx      ← Features list
  │  ├─ Family.tsx        ← Témoignages
  │  ├─ Contact.tsx       ← Formulaire
  │  └─ Footer.tsx        ← Pied de page
  ├─ 📂 faq/
  │  └─ page.tsx
  ├─ 📂 legal/
  │  ├─ privacy/page.tsx
  │  ├─ terms/page.tsx
  │  └─ cookies/page.tsx
  └─ 📂 api/
     └─ contact/route.ts  ← Email API

📂 public/                ← Assets (logos, images)

📄 .env.example           ← Template env vars
📄 next.config.ts        ← Config Next.js
📄 tailwind.config.ts    ← Config Tailwind
📄 tsconfig.json         ← Config TypeScript
```

## 🎨 Personnaliser

### Changer Couleurs
Dans `src/app/globals.css`, modifier :
```css
--primary: #9333ea;      /* Purple */
--secondary: #ec4899;    /* Pink */
```

### Changer Texte
Dans les fichiers `src/components/` :
- `Hero.tsx` - Headline
- `Features.tsx` - Description features
- `Contact.tsx` - Texte contact
- `Footer.tsx` - Links et copyright

### Changer Emojis/Images
Chercher les emojis ou images dans les fichiers et les remplacer.

## 🐛 Dépannage

**Q: Le formulaire ne envoie pas d'emails**
- A: Vérifier `.env.local` et credentials SMTP
- Tester en local d'abord

**Q: Build error "Cannot find nodemailer"**
- A: `npm install --save-dev @types/nodemailer`

**Q: Site pas responsive**
- A: Vérifier Tailwind CSS installé
- Redémarrer : `npm run dev`

**Q: Dark mode ne fonctionne pas**
- A: Vérifier `useEffect` et `mounted` dans Navigation.tsx

## 📚 Documentation Complète

Pour plus de détails, voir :
- `README.md` - Guide complet
- `DEPLOYMENT_GUIDE.md` - Vercel step-by-step
- `PROJECT_SUMMARY.md` - Résumé complet
- `CONFIGURATION_CHECKLIST.md` - Checklist

## ✅ Next Steps

- [ ] Configuration email fonctionnelle
- [ ] Build production réussi
- [ ] GitHub repo créé
- [ ] Vercel configuré
- [ ] Domaine personnalisé (optionnel)

## 🚀 C'est Parti !

```bash
npm run dev
# Ouvrir http://localhost:3000
```

Bienvenue sur Nesti ! 🎉

---

Questions ? Besoin d'aide ? 
📧 contact@nesti-app.fr
