import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-[#e8eaf0]">

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0f1e]/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-sm text-white/40 font-medium tracking-widest uppercase">Ignacio Arsuaga</span>
          <Link href="/en" className="text-sm text-white/40 hover:text-[#d4a843] transition-colors">EN</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#d4a843] text-sm font-medium tracking-widest uppercase mb-6">Madrid, España</p>
          <h1 className="text-5xl md:text-6xl font-light text-white leading-tight mb-4">
            Ignacio<br />
            <span className="font-semibold">Arsuaga</span>
          </h1>
          <p className="text-xl text-white/60 font-light mt-6 leading-relaxed">
            Abogado. Emprendedor. Padre de cinco.
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
            Cofundador de dos de las plataformas de activismo cívico más influyentes del mundo hispanohablante:
            <strong className="text-white font-medium"> Hazte Oír</strong> y <strong className="text-white font-medium">CitizenGO</strong>.
          </p>
          <p>
            <strong className="text-white font-medium">Hazte Oír</strong> nació en 2001 como una voz ciudadana
            organizada en defensa de la familia y los valores tradicionales. Hoy cuenta con más de 600.000 seguidores en España.
          </p>
          <p>
            <strong className="text-white font-medium">CitizenGO</strong>, lanzada en 2013, es una plataforma global
            de peticiones online activa en más de 40 países con más de 20 millones de seguidores. Considerada una de las
            mayores plataformas de activismo conservador del mundo.
          </p>
          <p>
            Actualmente dirijo también <strong className="text-white font-medium">Copygen.ai</strong>, una startup
            de automatización empresarial mediante inteligencia artificial. La tesis: startups lean que funcionan con
            un equipo mínimo de personas y agentes de IA trabajando 24/7.
          </p>
          <p>
            Licenciado en Derecho por la <strong className="text-white font-medium">Universidad Pontificia Comillas (ICADE)</strong>.
            Posgrado en <strong className="text-white font-medium">Fordham Law School</strong>, Nueva York.
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
          <h2 className="text-xs font-medium tracking-widest uppercase text-[#d4a843] mb-8">Contacto y Redes</h2>
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
            <span className="text-[#d4a843]">ES</span>
            <span>·</span>
            <Link href="/en" className="hover:text-white/60 transition-colors">EN</Link>
          </div>
        </div>
      </footer>

    </main>
  )
}
