'use client'

import { motion } from 'framer-motion'

const families = [
  {
    emoji: '👨‍👩‍👧‍👦',
    name: 'Famille Martin',
    location: 'Paris, France',
    quote: 'Nesti a transformé la façon dont nous organisons nos sorties en famille. C\'est devenu indispensable!',
    color: 'from-blue-500 to-purple-500'
  },
  {
    emoji: '👩‍👩‍👧',
    name: 'Famille Dupont',
    location: 'Lyon, France',
    quote: 'L\'IA de Nesti nous suggère toujours les meilleures activités pour notre famille. Incroyable!',
    color: 'from-pink-500 to-rose-500'
  },
  {
    emoji: '👨‍👩‍👦',
    name: 'Famille Ahmad',
    location: 'Marseille, France',
    quote: 'Enfin une app qui protège vraiment la vie privée de nos enfants. Nous sommes rassurés.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    emoji: '👴‍👵',
    name: 'Grands-parents Bernard',
    location: 'Toulouse, France',
    quote: 'Rester connecté avec les petits-enfants n\'a jamais été aussi simple et amusant!',
    color: 'from-orange-500 to-amber-500'
  },
  {
    emoji: '👨‍👩‍👧‍👦',
    name: 'Famille Silva',
    location: 'Bordeaux, France',
    quote: 'L\'agenda partagé évite tant de conflits! Nous adorons cette app.',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    emoji: '👩‍🦰‍👧‍👦',
    name: 'Famille Schmidt',
    location: 'Lille, France',
    quote: 'Comme parents monoparentaux, Nesti nous aide vraiment à gérer nos activités.',
    color: 'from-violet-500 to-purple-500'
  }
]

export default function Family() {
  return (
    <section id="family" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Les Familles Adorent Nesti
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Des témoignages de familles comme la vôtre
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {families.map((family, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-white dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              {/* Avatar */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${family.color} flex items-center justify-center text-4xl mb-4 shadow-lg`}>
                {family.emoji}
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-600 dark:text-slate-300 mb-4 italic">
                "{family.quote}"
              </blockquote>

              {/* Family info */}
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {family.name}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {family.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
