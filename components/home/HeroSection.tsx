'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { WHATSAPP } from '@/data/tours'

export default function HeroSection() {
  const starsRef = useRef<HTMLDivElement>(null)
  const moonRef = useRef<HTMLDivElement>(null)
  const dunesRef = useRef<SVGSVGElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const btnsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Build stars
    const c = starsRef.current
    if (c) {
      for (let i = 0; i < 180; i++) {
        const s = document.createElement('div')
        const sz = Math.random() * 2.4 + 0.3
        s.style.cssText = `position:absolute;width:${sz}px;height:${sz}px;background:#fff;border-radius:50%;left:${Math.random()*100}%;top:${Math.random()*85}%;opacity:0;animation:twk ${2+Math.random()*5}s ${Math.random()*5}s ease-in-out infinite alternate;`
        c.appendChild(s)
      }
      // Shooting stars
      for (let i = 0; i < 3; i++) {
        const ss = document.createElement('div')
        ss.style.cssText = `position:absolute;height:1.5px;width:${80+Math.random()*100}px;background:linear-gradient(90deg,rgba(255,255,255,.9),transparent);border-radius:2px;left:${20+Math.random()*60}%;top:${5+Math.random()*30}%;animation:shoot ${8+Math.random()*6}s ${2+Math.random()*10}s ease-in infinite;`
        c.appendChild(ss)
      }
    }

    // GSAP cinematic intro timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Stars fade in slowly
    tl.to(starsRef.current!.children, {
      opacity: 1, duration: 2.5, stagger: 0.004, ease: 'power1.inOut'
    }, 0)

    // Moon drops in from above with bounce
    tl.fromTo(moonRef.current,
      { y: -120, opacity: 0, scale: 0.4 },
      { y: 0, opacity: 1, scale: 1, duration: 1.6, ease: 'elastic.out(1, 0.5)' },
    0.3)

    // Dunes rise from bottom
    tl.fromTo(dunesRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.8, ease: 'power2.out' },
    0.5)

    // Badge slides down
    tl.fromTo(badgeRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
    1.0)

    // Headline word by word
    tl.fromTo(headlineRef.current,
      { y: 60, opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' },
      { y: 0, opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1 },
    1.3)

    // Subtitle
    tl.fromTo(subRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9 },
    1.7)

    // Buttons pop in
    tl.fromTo(btnsRef.current!.children,
      { y: 25, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.15 },
    2.0)

    // Stats count up
    tl.fromTo(statsRef.current!.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
    2.4)

    // Scroll indicator
    tl.fromTo(scrollRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
    3.0)

    return () => { tl.kill() }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080C16]">
      {/* Background gradient */}
      <div className="absolute inset-0" style={{background:'radial-gradient(ellipse 80% 60% at 50% 105%,rgba(201,149,58,.2),transparent 55%),radial-gradient(ellipse 50% 40% at 85% 12%,rgba(184,68,32,.12),transparent),linear-gradient(155deg,#04070F,#080C18,#120E08,#180D05)'}}/>

      {/* Stars */}
      <div ref={starsRef} className="absolute inset-0 overflow-hidden"/>

      {/* Moon */}
      <div ref={moonRef} className="moon-float absolute top-[8%] right-[8%] md:right-[12%]"
        style={{width:'clamp(45px,6vw,80px)',height:'clamp(45px,6vw,80px)',background:'radial-gradient(circle at 33% 28%,#FFFCE8,#F8DC65 45%,#C9953A)',borderRadius:'50%',boxShadow:'0 0 60px rgba(201,149,58,.7),0 0 140px rgba(201,149,58,.25)',opacity:0}}/>

      {/* Dunes */}
      <svg ref={dunesRef} className="absolute bottom-0 w-full" style={{height:'38vh',opacity:0}} viewBox="0 0 1440 260" preserveAspectRatio="none">
        <path d="M0,260 L0,150 Q180,30 360,110 Q540,185 720,90 Q900,0 1080,80 Q1260,155 1440,100 L1440,260Z" fill="rgba(90,48,16,.35)"/>
        <path d="M0,260 L0,185 Q360,120 720,165 Q1080,205 1440,155 L1440,260Z" fill="rgba(60,30,8,.55)"/>
        <path d="M0,260 L0,220 Q360,195 720,215 Q1080,235 1440,210 L1440,260Z" fill="rgba(30,15,4,.75)"/>
        <path d="M0,260 L0,248 Q720,235 1440,248 L1440,260Z" fill="rgba(8,12,22,.9)"/>
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-5xl mx-auto pt-24 pb-48 md:pb-56">

        <div ref={badgeRef} style={{opacity:0}} className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9953A] animate-pulse inline-block"/>
          <span className="text-white/60 text-xs font-medium tracking-widest uppercase">Dubai & UAE's Most Trusted Tour Operator</span>
        </div>

        <h1 ref={headlineRef} style={{opacity:0,fontFamily:'var(--font-playfair,serif)',fontSize:'clamp(2.6rem,7vw,6.5rem)',fontWeight:900,lineHeight:1.05}} className="text-white mb-6">
          The UAE Like You've<br/>
          <em className="gold-text font-normal italic">Never Seen It</em>
        </h1>

        <p ref={subRef} style={{opacity:0}} className="text-white/50 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed mb-10">
          Desert safaris, city adventures, boat tours, and once-in-a-lifetime experiences — all across Dubai, Abu Dhabi & beyond.
        </p>

        <div ref={btnsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/tours"
            className="shimmer-btn bg-gradient-to-r from-[#C9953A] via-[#E8B86D] to-[#B84420] text-white font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-full shadow-2xl shadow-[#C9953A]/30 hover:-translate-y-1 hover:shadow-[#C9953A]/50 transition-all duration-300"
            style={{opacity:0}}>
            Explore All Tours
          </Link>
          <a href={`https://wa.me/${WHATSAPP}?text=Hi%20ENTO%20Tourism!%20I%27d%20like%20to%20book%20a%20tour.`}
            target="_blank" rel="noopener"
            className="flex items-center justify-center gap-2 bg-white/8 border border-white/15 text-white font-medium text-sm px-8 py-4 rounded-full hover:bg-white/12 hover:-translate-y-1 transition-all duration-300"
            style={{opacity:0}}>
            <span className="text-[#25D366]">💬</span> WhatsApp Us
          </a>
        </div>

        <div ref={statsRef} className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-5">
          {[{v:'10,000+',l:'Happy Guests'},{v:'4.9★',l:'Average Rating'},{v:'50+',l:'UAE Tours'},{v:'Free',l:'Hotel Pickup'}].map(s=>(
            <div key={s.l} style={{opacity:0}} className="text-center">
              <div className="gold-text font-bold text-2xl" style={{fontFamily:'var(--font-playfair,serif)'}}>{s.v}</div>
              <div className="text-white/35 text-xs tracking-widest uppercase mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} style={{opacity:0}} className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/30 animate-pulse"/>
        <span className="text-white/25 text-[10px] tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  )
}
