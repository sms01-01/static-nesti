import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                🏠
              </div>
              <span className="font-bold text-lg">Nesti</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              L'application parfaite pour les familles. Découvrez, organisez et partagez ensemble.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Produit</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#features" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">Fonctionnalités</Link></li>
              <li><Link href="/#pricing" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">Tarifs</Link></li>
              <li><Link href="/faq" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Légal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/legal/privacy" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">Politique de confidentialité</Link></li>
              <li><Link href="/legal/terms" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">CGU</Link></li>
              <li><Link href="/legal/cookies" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">Cookies</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-600 dark:text-slate-400">
                📧 <a href="mailto:contact@nesti-app.fr" className="hover:text-purple-600 dark:hover:text-purple-400">contact@nesti-app.fr</a>
              </li>
              <li className="text-slate-600 dark:text-slate-400">
                ⚖️ <a href="mailto:legal@nesti-app.fr" className="hover:text-purple-600 dark:hover:text-purple-400">legal@nesti-app.fr</a>
              </li>
              <li className="text-slate-600 dark:text-slate-400">
                🔒 <a href="mailto:privacy@nesti-app.fr" className="hover:text-purple-600 dark:hover:text-purple-400">privacy@nesti-app.fr</a>
              </li>
              <li className="text-slate-600 dark:text-slate-400">
                📞 <a href="tel:+33636026060" className="hover:text-purple-600 dark:hover:text-purple-400">+33 6 36 02 60 60</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
            <p>&copy; {currentYear} Nesti. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 dark:hover:text-purple-400">Twitter</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 dark:hover:text-purple-400">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 dark:hover:text-purple-400">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
