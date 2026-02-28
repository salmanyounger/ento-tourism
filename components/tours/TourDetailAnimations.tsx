'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function HeroAnimations() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo('.td-breadcrumb', { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.6 }, 0.2)
    tl.fromTo('.td-emoji', { opacity: 0, scale: 0.3, y: -60 }, { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'back.out(1.7)' }, 0.4)
    tl.fromTo('.td-badge', { opacity: 0, y: -20, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.5 }, 0.7)
    tl.fromTo('.td-title', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9 }, 0.8)
    tl.fromTo('.td-tagline', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 1.1)
    tl.fromTo('.td-stat', { opacity: 0, scale: 0.85, y: 15 }, { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.08 }, 1.2)
    tl.fromTo('.td-btn', { opacity: 0, scale: 0.88, y: 10 }, { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'back.out(1.4)' }, 1.5)
    tl.fromTo('.td-flyer', { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }, 0.9)
    return () => { tl.kill() }
  }, [])
  return null
}

export function SectionAnimations() {
  useEffect(() => {
    gsap.utils.toArray<Element>('.td-section-title').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%' } }
      )
    })

    gsap.fromTo('.td-highlight',
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'back.out(1.3)',
        scrollTrigger: { trigger: '.td-highlights-grid', start: 'top 85%' } }
    )

    gsap.utils.toArray<Element>('.td-itinerary-step').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
        { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%' } }
      )
    })

    gsap.fromTo('.td-include-card',
      { opacity: 0, y: 30, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: '.td-include-card', start: 'top 85%' } }
    )

    gsap.fromTo('.td-safety-tip',
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.08,
        scrollTrigger: { trigger: '.td-safety-section', start: 'top 85%' } }
    )

    gsap.fromTo('.td-sidebar',
      { opacity: 0, x: 40, scale: 0.97 },
      { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: 'power2.out',
        scrollTrigger: { trigger: '.td-sidebar', start: 'top 80%' } }
    )

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [])
  return null
}

export function ParallaxStars() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const container = ref.current
    const stars: HTMLDivElement[] = []
    const animations: gsap.core.Tween[] = []

    for (let i = 0; i < 80; i++) {
      const s = document.createElement('div')
      s.style.cssText = `position:absolute;border-radius:50%;background:white;pointer-events:none;width:${Math.random() * 2 + 0.5}px;height:${Math.random() * 2 + 0.5}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;opacity:${Math.random() * 0.6 + 0.1}`
      container.appendChild(s)
      stars.push(s)
      const anim = gsap.to(s, { opacity: Math.random() * 0.8 + 0.1, duration: Math.random() * 3 + 1.5, repeat: -1, yoyo: true, delay: Math.random() * 2 })
      animations.push(anim)
    }

    const shoot = () => {
      if (!container) return
      const ss = document.createElement('div')
      ss.style.cssText = `position:absolute;width:60px;height:1.5px;background:linear-gradient(90deg,white,transparent);border-radius:2px;pointer-events:none;top:${Math.random() * 60}%;left:${Math.random() * 80}%;transform:rotate(-35deg);opacity:0`
      container.appendChild(ss)
      gsap.timeline()
        .to(ss, { opacity: 1, duration: 0.1 })
        .to(ss, { x: -120, y: 50, opacity: 0, duration: 0.7, ease: 'power1.in' })
        .call(() => { if (ss.parentNode) ss.remove() })
    }

    const interval = setInterval(shoot, 2800)

    return () => {
      clearInterval(interval)
      animations.forEach(a => a.kill())
      stars.forEach(s => { if (s.parentNode) s.remove() })
    }
  }, [])

  return <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" />
}
