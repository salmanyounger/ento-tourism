import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { tourCategories, WHATSAPP } from '@/data/tours'
import BookingWidget from '@/components/tours/BookingWidget'
import AnimatedFlyer from '@/components/tours/AnimatedFlyer'
import { HeroAnimations, SectionAnimations, ParallaxStars } from '@/components/tours/TourDetailAnimations'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return tourCategories.find(c => c.slug === 'desert-safari')!.subTours.map(t => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tour = tourCategories.find(c => c.slug === 'desert-safari')!.subTours.find(t => t.slug === slug)
  if (!tour) return {}
  return {
    title: `${tour.name} Dubai — Book from $${tour.price}`,
    description: `${tour.tagline}. ${tour.duration} with hotel pickup. ${tour.rating}★ from ${tour.reviews} guests. Book with ENTO Tourism.`
  }
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params
  const cat = tourCategories.find(c => c.slug === 'desert-safari')!
  const tour = cat.subTours.find(t => t.slug === slug)
  if (!tour) notFound()

  const waLink = `https://wa.me/${WHATSAPP}?text=Hi%20Salman!%20I%20want%20to%20book%20the%20${encodeURIComponent(tour.name)}.%20Please%20share%20availability.`

  return (
    <div>
      <HeroAnimations />
      <SectionAnimations />

      {/* ─── HERO ─── */}
      <div className="relative bg-[#080C16] pt-28 pb-20 px-5 overflow-hidden min-h-[70vh] flex items-center">
        <ParallaxStars />
        {/* Gold glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 60% 45% at 50% 100%,rgba(201,149,58,.18),transparent 55%), radial-gradient(ellipse 40% 30% at 80% 20%,rgba(184,68,32,.08),transparent 50%)'
        }} />

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          {/* Breadcrumb */}
          <div className="td-breadcrumb flex items-center gap-2 text-white/25 text-xs mb-8 flex-wrap">
            <Link href="/" className="hover:text-[#C9953A] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/tours" className="hover:text-[#C9953A] transition-colors">Tours</Link>
            <span>/</span>
            <Link href="/tours/desert-safari" className="hover:text-[#C9953A] transition-colors">Desert Safari</Link>
            <span>/</span>
            <span className="text-white/40">{tour.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left — Text content */}
            <div>
              <div className="td-emoji text-7xl mb-5 block">{tour.emoji}</div>

              {tour.badge && (
                <span className="td-badge inline-block bg-gradient-to-r from-[#C9953A] to-[#B84420] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                  ✦ {tour.badge}
                </span>
              )}

              <h1 className="td-title font-bold text-white mb-4 leading-tight"
                style={{ fontSize: 'clamp(2rem,4.5vw,3.5rem)', fontFamily: 'var(--font-playfair,serif)' }}>
                {tour.name}
              </h1>

              <p className="td-tagline text-white/50 text-lg leading-relaxed mb-7 max-w-lg">{tour.tagline}</p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {[
                  { icon: '⭐', label: 'Rating', val: tour.rating, suffix: '', data: tour.rating },
                  { icon: '✍️', label: 'Reviews', val: tour.reviews.toLocaleString(), suffix: '+', data: tour.reviews },
                  { icon: '⏱', label: 'Duration', val: tour.duration, suffix: '', data: null },
                  { icon: '👥', label: 'Group', val: tour.groupSize, suffix: '', data: null },
                  { icon: '🛡', label: 'Level', val: tour.difficulty, suffix: '', data: null },
                ].map((s, i) => (
                  <div key={i} className="td-stat flex items-center gap-2 bg-white/06 border border-white/08 rounded-xl px-3 py-2">
                    <span className="text-sm">{s.icon}</span>
                    <div>
                      <div className="text-white/30 text-[9px] uppercase tracking-widest">{s.label}</div>
                      <div className="text-white font-semibold text-sm">
                        {s.data ? (
                          <span className="td-counter" data-val={s.data}>{s.val}</span>
                        ) : s.val}
                        {s.suffix}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3 flex-wrap">
                <a href={waLink} target="_blank" rel="noopener"
                  className="td-btn flex items-center gap-2 bg-[#25D366] text-white font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-[#20ba5a] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/30 transition-all">
                  💬 Book via WhatsApp
                </a>
                <a href="#booking"
                  className="td-btn flex items-center gap-2 bg-gradient-to-r from-[#C9953A] to-[#B84420] text-white font-semibold text-sm px-6 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#C9953A]/30 transition-all">
                  📋 Book Online
                </a>
                <div className="td-btn flex items-center gap-2 bg-white/06 border border-white/12 text-white/60 text-sm px-5 py-3.5 rounded-full">
                  💰 From <span className="text-[#E8B86D] font-bold ml-1">${tour.price}</span> / person
                </div>
              </div>
            </div>

            {/* Right — Animated flyer */}
            <div className="td-flyer hidden lg:block">
              <AnimatedFlyer tour={tour} />
            </div>
          </div>
        </div>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <div className="max-w-6xl mx-auto px-5 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Left — Details */}
        <div className="lg:col-span-2 space-y-14">

          {/* Highlights */}
          <div>
            <h2 className="td-section-title font-bold text-[#1A1208] text-2xl mb-6" style={{ fontFamily: 'var(--font-playfair,serif)' }}>
              ✦ Tour Highlights
            </h2>
            <div className="td-highlights-grid grid grid-cols-2 md:grid-cols-3 gap-3">
              {tour.highlights.map((h, i) => (
                <div key={i} className="td-highlight flex items-center gap-2.5 bg-gradient-to-br from-[#C9953A]/06 to-[#C9953A]/02 border border-[#C9953A]/12 rounded-xl px-4 py-3 hover:border-[#C9953A]/30 hover:shadow-md transition-all duration-300 group">
                  <span className="text-[#C9953A] text-xs group-hover:scale-125 transition-transform">✦</span>
                  <span className="text-[#1A1208]/70 text-sm">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Itinerary */}
          <div>
            <h2 className="td-section-title font-bold text-[#1A1208] text-2xl mb-8" style={{ fontFamily: 'var(--font-playfair,serif)' }}>
              🗺 Your Experience — Step by Step
            </h2>
            <div className="space-y-0">
              {tour.itinerary.map((step, i) => (
                <div key={i} className="td-itinerary-step flex gap-5 group">
                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#C9953A] to-[#B84420] flex items-center justify-center text-white font-bold shrink-0 shadow-lg shadow-[#C9953A]/25 group-hover:scale-110 transition-transform duration-300">
                      {i + 1}
                    </div>
                    {i < tour.itinerary.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-[#C9953A]/30 to-transparent my-2" style={{ minHeight: '40px' }} />
                    )}
                  </div>
                  <div className="pb-10">
                    <div className="text-[#C9953A] text-xs font-bold tracking-widest uppercase mb-1">{step.time}</div>
                    <h3 className="font-bold text-[#1A1208] text-xl mb-2" style={{ fontFamily: 'var(--font-playfair,serif)' }}>{step.title}</h3>
                    <p className="text-[#1A1208]/50 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Includes / Excludes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="td-include-card bg-[#FFFDF8] border border-[#1A1208]/06 rounded-2xl p-6 hover:shadow-lg hover:shadow-[#1A1208]/05 transition-all duration-300">
              <h3 className="font-bold text-[#1A1208] text-lg mb-5 flex items-center gap-2" style={{ fontFamily: 'var(--font-playfair,serif)' }}>
                <span className="w-7 h-7 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] text-sm">✓</span>
                What's Included
              </h3>
              <div className="space-y-2.5">
                {tour.includes.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 group">
                    <span className="text-[#25D366] mt-0.5 shrink-0 text-xs group-hover:scale-125 transition-transform">✔</span>
                    <span className="text-[#1A1208]/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="td-include-card bg-[#FFFDF8] border border-[#1A1208]/06 rounded-2xl p-6 hover:shadow-lg hover:shadow-[#1A1208]/05 transition-all duration-300">
              <h3 className="font-bold text-[#1A1208] text-lg mb-5 flex items-center gap-2" style={{ fontFamily: 'var(--font-playfair,serif)' }}>
                <span className="w-7 h-7 rounded-full bg-red-400/10 flex items-center justify-center text-red-400 text-sm">✗</span>
                Not Included
              </h3>
              <div className="space-y-2.5">
                {tour.excludes.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="text-red-400/60 mt-0.5 shrink-0 text-xs">✗</span>
                    <span className="text-[#1A1208]/50 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Safety */}
          <div className="td-safety-section bg-gradient-to-br from-[#080C16] to-[#1A1008] rounded-2xl p-7">
            <h2 className="font-bold text-white text-xl mb-5 flex items-center gap-2" style={{ fontFamily: 'var(--font-playfair,serif)' }}>
              🛡 Safety & Important Info
            </h2>
            <div className="space-y-3">
              {tour.safetyTips.map((tip, i) => (
                <div key={i} className="td-safety-tip flex items-start gap-3">
                  <span className="text-[#C9953A] mt-0.5 shrink-0">•</span>
                  <span className="text-white/55 text-sm leading-relaxed">{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Back link */}
          <Link href="/tours/desert-safari"
            className="inline-flex items-center gap-2 text-[#C9953A] text-sm font-medium hover:gap-4 transition-all duration-300 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to all Desert Safaris
          </Link>
        </div>

        {/* ─── SIDEBAR ─── */}
        <div id="booking" className="td-sidebar lg:sticky lg:top-28 self-start space-y-4">
          <BookingWidget tour={tour} waLink={waLink} />

          {/* Mobile flyer */}
          <div className="lg:hidden">
            <AnimatedFlyer tour={tour} />
          </div>

          {/* Personal support card */}
          <div className="bg-[#080C16] rounded-2xl p-5 text-center border border-white/05">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9953A] to-[#B84420] flex items-center justify-center text-white text-lg font-bold mx-auto mb-3" style={{ fontFamily: 'serif' }}>
              S
            </div>
            <div className="font-bold text-white mb-1" style={{ fontFamily: 'var(--font-playfair,serif)' }}>Salman Ali</div>
            <div className="text-white/35 text-xs mb-4">Your personal tour guide · 10,000+ guests</div>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold py-3 rounded-full hover:bg-[#20ba5a] hover:-translate-y-0.5 hover:shadow-lg transition-all">
              💬 Chat with Salman
            </a>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 gap-2">
            {[
              { icon: '✅', text: 'Free Cancellation' },
              { icon: '🏆', text: '10,000+ Guests' },
              { icon: '⭐', text: `${tour.rating} Rated` },
              { icon: '🚐', text: 'Hotel Pickup' },
            ].map((b, i) => (
              <div key={i} className="bg-[#C9953A]/05 border border-[#C9953A]/12 rounded-xl p-3 text-center">
                <div className="text-xl mb-1">{b.icon}</div>
                <div className="text-[#1A1208]/55 text-xs font-medium">{b.text}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
