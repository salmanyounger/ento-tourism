import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { tourCategories, WHATSAPP } from '@/data/tours'
import BookingWidget from '@/components/tours/BookingWidget'
import AnimatedFlyer from '@/components/tours/AnimatedFlyer'

interface Props{params:{slug:string}}

export async function generateStaticParams(){
  return tourCategories.find(c=>c.slug==='desert-safari')!.subTours.map(t=>({slug:t.slug}))
}

export async function generateMetadata({params}:Props):Promise<Metadata>{
  const tour=tourCategories.find(c=>c.slug==='desert-safari')!.subTours.find(t=>t.slug===params.slug)
  if(!tour)return{}
  return{title:`${tour.name} Dubai — Book from $${tour.price}`,description:`${tour.tagline}. ${tour.duration} with hotel pickup. ${tour.rating}★ from ${tour.reviews} guests. Book with ENTO Tourism.`}
}

export default function TourDetailPage({params}:Props){
  const cat=tourCategories.find(c=>c.slug==='desert-safari')!
  const tour=cat.subTours.find(t=>t.slug===params.slug)
  if(!tour)notFound()
  const waLink=`https://wa.me/${WHATSAPP}?text=Hi%20Salman!%20I%20want%20to%20book%20the%20${encodeURIComponent(tour.name)}.%20Please%20share%20availability.`
  return(
    <div>
      {/* Hero */}
      <div className="relative bg-[#080C16] pt-28 pb-16 px-5 overflow-hidden">
        <div className="absolute inset-0" style={{background:'radial-gradient(ellipse 70% 55% at 50% 100%,rgba(201,149,58,.15),transparent 55%),linear-gradient(160deg,#04070F,#080C18,#160D04)'}}/>
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/30 text-xs mb-6 flex-wrap">
            <Link href="/" className="hover:text-[#C9953A] transition-colors">Home</Link>
            <span>/</span><Link href="/tours" className="hover:text-[#C9953A] transition-colors">Tours</Link>
            <span>/</span><Link href="/tours/desert-safari" className="hover:text-[#C9953A] transition-colors">Desert Safari</Link>
            <span>/</span><span className="text-white/50">{tour.name}</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-4">{tour.emoji}</div>
              {tour.badge&&<span className="inline-block bg-gradient-to-r from-[#C9953A] to-[#B84420] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">{tour.badge}</span>}
              <h1 className="font-bold text-white mb-3" style={{fontSize:'clamp(1.8rem,4vw,3.2rem)',fontFamily:'var(--font-playfair,serif)'}}>{tour.name}</h1>
              <p className="text-white/55 text-lg leading-relaxed mb-6">{tour.tagline}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {[`★ ${tour.rating} (${tour.reviews.toLocaleString()} reviews)`,`⏱ ${tour.duration}`,`👥 ${tour.groupSize}`,`🛡 ${tour.difficulty}`].map((item,i)=>(
                  <div key={i} className="flex items-center gap-2 bg-white/06 border border-white/08 rounded-xl px-3 py-2 text-white text-sm">{item}</div>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={waLink} target="_blank" rel="noopener"
                  className="flex-1 bg-[#25D366] text-white font-semibold text-sm px-5 py-3.5 rounded-full text-center hover:bg-[#20ba5a] hover:-translate-y-0.5 transition-all">
                  💬 Book via WhatsApp
                </a>
                <a href="#booking" className="flex-1 bg-gradient-to-r from-[#C9953A] to-[#B84420] text-white font-semibold text-sm px-5 py-3.5 rounded-full text-center hover:-translate-y-0.5 hover:shadow-lg transition-all">
                  Book Online
                </a>
              </div>
            </div>
            <div className="hidden lg:block"><AnimatedFlyer tour={tour}/></div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-5 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-12">

          {/* Highlights */}
          <div>
            <h2 className="font-bold text-[#1A1208] text-2xl mb-6" style={{fontFamily:'var(--font-playfair,serif)'}}>Tour Highlights</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {tour.highlights.map(h=>(
                <div key={h} className="flex items-center gap-2 bg-[#C9953A]/06 border border-[#C9953A]/12 rounded-xl px-4 py-3">
                  <span className="text-[#C9953A] text-xs">✦</span>
                  <span className="text-[#1A1208]/70 text-sm">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Itinerary */}
          <div>
            <h2 className="font-bold text-[#1A1208] text-2xl mb-6" style={{fontFamily:'var(--font-playfair,serif)'}}>Your Experience — Step by Step</h2>
            {tour.itinerary.map((step,i)=>(
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9953A] to-[#B84420] flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md">{i+1}</div>
                  {i<tour.itinerary.length-1&&<div className="w-px flex-1 bg-[#C9953A]/15 my-1"/>}
                </div>
                <div className="pb-8">
                  <div className="text-[#C9953A] text-xs font-semibold tracking-widest uppercase mb-1">{step.time}</div>
                  <h3 className="font-bold text-[#1A1208] text-lg mb-2" style={{fontFamily:'var(--font-playfair,serif)'}}>{step.title}</h3>
                  <p className="text-[#1A1208]/55 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Includes / Excludes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-[#FFFDF8] border border-[#1A1208]/06 rounded-2xl p-6">
              <h3 className="font-bold text-[#1A1208] text-lg mb-4 flex items-center gap-2" style={{fontFamily:'var(--font-playfair,serif)'}}>
                <span className="text-[#25D366]">✅</span> What&apos;s Included
              </h3>
              {tour.includes.map(item=>(
                <div key={item} className="flex items-start gap-2 text-sm text-[#1A1208]/65 mb-2.5">
                  <span className="text-[#25D366] mt-0.5 shrink-0 text-xs">✔</span>{item}
                </div>
              ))}
            </div>
            <div className="bg-[#FFFDF8] border border-[#1A1208]/06 rounded-2xl p-6">
              <h3 className="font-bold text-[#1A1208] text-lg mb-4 flex items-center gap-2" style={{fontFamily:'var(--font-playfair,serif)'}}>
                <span className="text-red-400">✗</span> Not Included
              </h3>
              {tour.excludes.map(item=>(
                <div key={item} className="flex items-start gap-2 text-sm text-[#1A1208]/55 mb-2.5">
                  <span className="text-red-400/60 mt-0.5 shrink-0 text-xs">✗</span>{item}
                </div>
              ))}
            </div>
          </div>

          {/* Safety */}
          <div className="bg-gradient-to-br from-[#C9953A]/06 to-[#B84420]/03 border border-[#C9953A]/15 rounded-2xl p-7">
            <h2 className="font-bold text-[#1A1208] text-xl mb-5 flex items-center gap-2" style={{fontFamily:'var(--font-playfair,serif)'}}>
              🛡 Safety Information
            </h2>
            {tour.safetyTips.map(tip=>(
              <div key={tip} className="flex items-start gap-3 text-sm text-[#1A1208]/65 mb-3">
                <span className="text-[#C9953A] mt-0.5 shrink-0">•</span>{tip}
              </div>
            ))}
          </div>

          <Link href="/tours/desert-safari" className="inline-flex items-center gap-2 text-[#C9953A] text-sm font-medium hover:gap-3 transition-all">
            ← Back to all Desert Safaris
          </Link>
        </div>

        {/* Booking sidebar */}
        <div id="booking" className="lg:sticky lg:top-24 self-start space-y-4">
          <BookingWidget tour={tour} waLink={waLink}/>
          <div className="lg:hidden"><AnimatedFlyer tour={tour}/></div>
          <div className="bg-[#080C16] rounded-2xl p-5 text-center">
            <div className="text-white/40 text-xs mb-1">Questions? Talk to Salman directly</div>
            <div className="font-bold text-white mb-3" style={{fontFamily:'var(--font-playfair,serif)'}}>Personal Support</div>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold py-2.5 rounded-full hover:bg-[#20ba5a] transition-colors">
              📞 +971 54 473 5060
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
