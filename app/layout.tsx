import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ignacio Arsuaga — Founder, Entrepreneur, Activist',
  description: 'Founder of CitizenGO and Hazte Oír. Building Civon and Copygen.ai. 19M+ supporters across 50 countries.',
  openGraph: {
    title: 'Ignacio Arsuaga',
    description: 'Founder of CitizenGO and Hazte Oír. Building Civon and Copygen.ai.',
    url: 'https://arsuaga.net',
    siteName: 'Ignacio Arsuaga',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ignacio Arsuaga',
    description: 'Founder of CitizenGO and Hazte Oír. Building Civon and Copygen.ai.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
