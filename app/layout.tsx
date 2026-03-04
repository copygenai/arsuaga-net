import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ignacio Arsuaga — Fundador, Emprendedor, Abogado',
  description: 'Cofundador de CitizenGO y Hazte Oír. Abogado, emprendedor y padre de cinco. Madrid, España.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
  },
  openGraph: {
    title: 'Ignacio Arsuaga',
    description: 'Cofundador de CitizenGO y Hazte Oír. Abogado, emprendedor y padre de cinco.',
    url: 'https://arsuaga.net',
    siteName: 'Ignacio Arsuaga',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Ignacio Arsuaga',
    description: 'Cofundador de CitizenGO y Hazte Oír. Abogado, emprendedor y padre de cinco.',
    creator: '@iarsuaga',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
