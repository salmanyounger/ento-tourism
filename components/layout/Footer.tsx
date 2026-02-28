import Link from 'next/link'
import { WHATSAPP, COMPANY, OWNER } from '@/data/tours'
export default function Footer() {
  return (
    <footer className="bg-[#080C16] text-white/60">
      <div className="max-w-7xl mx-auto px-5 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="gold-text font-bold text-2xl mb-3" style={{fontFamily:'var(--font-playfair,serif)'}}>{COMPANY}</div>
          <p className="text-sm leading-relaxed text-white/40 max-w-xs">Your trusted partner for unforgettable experiences across the UAE. Founded by {OWNER}, based in Dubai.</p>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener" className="inline-block mt-5 bg-[#25D366] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#20ba5a] transition-colors">💬 WhatsApp Us</a>
        </div>
        <div>
          <div className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">Tours</div>
          {['Desert Safari','City Tours','Boat Tours','Adventure'].map(t=>(
            <Link key={t} href="/tours" className="block text-sm text-white/50 hover:text-[#C9953A] mb-2 transition-colors">{t}</Link>
          ))}
        </div>
        <div>
          <div className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">Company</div>
          {['About Us','Blog','Contact','Privacy Policy'].map(t=>(
            <Link key={t} href="#" className="block text-sm text-white/50 hover:text-[#C9953A] mb-2 transition-colors">{t}</Link>
          ))}
          <div className="mt-4 text-white/30 text-xs">{WHATSAPP}</div>
        </div>
      </div>
      <div className="border-t border-white/05 px-5 py-5 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/25">
        <span>© {new Date().getFullYear()} {COMPANY} · All rights reserved</span>
        <span>Made with ♥ in Dubai, UAE</span>
      </div>
    </footer>
  )
}
