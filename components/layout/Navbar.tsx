'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { WHATSAPP } from '@/data/tours'
import { useLang } from '@/context/LangContext'
import { LANGUAGES, LangCode } from '@/lib/translations'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links: [string, string, string][] = [
    ['/', 'home', t('home')],
    ['/tours', 'tours', t('tours')],
    ['/blog', 'blog', 'Blog'],
    ['/about', 'about', t('about')],
  ]

  return (
    <>
      {/* Language banner — shows when NOT in English */}
      {lang !== 'en' && (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-[#C9953A] text-white text-center text-xs py-1.5 flex items-center justify-center gap-3">
          <span className="opacity-75">{t('viewing_in')} {LANGUAGES[lang].flag} {LANGUAGES[lang].name}</span>
          <button onClick={() => setLang('en')}
            className="bg-white text-[#C9953A] font-bold px-3 py-0.5 rounded-full text-xs hover:bg-[#FAF5EC] transition-colors">
            🇬🇧 Switch to English
          </button>
        </div>
      )}

      <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 ${lang !== 'en' ? 'top-8' : 'top-0'} ${scrolled ? 'bg-[#FAF5EC]/95 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9953A] to-[#B84420] flex items-center justify-center">
              <span className="text-white font-bold text-sm" style={{ fontFamily: 'serif' }}>E</span>
            </div>
            <span className="font-bold text-lg transition-colors duration-300" style={{ fontFamily: 'var(--font-playfair,serif)' }}>
              <span className="gold-text">ENTO</span>
              <span className={scrolled ? 'text-[#1A1208]' : 'text-white'}> Tourism</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {links.map(([href, , label]) => (
              <Link key={href} href={href} className={`text-xs font-medium tracking-widest uppercase transition-colors hover:text-[#C9953A] ${scrolled ? 'text-[#1A1208]/60' : 'text-white/70'}`}>
                {label}
              </Link>
            ))}
          </div>

          {/* Right side: language + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language switcher */}
            <div className="relative">
              <button onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all ${scrolled ? 'border-[#1A1208]/15 text-[#1A1208]/60 hover:border-[#C9953A]/40' : 'border-white/20 text-white/70 hover:border-white/40'}`}>
                <span>{LANGUAGES[lang].flag}</span>
                <span className="font-medium">{LANGUAGES[lang].name}</span>
                <span className="opacity-50 text-[10px]">▾</span>
              </button>

              {langOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <div className="absolute right-0 top-full mt-2 w-44 bg-[#080C16] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50">
                    <div className="px-3 py-2 border-b border-white/08">
                      <div className="text-white/30 text-[10px] uppercase tracking-widest">Language</div>
                    </div>
                    <div className="max-h-72 overflow-y-auto py-1">
                      {(Object.keys(LANGUAGES) as LangCode[]).map(l => (
                        <button key={l} onClick={() => { setLang(l); setLangOpen(false) }}
                          className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors text-left ${l === lang ? 'bg-[#C9953A]/15 text-[#C9953A]' : 'text-white/60 hover:bg-white/05 hover:text-white'}`}>
                          <span className="text-base">{LANGUAGES[l].flag}</span>
                          <span>{LANGUAGES[l].name}</span>
                          {l === lang && <span className="ml-auto text-xs">✓</span>}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener"
              className={`flex items-center gap-2 text-xs font-medium transition-colors hover:text-[#25D366] ${scrolled ? 'text-[#1A1208]/50' : 'text-white/60'}`}>
              <span className="w-2 h-2 rounded-full bg-[#25D366] wa-pulse inline-block" />WhatsApp
            </a>

            <Link href="/tours" className="bg-gradient-to-r from-[#C9953A] to-[#B84420] text-white text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#C9953A]/30 hover:-translate-y-0.5 transition-all duration-200">
              {t('book_now')}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className={`md:hidden p-2 text-xl ${scrolled ? 'text-[#1A1208]' : 'text-white'}`}>
            {open ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-[#FAF5EC] border-t border-[#1A1208]/08 px-5 py-4 flex flex-col gap-4">
            {links.map(([href, , label]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="text-sm font-medium text-[#1A1208]/70 hover:text-[#C9953A] uppercase tracking-wide">
                {label}
              </Link>
            ))}

            {/* Mobile language grid */}
            <div>
              <div className="text-[#1A1208]/40 text-xs uppercase tracking-widest mb-2">Language</div>
              <div className="grid grid-cols-4 gap-2">
                {(Object.keys(LANGUAGES) as LangCode[]).map(l => (
                  <button key={l} onClick={() => { setLang(l); setOpen(false) }}
                    className={`flex flex-col items-center gap-0.5 py-2 rounded-xl text-xs transition-all ${l === lang ? 'bg-[#C9953A]/10 text-[#C9953A] font-semibold' : 'text-[#1A1208]/50 hover:bg-[#1A1208]/05'}`}>
                    <span className="text-lg">{LANGUAGES[l].flag}</span>
                    <span className="text-[9px]">{LANGUAGES[l].name.slice(0, 6)}</span>
                  </button>
                ))}
              </div>
            </div>

            {lang !== 'en' && (
              <button onClick={() => { setLang('en'); setOpen(false) }}
                className="bg-[#C9953A] text-white text-sm font-bold px-5 py-3 rounded-full text-center">
                🇬🇧 Switch to English
              </button>
            )}

            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener" className="bg-[#25D366] text-white text-sm font-semibold px-5 py-3 rounded-full text-center">💬 WhatsApp Us</a>
          </div>
        )}
      </nav>
    </>
  )
}
