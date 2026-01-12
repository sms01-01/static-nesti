'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
        />
        <motion.div
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-20 left-10 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
        />
      </div>

      <motion.div
        className="max-w-5xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-block px-5 py-2 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full text-sm font-bold tracking-wide">
            ✨ LA RÉVOLUTION FAMILIALE
          </span>
        </motion.div>

        {/* Main Headline - CRYSTAL CLEAR */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-6 leading-tight tracking-tighter">
            L'App Familiale
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Qui Rapproche
            </span>
          </h1>
        </motion.div>

        {/* Clear Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto mb-4 font-semibold leading-relaxed"
        >
          Partagez. Organisez. Connectez.
        </motion.p>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          L'espace numérique bienveillant où chaque membre de la famille crée, partage et organise ses plus beaux moments ensemble.
        </motion.p>

        {/* Key Benefits - CLEAR & SCANNABLE */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12"
        >
          {[
            { icon: '🏠', label: 'Partage familial' },
            { icon: '📅', label: 'Agenda commun' },
            { icon: '💬', label: 'Messages sécurisés' },
            { icon: '🔒', label: 'Vos données protégées' },
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-2">{benefit.icon}</div>
              <p className="font-semibold text-sm text-gray-900 dark:text-white">{benefit.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats - Big & Bold */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-6 md:gap-12 mb-16 py-8 border-y border-gray-200 dark:border-gray-700"
        >
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent mb-2">
              50K+
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-bold text-sm md:text-base">Familles nous font confiance</p>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent mb-2">
              10K+
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-bold text-sm md:text-base">Activités partagées</p>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
              ★ 4.8
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-bold text-sm md:text-base">Note des utilisateurs</p>
          </div>
        </motion.div>

        {/* CTA Buttons - PROMINENT */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto"
          >
            📱 Télécharger l'App Gratuite
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 border-3 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-xl font-bold text-lg hover:bg-purple-50 dark:hover:bg-purple-950 transition-all w-full sm:w-auto"
          >
            En Savoir Plus
          </motion.button>
        </motion.div>

        {/* Animated Emojis - PLAYFUL TOUCH */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-8 md:gap-16 text-5xl md:text-7xl pt-12 pb-6"
        >
          <motion.span
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="cursor-pointer hover:scale-125 transition-transform"
            title="Famille"
          >
            👨‍👩‍👧‍👦
          </motion.span>
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity }}
            className="cursor-pointer hover:scale-125 transition-transform"
            title="Objectifs"
          >
            🎯
          </motion.span>
          <motion.span
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.2 }}
            className="cursor-pointer hover:scale-125 transition-transform"
            title="Maison"
          >
            🏠
          </motion.span>
          <motion.span
            animate={{ rotate: -360 }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="cursor-pointer hover:scale-125 transition-transform"
            title="Agenda"
          >
            📅
          </motion.span>
          <motion.span
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, delay: 0.4 }}
            className="cursor-pointer hover:scale-125 transition-transform"
            title="Messagerie"
          >
            💬
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  )
}
