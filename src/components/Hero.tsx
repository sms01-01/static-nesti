'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-pink-900/20 min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              L'App Familiale
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Qui Rapproche
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Découvrez des activités extraordinaires, organisez vos moments en famille, partagez vos souvenirs et restez connectés. Nesti est l'espace numérique bienveillant pour tous vos moments familiaux.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Link
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                Télécharger Nesti
              </Link>
              <Link
                href="/#features"
                className="px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
              >
                Découvrir
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-8 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div>
                <p className="text-3xl font-bold text-purple-600">50K+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Familles actives</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-600">10K+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Activités</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-600">★ 4.8</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Note moyenne</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Illustration - Emoji style */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full aspect-square">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-900/40 dark:to-pink-900/40 rounded-3xl blur-3xl" />
              
              {/* Main illustration */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                  <motion.div
                    className="text-9xl mb-4"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  >
                    👨‍👩‍👧‍👦
                  </motion.div>
                  
                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-12 left-12 text-6xl"
                    animate={{ rotate: [0, 360], y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                  >
                    🎯
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-20 right-12 text-5xl"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, -360] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                  >
                    🏠
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-20 left-16 text-5xl"
                    animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5 }}
                  >
                    📅
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-32 right-16 text-5xl"
                    animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 5.5 }}
                  >
                    💬
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
