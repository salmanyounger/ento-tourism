'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const cats = [
  {slug:'desert-safari',name:'Desert Safari',emoji:'🏜️',count:'6 Experiences',desc:'Dunes, stars & Bedouin camps',grad:'from-[#C9953A]/20 to-[#B84420]/10',border:'border-[#C9953A]/20'},
  {slug:'city-tours',name:'City Tours',emoji:'🏙️',count:'12 Experiences',desc:'Dubai, Abu Dhabi & beyond',grad:'from-blue-500/10 to-blue-900/5',border:'border-blue-400/15'},
  {slug:'boat-tours',name:'Boat Tours',emoji:'⛵',count:'8 Experiences',desc:'Marina, Palm & Dubai Creek',grad:'from-cyan-500/10 to-teal-900/5',border:'border-cyan-400/15'},
  {slug:'adventure',name:'Adventure Sports',emoji:'🪂',count:'10 Experiences',desc:'Skydiving, zip-lines & more',grad:'from-red-500/10 to-orange-900/5',border:'border-red-400/15'},
  {slug:'theme-parks',name:'Theme Parks',emoji:'🎡',count:'7 Experiences',desc:'World-class parks in UAE',grad:'from-purple-500/10 to-purple-900/5',border:'border-purple-400/15'},
  {slug:'cultural',name:'Cultural Tours',emoji:'🕌',count:'9 Experiences',desc:'Heritage, souks & history',grad:'from-amber-500/10 to-amber-900/5',border:'border-amber-400/15'},
  {slug:'helicopter',name:'Helicopter Tours',emoji:'🚁',count:'4 Experiences',desc:'Dubai from the sky',grad:'from-slate-500/10 to-slate-900/5',border:'border-slate-400/15'},
  {slug:'water-parks',name:'Water Parks',emoji:'🌊',count:'5 Experiences',desc:'Wild Wadi, Yas & more',grad:'from-teal-500/10 to-teal-900/5',border:'border-teal-400/15'},
]

export default function CategoriesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Title reveal
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%' }
        }
      )

      // Cards stagger in like flipping cards
      gsap.fromTo(gridRef.current!.children,
        { y: 60, opacity: 0, scale: 0.85, rotateY: 15 },
        {
          y: 0, opacity: 1, scale: 1, rotateY: 0,
          duration: 0.7, stagger: 0.08, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-5 mb-24">
      <div ref={titleRef} className="text-center mb-12" style={{opacity:0}}>
        <div className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9953A] mb-3">All UAE Tours</div>
        <h2 className="font-bold text-[#1A1208] leading-tight" style={{fontSize:'clamp(1.8rem,4vw,3rem)',fontFamily:'var(--font-playfair,serif)'}}>
          What Would You Like<br/><em className="gold-text font-normal italic">to Experience?</em>
        </h2>
      </div>

      <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cats.map((cat) => (
          <Link key={cat.slug} href={`/tours/${cat.slug}`}
            className={`card-lift group relative bg-gradient-to-br ${cat.grad} border ${cat.border} rounded-2xl p-5 text-center`}
            style={{opacity:0}}>
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{cat.emoji}</div>
            <div className="font-bold text-[#1A1208] text-base mb-1" style={{fontFamily:'var(--font-playfair,serif)'}}>{cat.name}</div>
            <div className="text-[#1A1208]/40 text-xs mb-1">{cat.count}</div>
            <div className="text-[#1A1208]/55 text-xs leading-relaxed hidden md:block">{cat.desc}</div>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C9953A] text-xs font-medium">View →</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
