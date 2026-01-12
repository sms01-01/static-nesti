'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '🎯',
    title: 'Découvrez des Activités',
    description: 'Trouvez des activités parfaites pour votre famille avec des filtres intelligents et des recommandations personnalisées.'
  },
  {
    icon: '📅',
    title: 'Organisez votre Agenda',
    description: 'Planifiez vos sorties familiales avec un agenda partagé et des rappels automatiques pour ne rien oublier.'
  },
  {
    icon: '📸',
    title: 'Partagez vos Moments',
    description: 'Créez un espace privé pour partager photos, vidéos et histoires de votre famille en toute sécurité.'
  },
  {
    icon: '💬',
    title: 'Restez Connectés',
    description: 'Communiquez en temps réel avec votre famille via le chat sécurisé et les notifications instantanées.'
  },
  {
    icon: '✨',
    title: 'IA Nesti',
    description: 'Obtenez des suggestions d\'activités personnalisées grâce à notre assistant IA intelligent et contextuel.'
  },
  {
    icon: '🔒',
    title: 'Privé & Sécurisé',
    description: 'Vos données familiales sont protégées par les normes de sécurité les plus strictes du secteur.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Fonctionnalités Puissantes
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Tout ce dont votre famille a besoin pour vivre ensemble, même à distance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
