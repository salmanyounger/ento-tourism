'use client'
import { useEffect, useRef, useState } from 'react'
import { WHATSAPP, COMPANY, type SubTour } from '@/data/tours'

const STYLES = [
  { bg: 'linear-gradient(145deg,#0C0E18,#1A1008)', accent: '#C9953A' },
  { bg: 'linear-gradient(145deg,#1A0804,#3A1A06)', accent: '#E8B86D' },
  { bg: 'linear-gradient(145deg,#050B18,#0A1425)', accent: '#B8C86D' },
]

export default function AnimatedFlyer({ tour }: { tour: SubTour }) {
  const starsRef = useRef<HTMLDivElement>(null)
  const [styleIdx, setStyleIdx] = useState(0)
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const c = starsRef.current; if (!c) return
    for (let i = 0; i < 55; i++) {
      const s = document.createElement('div')
      const sz = Math.random() * 2 + 0.3
      s.style.cssText = `position:absolute;width:${sz}px;height:${sz}px;background:#fff;border-radius:50%;left:${Math.random()*100}%;top:${Math.random()*75}%;animation:twk ${2+Math.random()*4}s ${Math.random()*4}s ease-in-out infinite alternate;`
      c.appendChild(s)
    }
  }, [])

  useEffect(() => {
    const t = setInterval(() => setFrame(f => (f + 1) % 3), 3000)
    return () => clearInterval(t)
  }, [])

  const frames = [
    { headline: tour.name, sub: tour.highlights.slice(0, 2).join(' · ') },
    { headline: `${tour.duration} · ${tour.rating}★`, sub: `${tour.reviews.toLocaleString()} happy guests` },
    { headline: tour.highlights.slice(2, 4).join(' · '), sub: 'Dubai, UAE · Daily departures' },
  ]

  const style = STYLES[styleIdx]

  return (
    <div className="rounded-2xl overflow-hidden border border-white/08 shadow-2xl">
      <div className="relative aspect-square flex flex-col items-center justify-center text-center p-8"
        style={{ background: style.bg }}>
        <div ref={starsRef} className="absolute inset-0 overflow-hidden" />
        <svg className="absolute bottom-0 w-full opacity-30" viewBox="0 0 400 140" preserveAspectRatio="none" style={{ height: '38%' }}>
          <path d="M0,140 L0,80 Q100,20 200,65 Q300,105 400,45 L400,140Z" fill="rgba(201,149,58,.25)" />
          <path d="M0,140 L0,115 Q200,90 400,112 L400,140Z" fill="rgba(90,48,16,.4)" />
        </svg>
        <div className="moon-float absolute top-5 right-7"
          style={{ width: '28px', height: '28px', background: 'radial-gradient(circle at 33% 28%,#FFFCE8,#F8DC65 45%,#C9953A)', borderRadius: '50%', boxShadow: '0 0 20px rgba(201,149,58,.5)' }} />
        <div className="relative z-10 w-full">
          <div className="text-xs font-semibold tracking-widest uppercase mb-3 opacity-60" style={{ color: style.accent }}>
            {COMPANY} · Dubai
          </div>
          <div className="font-bold text-white text-xl leading-tight mb-2 min-h-[56px] flex items-center justify-center"
            style={{ fontFamily: 'var(--font-playfair,serif)', transition: 'opacity 0.5s' }}>
            {frames[frame].headline}
          </div>
          <div className="text-white/40 text-xs mb-6 leading-relaxed">{frames[frame].sub}</div>
          <a href={`https://wa.me/${WHATSAPP}?text=Hi!%20I%20want%20to%20book%20${encodeURIComponent(tour.name)}`}
            target="_blank" rel="noopener"
            className="inline-block bg-gradient-to-r from-[#C9953A] to-[#B84420] text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-lg hover:-translate-y-0.5 transition-all">
            Book Now
          </a>
          <div className="text-white/20 text-xs mt-3">{WHATSAPP}</div>
        </div>
      </div>
      <div className="flex gap-2 p-3 bg-[#080C16] border-t border-white/05">
        <button onClick={() => setStyleIdx(i => (i + 1) % STYLES.length)}
          className="flex-1 py-2 rounded-xl bg-white/06 border border-white/08 text-white/60 text-xs font-medium hover:bg-white/10 transition-colors">
          🔄 New Style
        </button>
        <button onClick={() => alert('In production this saves as a PNG image ready for Instagram & WhatsApp.')}
          className="flex-1 py-2 rounded-xl bg-gradient-to-r from-[#C9953A] to-[#B84420] text-white text-xs font-semibold hover:opacity-90 transition-opacity">
          ⬇ Download Flyer
        </button>
      </div>
    </div>
  )
}
