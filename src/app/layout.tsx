import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/providers/ThemeProvider'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nesti - L\'App Familiale pour Découvrir et Partager',
  description: 'Nesti est l\'application parfaite pour les familles. Découvrez des activités, organisez votre agenda, partagez des moments et restez connectés.',
  keywords: ['famille', 'activités', 'app', 'enfants', 'parents', 'découverte'],
  authors: [{ name: 'Nesti Team' }],
  openGraph: {
    title: 'Nesti - L\'App Familiale',
    description: 'Découvrez, organisez et partagez en famille',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
