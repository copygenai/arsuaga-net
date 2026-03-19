'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { FaXTwitter, FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa6'

type ContentType = {
  nav: { lang: string; langHref: string }
  hero: { name: string; subtitle: string; scroll: string }
  bio: { title: string; text: string[] }
  stats: { value: string; label: string }[]
  projects: {
    title: string
    items: { name: string; desc: string; url: string; emoji: string }[]
  }
  contact: {
    title: string
    subtitle: string
    name: string
    email: string
    message: string
    send: string
    sending: string
    success: string
    error: string
  }
  footer: { copy: string }
}

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}

function StatCounter({ value, label }: { value: string; label: string }) {
  const [displayed, setDisplayed] = useState('0')
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const numericPart = value.replace(/[^0-9]/g, '')
          const suffix = value.replace(/[0-9]/g, '')
          const target = parseInt(numericPart)
          const duration = 1500
          const steps = 40
          const increment = target / steps

          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setDisplayed(value)
              clearInterval(timer)
            } else {
              setDisplayed(Math.floor(current) + suffix)
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-center px-6 py-4">
      <div className="text-3xl md:text-4xl font-bold gold-gradient mb-1">
        {displayed}
      </div>
      <div className="text-sm text-gray-400 uppercase tracking-wider">
        {label}
      </div>
    </div>
  )
}

export default function HomePage({ t }: { t: ContentType }) {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  useScrollAnimation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, lang: t.nav.lang === 'ES' ? 'en' : 'es' }),
      })

      if (res.ok) {
        setFormState('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  return (
    <main className="min-h-screen bg-dark">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-white font-semibold text-lg tracking-tight">IA</a>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors hidden sm:block">
              {t.bio.title}
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white text-sm transition-colors hidden sm:block">
              {t.projects.title}
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors hidden sm:block">
              {t.contact.title}
            </a>
            <a
              href={t.nav.langHref}
              className="text-gold border border-gold/30 px-3 py-1 rounded text-sm hover:bg-gold/10 transition-colors"
            >
              {t.nav.lang}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                {t.hero.name}
              </h1>
              <p className="text-xl md:text-2xl text-gold font-light tracking-wide mb-6">
                {t.hero.subtitle}
              </p>
              <div className="flex gap-5 justify-center md:justify-start">
                <a href="https://x.com/iarsuaga" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors hover:scale-110 transition-transform" title="X / Twitter"><FaXTwitter size={22} /></a>
                <a href="https://linkedin.com/in/iarsuaga" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#0A66C2] transition-colors hover:scale-110 transition-transform" title="LinkedIn"><FaLinkedinIn size={22} /></a>
                <a href="https://instagram.com/iarsuaga" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#E4405F] transition-colors hover:scale-110 transition-transform" title="Instagram"><FaInstagram size={22} /></a>
                <a href="https://facebook.com/iarsuaga" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#1877F2] transition-colors hover:scale-110 transition-transform" title="Facebook"><FaFacebookF size={22} /></a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-gold/20 shadow-2xl shadow-gold/5">
                <Image
                  src="/ignacio-arsuaga.jpg"
                  alt="Ignacio Arsuaga"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-20">
            <a
              href="#about"
              className="text-gray-500 text-sm flex flex-col items-center gap-2 hover:text-gold transition-colors"
            >
              {t.hero.scroll}
              <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-white mb-10">
            {t.bio.title}
          </h2>
          {t.bio.text.map((paragraph, i) => (
            <p
              key={i}
              className="animate-on-scroll text-gray-300 text-lg leading-relaxed mb-6"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/5 bg-dark-card">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.stats.map((stat, i) => (
              <StatCounter key={i} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t.projects.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.projects.items.map((project, i) => (
              <a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-on-scroll card-hover block bg-dark-card border border-white/5 rounded-xl p-8 group"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="text-4xl mb-4">{project.emoji}</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
                <div className="mt-6 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32 bg-dark-card border-t border-white/5">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-white mb-3 text-center">
            {t.contact.title}
          </h2>
          <p className="animate-on-scroll text-gray-400 text-center mb-10">
            {t.contact.subtitle}
          </p>

          {formState === 'success' ? (
            <div className="animate-on-scroll visible text-center py-12">
              <div className="text-4xl mb-4">✓</div>
              <p className="text-gold text-lg">{t.contact.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="animate-on-scroll space-y-5">
              <div>
                <input
                  type="text"
                  placeholder={t.contact.name}
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={t.contact.email}
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder={t.contact.message}
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                />
              </div>
              {formState === 'error' && (
                <p className="text-red-400 text-sm">{t.contact.error}</p>
              )}
              <button
                type="submit"
                disabled={formState === 'sending'}
                className="w-full bg-gold text-dark font-semibold py-3 rounded-lg hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState === 'sending' ? t.contact.sending : t.contact.send}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">{t.footer.copy}</p>
          <div className="flex gap-5 items-center">
            <a href="https://x.com/iarsuaga" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="X / Twitter"><FaXTwitter size={18} /></a>
            <a href="https://linkedin.com/in/iarsuaga" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0A66C2] transition-colors" title="LinkedIn"><FaLinkedinIn size={18} /></a>
            <a href="https://instagram.com/iarsuaga" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#E4405F] transition-colors" title="Instagram"><FaInstagram size={18} /></a>
            <a href="https://facebook.com/iarsuaga" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#1877F2] transition-colors" title="Facebook"><FaFacebookF size={18} /></a>
          </div>
        </div>
      </footer>
    </main>
  )
}
