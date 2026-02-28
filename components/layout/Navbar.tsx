'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { WHATSAPP } from '@/data/tours'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const links:[string,string][] = [['/', 'Home'],['/tours','Tours'],['/blog','Blog'],['/about','About']]
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled?'bg-[#FAF5EC]/95 backdrop-blur-xl shadow-sm py-3':'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9953A] to-[#B84420] flex items-center justify-center">
            <span className="text-white font-bold text-sm" style={{fontFamily:'serif'}}>E</span>
          </div>
          <span className="font-bold text-lg transition-colors duration-300" style={{fontFamily:'var(--font-playfair,serif)'}}>
            <span className="gold-text">ENTO</span>
            <span className={scrolled?'text-[#1A1208]':'text-white'}> Tourism</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-7">
          {links.map(([href,label])=>(
            <Link key={href} href={href} className={`text-xs font-medium tracking-widest uppercase transition-colors hover:text-[#C9953A] ${scrolled?'text-[#1A1208]/60':'text-white/70'}`}>{label}</Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener"
            className={`flex items-center gap-2 text-xs font-medium transition-colors hover:text-[#25D366] ${scrolled?'text-[#1A1208]/50':'text-white/60'}`}>
            <span className="w-2 h-2 rounded-full bg-[#25D366] wa-pulse inline-block"/>WhatsApp
          </a>
          <Link href="/tours" className="bg-gradient-to-r from-[#C9953A] to-[#B84420] text-white text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#C9953A]/30 hover:-translate-y-0.5 transition-all duration-200">
            Book Now
          </Link>
        </div>
        <button onClick={()=>setOpen(!open)} className={`md:hidden p-2 text-xl ${scrolled?'text-[#1A1208]':'text-white'}`}>
          {open?'✕':'☰'}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#FAF5EC] border-t border-[#1A1208]/08 px-5 py-4 flex flex-col gap-4">
          {links.map(([href,label])=>(
            <Link key={href} href={href} onClick={()=>setOpen(false)} className="text-sm font-medium text-[#1A1208]/70 hover:text-[#C9953A] uppercase tracking-wide">{label}</Link>
          ))}
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener" className="bg-[#25D366] text-white text-sm font-semibold px-5 py-3 rounded-full text-center">💬 WhatsApp Us</a>
        </div>
      )}
    </nav>
  )
}
