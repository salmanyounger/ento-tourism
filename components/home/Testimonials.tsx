'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  {n:'Sarah M.',c:'🇬🇧 UK',r:5,t:'Evening Desert Safari',tx:'Absolutely magical. The dune bashing scared me half to death and I loved every second. The camp at night — the stars were unreal.'},
  {n:'Ahmed K.',c:'🇩🇪 Germany',r:5,t:'Private Desert Safari',tx:"Booked the private safari for my anniversary. Salman's team set up the camp with flowers and a cake. My wife cried happy tears. Perfect."},
  {n:'Priya R.',c:'🇮🇳 India',r:5,t:'Overnight Safari',tx:'The overnight experience was worth every dirham. Waking up in the desert at sunrise with Arabic coffee in hand — nothing in Dubai compares.'},
  {n:'James T.',c:'🇺🇸 USA',r:5,t:'Dune Buggy Safari',tx:'The buggy safari was the highlight of our entire UAE trip. Professional team, thorough safety briefing, incredible dunes.'},
  {n:'Maria L.',c:'🇧🇷 Brazil',r:5,t:'Morning Safari',tx:'Went for the morning safari to avoid the heat — great decision! Fewer crowds, beautiful golden light, completely different atmosphere.'},
  {n:'Yuki S.',c:'🇯🇵 Japan',r:5,t:'Evening Desert Safari',tx:'Communication on WhatsApp was instant and very helpful. The tour itself was beyond expectations. Will book again next year.'},
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } }
      )

      // Cards come in from alternating sides
      Array.from(cardsRef.current!.children).forEach((card, i) => {
        gsap.fromTo(card,
          { x: i % 2 === 0 ? -50 : 50, opacity: 0, scale: 0.95 },
          { x: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 88%' },
            delay: (i % 3) * 0.1 }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#FAF5EC] to-[#FFFDF8] py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-14" style={{opacity:0}}>
          <div className="text-xs font-semibold tracking-widest uppercase text-[#C9953A] mb-3">Real Guest Reviews</div>
          <h2 className="font-bold text-[#1A1208]" style={{fontSize:'clamp(1.8rem,4vw,3rem)',fontFamily:'var(--font-playfair,serif)'}}>
            10,000+ Guests. <em className="gold-text font-normal italic">One Common Feeling.</em>
          </h2>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r,i)=>(
            <div key={i} style={{opacity:0}} className="card-lift bg-white border border-[#1A1208]/06 rounded-2xl p-6">
              <div className="flex gap-0.5 mb-4">{[...Array(r.r)].map((_,j)=><span key={j} className="text-[#C9953A] text-sm">★</span>)}</div>
              <p className="text-[#1A1208]/65 text-sm leading-relaxed mb-5 italic" style={{fontFamily:'var(--font-playfair,serif)'}}>"{r.tx}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[#1A1208] text-sm">{r.n}</div>
                  <div className="text-[#1A1208]/40 text-xs">{r.c}</div>
                </div>
                <div className="text-xs text-[#C9953A] font-medium bg-[#C9953A]/08 px-3 py-1 rounded-full">{r.t}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
