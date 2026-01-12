'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Cookies() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Politique des Cookies
          </motion.h1>
          <motion.p
            className="text-lg text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto prose prose-sm dark:prose-invert max-w-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Qu'est-ce qu'un Cookie?</h2>
              <p>
                Les cookies sont de petits fichiers texte stockés sur votre appareil (ordinateur, tablette, téléphone) lorsque vous visitez un site web ou utilisez une application. Ils permettent au site ou à l'application de se souvenir de vos préférences et de personnaliser votre expérience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Types de Cookies Utilisés par Nesti</h2>
              
              <h3 className="text-xl font-semibold mt-4 mb-2">Cookies Essentiels :</h3>
              <p>
                Ces cookies sont nécessaires au fonctionnement de Nesti. Ils sont utilisés pour :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintenir votre session de connexion</li>
                <li>Sécuriser votre compte</li>
                <li>Traiter vos transactions</li>
                <li>Mémoriser vos paramètres de sécurité</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">Cookies de Préférences :</h3>
              <p>
                Ces cookies se souviennent de vos choix pour personnaliser votre expérience :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Votre langue préférée</li>
                <li>Votre thème (clair/sombre)</li>
                <li>Vos préférences de contenu</li>
                <li>Votre fuseau horaire</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">Cookies d'Analyse :</h3>
              <p>
                Nous utilisons Google Analytics pour comprendre comment vous utilisez Nesti :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Les pages que vous visitez</li>
                <li>Combien de temps vous restez sur chaque page</li>
                <li>D'où vient le trafic</li>
                <li>Quels appareils sont utilisés</li>
              </ul>
              <p className="mt-4">
                Ces données nous aident à améliorer notre Service. Vous pouvez vous opposer à cette collecte en opt-out dans les paramètres.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">Cookies de Marketing :</h3>
              <p>
                Si vous consentez, nous pouvons utiliser des cookies pour :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Afficher des publicités pertinentes</li>
                <li>Mesurer l'efficacité des campagnes publicitaires</li>
                <li>Créer des audiences pour le remarketing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Cookies de Tiers</h2>
              <p>
                Nesti peut autoriser des services tiers à placer des cookies sur votre appareil :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics :</strong> Pour l'analyse du trafic</li>
                <li><strong>Facebook Pixel :</strong> Pour le suivi des conversions</li>
                <li><strong>Hotjar :</strong> Pour comprendre le comportement des utilisateurs</li>
              </ul>
              <p className="mt-4">
                Ces services ont leurs propres politiques de confidentialité. Consultez leurs sites web pour plus d'informations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Durée de Stockage</h2>
              <p>
                Les cookies ont des durées de vie différentes :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cookies de session :</strong> Supprimés lorsque vous fermez votre navigateur</li>
                <li><strong>Cookies persistants :</strong> Stockés pendant une période définie (généralement 1-2 ans)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Contrôle des Cookies</h2>
              <p>
                Vous pouvez contrôler les cookies de plusieurs façons :
              </p>
              
              <h3 className="text-xl font-semibold mt-4 mb-2">Paramètres du Navigateur :</h3>
              <p>
                La plupart des navigateurs vous permettent de contrôler les cookies. Vous pouvez :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accepter ou refuser les cookies</li>
                <li>Supprimer les cookies existants</li>
                <li>Recevoir un avertissement avant les cookies sont stockés</li>
              </ul>
              <p className="mt-4">
                Consultez l'aide de votre navigateur pour les instructions spécifiques (Chrome, Firefox, Safari, Edge, etc.)
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">Paramètres Nesti :</h3>
              <p>
                Vous pouvez gérer vos préférences de cookies dans les paramètres de votre compte Nesti.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">Do Not Track (DNT) :</h3>
              <p>
                Nesti respecte les signaux Do Not Track. Si votre navigateur envoie un signal DNT, nous n'utiliserons pas de cookies de suivi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Impact de la Désactivation des Cookies</h2>
              <p>
                Si vous désactivez certains cookies, cela peut affecter votre expérience Nesti :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Les cookies essentiels doivent rester activés pour un fonctionnement correct</li>
                <li>La désactivation des cookies de préférences peut affecter la personnalisation</li>
                <li>Les cookies d'analyse permettent l'amélioration continue de l'app</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Données Personnelles et RGPD</h2>
              <p>
                Les informations collectées via les cookies peuvent être des données personnelles au sens du RGPD. Pour plus d'informations sur comment nous traitons vos données personnelles, consultez notre Politique de Confidentialité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Consent Management</h2>
              <p>
                Lors de votre première visite, nous vous demandons de consentir à l'utilisation des cookies. Vous pouvez modifier vos préférences à tout moment.
              </p>
              <p className="mt-4">
                Nous utilisons uniquement les cookies essentiels jusqu'à ce que vous donniez votre consentement pour les autres catégories.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Modifications de cette Politique</h2>
              <p>
                Nesti peut modifier cette Politique des Cookies à tout moment. Les modifications seront affichées sur cette page avec la date de mise à jour.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contact</h2>
              <p>
                Si vous avez des questions concernant notre utilisation des cookies :
              </p>
              <ul className="list-none pl-0 space-y-2 mt-4">
                <li>📧 Email (confidentialité) : privacy@nesti-app.fr</li>
                <li>📧 Email (support) : contact@nesti-app.fr</li>
                <li>📞 Téléphone : +33 6 36 02 60 60</li>
              </ul>
            </section>
          </motion.div>
        </div>
      </section>

      {/* Links to other legal pages */}
      <section className="py-12 px-4 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-6 text-slate-600 dark:text-slate-400">Voir aussi :</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/legal/privacy"
              className="px-6 py-2 border border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors"
            >
              Politique de Confidentialité
            </Link>
            <Link
              href="/legal/terms"
              className="px-6 py-2 border border-pink-600 text-pink-600 dark:text-pink-400 dark:border-pink-400 rounded-lg hover:bg-pink-50 dark:hover:bg-pink-950 transition-colors"
            >
              Conditions d'Utilisation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
