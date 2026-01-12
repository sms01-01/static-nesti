'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Terms() {
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
            Conditions Générales d'Utilisation
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
              <h2 className="text-2xl font-bold mb-4">1. Acceptation des Conditions</h2>
              <p>
                En téléchargeant, en accédant ou en utilisant l'application Nesti, vous acceptez d'être lié par ces Conditions Générales d'Utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Utilisation de l'Application</h2>
              <p>
                Vous acceptez d'utiliser Nesti conformément à toutes les lois et réglementations applicables. Vous êtes responsable de maintenir la confidentialité de vos identifiants de connexion et de tous les utilisateurs de votre compte.
              </p>
              
              <h3 className="text-xl font-semibold mt-4 mb-2">Interdictions :</h3>
              <p>Vous ne devez pas :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Utiliser l'application de manière contraire à la loi</li>
                <li>Harceler, menacer ou intimider d'autres utilisateurs</li>
                <li>Poster du contenu obscène, offensant ou discriminatoire</li>
                <li>Utiliser des bots ou des scripts automatisés</li>
                <li>Tenter d'accéder à des parties non autorisées de l'application</li>
                <li>Transmettre des virus ou logiciels malveillants</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Comptes Utilisateurs</h2>
              <p>
                Pour utiliser certaines fonctionnalités de Nesti, vous devez créer un compte. Vous êtes responsable de la fourniture d'informations exactes et de la mise à jour de vos données.
              </p>
              
              <h3 className="text-xl font-semibold mt-4 mb-2">Compte d'Enfants :</h3>
              <p>
                Les parents ou tuteurs légaux sont responsables de tous les comptes d'enfants. Vous consentez à vérifier l'utilisation de l'application par votre enfant et à vous assurer qu'elle est conforme à ces conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Propriété Intellectuelle</h2>
              <p>
                Le contenu de Nesti, y compris les textes, graphiques, logos, images et logiciels, est la propriété de Nesti ou de ses fournisseurs de contenu et est protégé par les lois sur les droits d'auteur. Vous ne pouvez pas reproduire, modifier ou distribuer le contenu sans permission écrite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Contenu Créé par les Utilisateurs</h2>
              <p>
                Vous conservez la propriété de tout contenu que vous créez et partagez sur Nesti. En partageant du contenu, vous accordez à Nesti une licence perpétuelle, mondiale et non-exclusive pour utiliser ce contenu dans le Service.
              </p>
              
              <p className="mt-4">
                Vous êtes responsable du contenu que vous partagez et vous garantissez que vous avez les droits nécessaires pour le partager.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Photos et Partage de Famille</h2>
              <p>
                Nesti vous permet de partager des photos avec votre famille. Vous garantissez que :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vous avez le droit de partager ces photos</li>
                <li>Les photos ne violent pas les droits d'auteur de tiers</li>
                <li>Vous avez obtenu le consentement de tous les mineurs photographiés</li>
                <li>Les photos sont appropriées et ne contiennent pas de contenu offensant</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Limitation de Responsabilité</h2>
              <p>
                Nesti est fourni "en l'état" sans garantie. Nesti ne sera pas responsable des dommages indirects, accidentels, spéciaux ou consécutifs résultant de votre utilisation du Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Modification du Service</h2>
              <p>
                Nesti se réserve le droit de modifier ou d'interrompre le Service à tout moment, avec ou sans préavis. Nous ne serons pas responsables si une partie ou la totalité du Service devient indisponible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Paiements et Abonnements</h2>
              <p>
                Si vous achetez un abonnement premium, vous acceptez :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>De payer les frais annoncés</li>
                <li>Que votre abonnement se renouvelle automatiquement à moins d'annulation</li>
                <li>Que nous facturions votre méthode de paiement</li>
              </ul>
              
              <p className="mt-4">
                Un remboursement complet est disponible dans les 30 jours suivant l'achat d'un abonnement annuel.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Résiliation</h2>
              <p>
                Nesti peut résilier votre compte à tout moment si vous violez ces conditions. Vous pouvez résilier votre compte à tout moment en contactant notre support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Loi Applicable</h2>
              <p>
                Ces conditions sont régies par les lois de la France. Tout litige découlant de ou lié à Nesti sera résolu dans les tribunaux compétents de la France.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Modifications des Conditions</h2>
              <p>
                Nesti se réserve le droit de modifier ces conditions à tout moment. Votre utilisation continue du Service après de telles modifications constitue votre acceptation des conditions modifiées.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Contact</h2>
              <p>
                Pour toute question concernant ces conditions, veuillez nous contacter :
              </p>
              <ul className="list-none pl-0 space-y-2 mt-4">
                <li>📧 Email (légal) : legal@nesti-app.fr</li>
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
