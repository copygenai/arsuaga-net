'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const stats = [
  { value: '20M+', label: 'seguidores globales' },
  { value: '600K', label: 'seguidores Hazte Oír' },
  { value: '40+', label: 'países activos' },
  { value: '25', label: 'años en movimientos cívicos' },
]

export default function Home() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormState('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setFormState(res.ok ? 'sent' : 'error')
    } catch {
      setFormState('error')
    }
  }

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
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row md:items-end gap-10">
          <div className="flex-1">
            <p className="text-[#d4a843] text-sm font-medium tracking-widest uppercase mb-6">Madrid, España</p>
            <h1 className="text-5xl md:text-6xl font-light text-white leading-tight mb-4">
              Ignacio<br />
              <span className="font-semibold">Arsuaga</span>
            </h1>
            <p className="text-xl text-white/60 font-light mt-6 leading-relaxed">
              Abogado. Emprendedor. Padre de cinco.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { label: 'CitizenGO', url: 'https://citizengo.org' },
                { label: 'Hazte Oír', url: 'https://hazteoir.org' },
                { label: 'Copygen.ai', url: 'https://copygen.ai' },
              ].map(link => (
                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/5 hover:bg-[#d4a843]/20 border border-white/10 hover:border-[#d4a843]/40 rounded-full text-sm text-white/70 hover:text-[#d4a843] transition-all">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:w-56 flex-shrink-0">
            <Image
              src="/ignacio-arsuaga.jpg"
              alt="Ignacio Arsuaga"
              width={224}
              height={280}
              className="rounded-2xl object-cover object-top w-full aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 px-6">
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {stats.map((s) => (
            <div key={s.value} className="bg-[#0a0f1e] px-6 py-6 text-center">
              <p className="text-3xl font-semibold text-[#d4a843]">{s.value}</p>
              <p className="text-xs text-white/40 mt-1 leading-snug">{s.label}</p>
            </div>
          ))}
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
            En 2001, fundé <strong className="text-white font-medium">Hazte Oír</strong> con una hoja de papel y una convicción: que los ciudadanos que defienden la vida y la familia merecen una voz tan fuerte como cualquier otra. Hoy somos más de 600.000.
          </p>
          <p>
            En 2013, cofundé <strong className="text-white font-medium">CitizenGO</strong>. La pregunta era simple: ¿qué pasaría si les diéramos a millones de personas en todo el mundo una herramienta para actuar en lugar de solo quejarse? La respuesta: más de <strong className="text-white font-medium">20 millones de seguidores en más de 40 países</strong>. Peticiones que han movido gobiernos, cambiado leyes y salvado vidas.
          </p>
          <p>
            Ahora estoy en el siguiente capítulo: <strong className="text-white font-medium">Copygen.ai</strong>, una fábrica de startups construidas sobre una tesis que me parece inevitable — que las empresas del futuro funcionarán con equipos mínimos y agentes de IA trabajando las 24 horas. Lo estoy probando en tiempo real.
          </p>
          <p>
            Soy licenciado en Derecho por <strong className="text-white font-medium">ICADE (Comillas)</strong> y estudié en <strong className="text-white font-medium">Fordham Law School</strong>, Nueva York. Pero la mejor escuela ha sido la calle: 25 años construyendo movimientos que la gente ignoraba —hasta que no pudieron.
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
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white/3 hover:bg-white/8 border border-white/5 hover:border-[#d4a843]/30 rounded-xl transition-all group">
                <span className="text-lg">{link.icon}</span>
                <span className="text-sm text-white/60 group-hover:text-white transition-colors">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="h-px bg-white/5"></div>
      </div>

      {/* Contact form */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xs font-medium tracking-widest uppercase text-[#d4a843] mb-2">Contacto</h2>
          <p className="text-white/40 text-sm mb-8">¿Quieres escribirme? Rellena el formulario y te respondo en cuanto pueda.</p>

          {formState === 'sent' ? (
            <div className="p-8 rounded-2xl border border-[#d4a843]/20 bg-[#d4a843]/5 text-center">
              <p className="text-[#d4a843] text-lg font-medium mb-2">Mensaje enviado</p>
              <p className="text-white/50 text-sm">Te he enviado una confirmación al correo. Gracias por escribirme.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Nombre</label>
                  <input
                    type="text" required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a843]/40 transition-colors text-sm"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Email</label>
                  <input
                    type="email" required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a843]/40 transition-colors text-sm"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Mensaje</label>
                <textarea
                  required rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a843]/40 transition-colors text-sm resize-none"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>
              {formState === 'error' && (
                <p className="text-red-400 text-sm">Hubo un error al enviar. Inténtalo de nuevo.</p>
              )}
              <button
                type="submit" disabled={formState === 'sending'}
                className="px-8 py-3 bg-[#d4a843] hover:bg-[#d4a843]/80 disabled:opacity-50 rounded-xl text-[#0a0f1e] font-medium text-sm transition-all">
                {formState === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          )}
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
