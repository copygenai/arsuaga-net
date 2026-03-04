import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ignacio Arsuaga — Founder, Entrepreneur, Lawyer',
  description: 'Co-founder of CitizenGO and Hazte Oír. Lawyer, entrepreneur, and father of five. Madrid, Spain.',
  openGraph: {
    title: 'Ignacio Arsuaga',
    description: 'Co-founder of CitizenGO and Hazte Oír. Lawyer, entrepreneur, and father of five.',
    url: 'https://arsuaga.net/en',
    siteName: 'Ignacio Arsuaga',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Ignacio Arsuaga',
    description: 'Co-founder of CitizenGO and Hazte Oír. Lawyer, entrepreneur, and father of five.',
    creator: '@iarsuaga',
  },
}

export default function HomeEN() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-[#e8eaf0]">

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0f1e]/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-sm text-white/40 font-medium tracking-widest uppercase">Ignacio Arsuaga</span>
          <Link href="/" className="text-sm text-white/40 hover:text-[#d4a843] transition-colors">ES</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#d4a843] text-sm font-medium tracking-widest uppercase mb-6">Madrid, Spain</p>
          <h1 className="text-5xl md:text-6xl font-light text-white leading-tight mb-4">
            Ignacio<br />
            <span className="font-semibold">Arsuaga</span>
          </h1>
          <p className="text-xl text-white/60 font-light mt-6 leading-relaxed">
            Lawyer. Entrepreneur. Father of five.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="https://citizengo.org" target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 bg-white/5 hover:bg-[#d4a843]/20 border border-white/10 hover:border-[#d4a843]/40 rounded-full text-sm text-white/70 hover:text-[#d4a843] transition-all">
              CitizenGO
            </a>
            <a href="https://hazteoir.org" target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 bg-white/5 hover:bg-[#d4a843]/20 border border-white/10 hover:border-[#d4a843]/40 rounded-full text-sm text-white/70 hover:text-[#d4a843] transition-all">
              Hazte Oír
            </a>
            <a href="https://copygen.ai" target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 bg-white/5 hover:bg-[#d4a843]/20 border border-white/10 hover:border-[#d4a843]/40 rounded-full text-sm text-white/70 hover:text-[#d4a843] transition-all">
              Copygen.ai
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="h-px bg-white/5"></div>
      </div>

      {/* Bio */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-6 text-white/70 text-lg leading-relaxed font-light">
          <p>
            I co-founded two of the most influential civic activism platforms in the Spanish-speaking world:
            <strong className="text-white font-medium"> Hazte Oír</strong> and <strong className="text-white font-medium">CitizenGO</strong>.
          </p>
          <p>
            I founded <strong className="text-white font-medium">Hazte Oír</strong> in 2001 as an organized citizen
            voice in defense of life, the family and freedom. Today it has over 600,000 followers in Spain.
          </p>
          <p>
            I launched <strong className="text-white font-medium">CitizenGO</strong> in 2013. It is now a global online
            petition platform active in 40+ countries with more than 20 million supporters. One of the largest
            pro-life and pro-family activism platforms in the world.
          </p>
          <p>
            I also co-founded <strong className="text-white font-medium">Copygen.ai</strong>, a startup factory.
            The thesis: lean companies run by a minimal human team and AI agents working around the clock.
          </p>
          <p>
            I hold a law degree from <strong className="text-white font-medium">Universidad Pontificia Comillas (ICADE)</strong>
            and completed postgraduate studies at <strong className="text-white font-medium">Fordham Law School</strong>, New York.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="h-px bg-white/5"></div>
      </div>

      {/* Links */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xs font-medium tracking-widest uppercase text-[#d4a843] mb-8">Connect</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'LinkedIn', url: 'https://linkedin.com/in/iarsuaga', icon: '🔗' },
              { label: 'X / Twitter', url: 'https://x.com/iarsuaga', icon: '𝕏' },
              { label: 'Linktree', url: 'https://linktr.ee/iarsuaga', icon: '🌿' },
              { label: 'CitizenGO', url: 'https://citizengo.org', icon: '✊' },
              { label: 'Hazte Oír', url: 'https://hazteoir.org', icon: '📢' },
              { label: 'Copygen.ai', url: 'https://copygen.ai', icon: '🤖' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white/3 hover:bg-white/8 border border-white/5 hover:border-[#d4a843]/30 rounded-xl transition-all group"
              >
                <span className="text-lg">{link.icon}</span>
                <span className="text-sm text-white/60 group-hover:text-white transition-colors">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <p className="text-sm text-white/20">© 2026 Ignacio Arsuaga</p>
          <div className="flex gap-4 text-sm text-white/20">
            <Link href="/" className="hover:text-white/60 transition-colors">ES</Link>
            <span>·</span>
            <span className="text-[#d4a843]">EN</span>
          </div>
        </div>
      </footer>

    </main>
  )
}
