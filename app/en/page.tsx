'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import type { Metadata } from 'next'

const stats = [
  { value: '20M+', label: 'global supporters' },
  { value: '600K', label: 'Hazte Oír followers' },
  { value: '40+', label: 'countries active' },
  { value: '25', label: 'years in civic movements' },
]

export default function HomeEN() {
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
          <Link href="/" className="text-sm text-white/40 hover:text-[#d4a843] transition-colors">ES</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row md:items-end gap-10">
          <div className="flex-1">
            <p className="text-[#d4a843] text-sm font-medium tracking-widest uppercase mb-6">Madrid, Spain</p>
            <h1 className="text-5xl md:text-6xl font-light text-white leading-tight mb-4">
              Ignacio<br />
              <span className="font-semibold">Arsuaga</span>
            </h1>
            <p className="text-xl text-white/60 font-light mt-6 leading-relaxed">
              Lawyer. Entrepreneur. Father of five.
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
            In 2001, I founded <strong className="text-white font-medium">Hazte Oír</strong> with a sheet of paper and one conviction: that citizens who defend life and family deserve a voice as loud as anyone else's. Today we are 600,000 strong.
          </p>
          <p>
            In 2013, I co-founded <strong className="text-white font-medium">CitizenGO</strong>. The question was simple: what if we gave millions of people around the world a tool to act, instead of just complain? The answer: <strong className="text-white font-medium">20 million supporters across 40+ countries</strong>. Petitions that have moved governments, changed laws, and saved lives.
          </p>
          <p>
            Now I am on the next chapter: <strong className="text-white font-medium">Copygen.ai</strong>, a startup factory built on a thesis I believe is inevitable — that the companies of the future will run with minimal teams and AI agents working around the clock. I am testing it in real time.
          </p>
          <p>
            I hold a law degree from <strong className="text-white font-medium">ICADE (Comillas)</strong> and studied at <strong className="text-white font-medium">Fordham Law School</strong>, New York. But the best school has been the street: 25 years building movements that people ignored — until they couldn't.
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
          <h2 className="text-xs font-medium tracking-widest uppercase text-[#d4a843] mb-2">Contact</h2>
          <p className="text-white/40 text-sm mb-8">Want to reach out? Fill in the form and I will get back to you.</p>

          {formState === 'sent' ? (
            <div className="p-8 rounded-2xl border border-[#d4a843]/20 bg-[#d4a843]/5 text-center">
              <p className="text-[#d4a843] text-lg font-medium mb-2">Message sent</p>
              <p className="text-white/50 text-sm">I have sent a confirmation to your email. Thank you for writing.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Name</label>
                  <input
                    type="text" required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a843]/40 transition-colors text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Email</label>
                  <input
                    type="email" required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a843]/40 transition-colors text-sm"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Message</label>
                <textarea
                  required rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a843]/40 transition-colors text-sm resize-none"
                  placeholder="How can I help?"
                />
              </div>
              {formState === 'error' && (
                <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
              )}
              <button
                type="submit" disabled={formState === 'sending'}
                className="px-8 py-3 bg-[#d4a843] hover:bg-[#d4a843]/80 disabled:opacity-50 rounded-xl text-[#0a0f1e] font-medium text-sm transition-all">
                {formState === 'sending' ? 'Sending...' : 'Send message'}
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
            <Link href="/" className="hover:text-white/60 transition-colors">ES</Link>
            <span>·</span>
            <span className="text-[#d4a843]">EN</span>
          </div>
        </div>
      </footer>

    </main>
  )
}
