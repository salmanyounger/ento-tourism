'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reasons = [
  {e:'🏆',t:'10 Years of Experience',d:'Founded by Salman Ali, ENTO Tourism has been running tours since 2015. We know every dune, every alley, and every sunset spot in the UAE.'},
  {e:'✅',t:'Free Cancellation',d:'Plans change. Book with confidence — full refund if you cancel 24 hours before your tour starts. No questions, no fees.'},
  {e:'🚗',t:'Hotel Pickup Included',d:'We come to you. Free door-to-door pickup from any hotel or residence across Dubai and surrounding areas.'},
  {e:'💬',t:'24/7 WhatsApp Support',d:'Text us anytime. A real person replies within minutes — in English, Arabic, Hindi, and Urdu.'},
  {e:'⭐',t:'Verified Reviews Only',d:'Every review is from a real guest who booked through us. 4.9 average from 10,000+ guests.'},
  {e:'💰',t:'Best Price Guarantee',d:"Found it cheaper elsewhere? We match the price and add a complimentary upgrade. That's our commitment."},
]

export default function WhyENTO() {
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

      gsap.fromTo(cardsRef.current!.children,
        { y: 50, opacity: 0, scale: 0.92 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' } }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-14" style={{opacity:0}}>
          <div className="text-xs font-semibold tracking-widest uppercase text-[#C9953A] mb-3">Why Book With Us</div>
          <h2 className="font-bold text-[#1A1208]" style={{fontSize:'clamp(1.8rem,4vw,3rem)',fontFamily:'var(--font-playfair,serif)'}}>
            ENTO Tourism — <em className="gold-text font-normal italic">Your Trust, Our Responsibility</em>
          </h2>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((r,i)=>(
            <div key={i} style={{opacity:0}} className="card-lift bg-[#FFFDF8] border border-[#1A1208]/06 rounded-2xl p-7">
              <div className="text-4xl mb-4">{r.e}</div>
              <h3 className="font-bold text-[#1A1208] text-lg mb-3" style={{fontFamily:'var(--font-playfair,serif)'}}>{r.t}</h3>
              <p className="text-[#1A1208]/55 text-sm leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
