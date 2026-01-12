'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Privacy() {
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
            Politique de Confidentialité
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
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p>
                Nesti ("nous", "nos" ou "notre") exploite l'application Nesti (le "Service"). Cette page vous informe de nos politiques concernant la collecte, l'utilisation et la divulgation de données personnelles lorsque vous utilisez notre Service et les choix dont vous disposez concernant ces données.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Collecte et Utilisation des Données</h2>
              <p>
                Nous collectons plusieurs types de données différentes à des fins diverses pour vous fournir et améliorer notre Service.
              </p>
              
              <h3 className="text-xl font-semibold mt-4 mb-2">Types de Données Collectées :</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Données de Compte :</strong> Nom, adresse e-mail, numéro de téléphone, photo de profil</li>
                <li><strong>Données Familiales :</strong> Informations sur les membres de votre famille, relations familiales</li>
                <li><strong>Données d'Activité :</strong> Activités créées, événements organisés, photos partagées</li>
                <li><strong>Données de Localisation :</strong> Si vous acceptez, votre localisation pour les recommandations d'activités</li>
                <li><strong>Données de Communication :</strong> Messages, commentaires, évaluations</li>
                <li><strong>Données Techniques :</strong> Adresse IP, type de navigateur, version du système d'exploitation, pages visitées</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Utilisation des Données</h2>
              <p>
                Nesti utilise les données collectées à différentes fins :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pour vous fournir et maintenir notre Service</li>
                <li>Pour vous notifier des modifications apportées à notre Service</li>
                <li>Pour vous permettre de participer à des fonctionnalités interactives de notre Service</li>
                <li>Pour fournir un support client</li>
                <li>Pour collecter des analyses et des informations afin que nous puissions améliorer notre Service</li>
                <li>Pour personnaliser vos recommandations d'activités grâce à notre IA</li>
                <li>Pour surveiller l'utilisation de notre Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Sécurité des Données</h2>
              <p>
                La sécurité de vos données est importante pour nous mais n'oubliez pas qu'aucune méthode de transmission sur Internet ou de stockage électronique n'est 100% sûre. Bien que nous nous efforçons d'utiliser des moyens commercialement acceptables pour protéger vos données personnelles, nous ne pouvons pas garantir leur sécurité absolue.
              </p>
              <p>
                Nous utilisons le chiffrement SSL/TLS pour toutes les transmissions de données.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Durée de Conservation des Données</h2>
              <p>
                Nous conservons vos données personnelles aussi longtemps que nécessaire pour vous fournir le Service. Si vous demandez la suppression de votre compte, vos données personnelles seront supprimées immédiatement, sauf si nous sommes légalement tenues de les conserver.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Vos Droits</h2>
              <p>
                Selon le RGPD, vous avez les droits suivants :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectifier les données inexactes</li>
                <li>Droit à l'effacement (droit à l'oubli)</li>
                <li>Droit de restreindre le traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit de vous opposer au traitement</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, veuillez nous contacter à privacy@nesti-app.fr.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Partage de Données</h2>
              <p>
                Nesti ne vend pas, n'échange pas et ne loue pas vos données personnelles à des tiers. Nous pouvons partager vos informations uniquement dans les cas suivants :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Avec votre consentement explicite</li>
                <li>Pour des fournisseurs de services tiers qui nous aident à exploiter notre Service</li>
                <li>Si requis par la loi</li>
                <li>Pour protéger les droits, la propriété et la sécurité de Nesti</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Cookies</h2>
              <p>
                Nous utilisons des cookies pour améliorer votre expérience sur Nesti. Les cookies sont de petits fichiers texte stockés sur votre appareil. Vous pouvez contrôler l'utilisation des cookies dans les paramètres de votre navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Modifications de cette Politique</h2>
              <p>
                Nesti se réserve le droit de modifier cette politique de confidentialité à tout moment. Vos utilisation continue du Service suite à de telles modifications constitue votre acceptation de la politique modifiée.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Nous Contacter</h2>
              <p>
                Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à :
              </p>
              <ul className="list-none pl-0 space-y-2 mt-4">
                <li>📧 Email : privacy@nesti-app.fr</li>
                <li>📧 Email (légal) : legal@nesti-app.fr</li>
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
              href="/legal/terms"
              className="px-6 py-2 border border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors"
            >
              Conditions d'Utilisation
            </Link>
            <Link
              href="/legal/cookies"
              className="px-6 py-2 border border-pink-600 text-pink-600 dark:text-pink-400 dark:border-pink-400 rounded-lg hover:bg-pink-50 dark:hover:bg-pink-950 transition-colors"
            >
              Politique des Cookies
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
