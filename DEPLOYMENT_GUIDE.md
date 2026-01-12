# 🚀 Guide de Déploiement Nesti sur Vercel

## Pré-requis

- Compte GitHub avec le projet pushé
- Compte Vercel (gratuit)
- Variables d'environnement configurées

## Étape 1 : Préparer le Projet

### 1.1 Initialiser Git (si pas déjà fait)
```bash
cd /Users/s.sy/Documents/Nesti/static-nesti
git init
git add .
git commit -m "feat: Nesti landing page with animations and legal pages"
```

### 1.2 Créer un Repository GitHub
1. Aller sur [GitHub](https://github.com/new)
2. Créer un nouveau repository `static-nesti`
3. Pousser le code :

```bash
git remote add origin https://github.com/YOUR_USERNAME/static-nesti.git
git branch -M main
git push -u origin main
```

## Étape 2 : Configurer Vercel

### 2.1 Créer un compte Vercel
1. Aller sur [Vercel.com](https://vercel.com)
2. Se connecter avec GitHub
3. Autoriser Vercel à accéder à vos repositories

### 2.2 Importer le Projet
1. Cliquer sur "Add New" → "Project"
2. Sélectionner le repository `static-nesti`
3. Cliquer sur "Import"

### 2.3 Configurer le Build
Dans la page de configuration :
- **Project Name** : `static-nesti` (ou votre nom préféré)
- **Framework Preset** : Next.js (détecté automatiquement)
- **Root Directory** : `./` (laisser par défaut)
- **Build Command** : `npm run build` (par défaut)
- **Output Directory** : `.next` (par défaut)

## Étape 3 : Ajouter les Variables d'Environnement

### 3.1 Dans le Dashboard Vercel
1. Aller dans **Settings** du projet
2. Cliquer sur **Environment Variables**
3. Ajouter les variables suivantes :

```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_SECURE = false
SMTP_USER = your-email@gmail.com
SMTP_PASSWORD = your-app-password
CONTACT_EMAIL = contact@nesti-app.fr
NEXT_PUBLIC_APP_URL = https://votre-domaine.com
```

### 3.2 Configuration Email avec Gmail

#### Option A : Mot de Passe d'Application (Recommandé)
1. Aller sur [Google Account Security](https://myaccount.google.com/security)
2. Activer **2-Step Verification** si pas déjà fait
3. Aller dans **App passwords**
4. Sélectionner : App = Mail, Device = Windows/Mac/Linux
5. Google génère un mot de passe de 16 caractères
6. Utiliser ce mot de passe dans `SMTP_PASSWORD`

#### Option B : Activer "Accès des Applications moins Sécurisées"
1. Aller sur [Google Account Less Secure Apps](https://myaccount.google.com/lesssecureapps)
2. Activer "Allow less secure apps"
3. Utiliser votre mot de passe Gmail normal

### 3.3 Variables pour Sendgrid (Alternative)
```
SMTP_HOST = smtp.sendgrid.net
SMTP_PORT = 587
SMTP_SECURE = false
SMTP_USER = apikey
SMTP_PASSWORD = SG.your-sendgrid-api-key
CONTACT_EMAIL = contact@nesti-app.fr
```

## Étape 4 : Configurer le Domaine Personnalisé

### 4.1 Ajouter un Domaine
1. Dans Settings → Domains
2. Cliquer sur "Add"
3. Entrer votre domaine : `nesti-app.fr`

### 4.2 Configurer DNS
Suivre les instructions Vercel pour pointer votre domaine.

Pour un domaine existant :
1. Aller dans les paramètres DNS de votre registraire
2. Ajouter un enregistrement CNAME :
   - Name: `www` (ou `@` pour l'apex)
   - Value: `cname.vercel.com`

Ou pour un sous-domaine :
   - Name: `nesti-app.fr`
   - Value: `cname.vercel.com`

## Étape 5 : Déployer

### 5.1 Déploiement Automatique
Une fois les paramètres configurés, Vercel déploie automatiquement :
- Cliquer sur "Deploy"
- Attendre le déploiement (3-5 minutes)
- Votre site est en ligne à `https://static-nesti.vercel.app`

### 5.2 Déploiement Continu
Chaque push sur `main` déclenche un déploiement automatique :
```bash
git add .
git commit -m "Update content"
git push
```

## Étape 6 : Vérifier le Déploiement

### 6.1 Tester le Site
- Ouvrir `https://static-nesti.vercel.app`
- Tester :
  - Navigation et responsive design
  - Mode clair/sombre
  - Animations
  - Formulaire de contact

### 6.2 Tester le Formulaire de Contact
1. Accéder au formulaire sur `#contact`
2. Remplir les champs
3. Soumettre
4. Vérifier que vous recevez un email

### 6.3 Vérifier les Pages Légales
- `/faq` - FAQ
- `/legal/privacy` - Politique de confidentialité
- `/legal/terms` - Conditions d'utilisation
- `/legal/cookies` - Politique des cookies

## Étape 7 : Configuration Supplémentaire

### 7.1 Google Analytics (Optionnel)
1. Créer un compte [Google Analytics 4](https://analytics.google.com)
2. Obtenir votre ID de mesure
3. Ajouter dans l'app Next.js

### 7.2 Sentry pour le Monitoring (Optionnel)
1. Créer un compte [Sentry.io](https://sentry.io)
2. Configurer pour Next.js
3. Ajouter clé DSN aux variables d'environnement

### 7.3 SSL/HTTPS
- Automatique avec Vercel
- Certificate Let's Encrypt gratuit

## Dépannage

### Erreur : "Cannot find module 'nodemailer'"
```bash
npm install --save-dev @types/nodemailer
```

### Erreur : "SMTP_USER is not defined"
- Vérifier que les variables d'environnement sont ajoutées dans Vercel
- Attendre le redéploiement après les ajouter

### Email non reçus
- Vérifier les identifiants SMTP
- Tester en local d'abord : `npm run dev`
- Vérifier le dossier spam/junk

### Erreur 429 (Rate Limiting)
- Attendre 1 heure ou modifier la limite dans `route.ts`

## Optimisations Post-Déploiement

### 7.1 Améliorer les Performances
```bash
npm run build
# Vérifier le bundle size
npm run analyze
```

### 7.2 SEO
Ajouter dans `/src/app/layout.tsx` :
```typescript
export const metadata = {
  metadataBase: new URL('https://nesti-app.fr'),
  alternates: {
    canonical: 'https://nesti-app.fr',
  },
}
```

### 7.3 Sitemap XML
Créer `/public/sitemap.xml` pour les moteurs de recherche

### 7.4 robots.txt
Créer `/public/robots.txt` :
```
User-agent: *
Allow: /
Sitemap: https://nesti-app.fr/sitemap.xml
```

## Workflow Git Continu

### Commandes Usuelles
```bash
# Créer une branche pour une feature
git checkout -b feature/new-feature

# Faire les changements et commiter
git add .
git commit -m "feat: Add new feature"

# Pousser la branche
git push origin feature/new-feature

# Créer une Pull Request sur GitHub
# Une fois approuvée, merge vers main
# Vercel déploie automatiquement

# Après merge
git checkout main
git pull
```

## Support

- 📧 contact@nesti-app.fr
- 📱 +33 6 36 02 60 60
- 🔒 privacy@nesti-app.fr

---

🎉 Votre site Nesti est maintenant en ligne sur Vercel !
