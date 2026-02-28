import type { Metadata } from 'next'
import Link from 'next/link'
import { tourCategories, WHATSAPP } from '@/data/tours'
export const metadata:Metadata={title:'Desert Safari Dubai — 6 Experiences',description:'Choose your perfect Dubai desert safari. Evening, private, overnight, morning, buggy and quad bike. All with hotel pickup. Book with ENTO Tourism.'}
export default function DesertSafariPage(){
  const cat=tourCategories.find(c=>c.slug==='desert-safari')!
  return(
    <div>
      <div className="relative bg-[#080C16] pt-28 pb-20 px-5 overflow-hidden">
        <div className="absolute inset-0" style={{background:'radial-gradient(ellipse 70% 60% at 50% 100%,rgba(201,149,58,.18),transparent 55%),linear-gradient(155deg,#040710,#080C18,#180D05)'}}/>
        <svg className="absolute bottom-0 w-full opacity-40" viewBox="0 0 1440 100" preserveAspectRatio="none" style={{height:'60px'}}>
          <path d="M0,100 L0,50 Q360,0 720,45 Q1080,88 1440,35 L1440,100Z" fill="rgba(90,48,16,.5)"/>
        </svg>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="text-5xl mb-4">🏜️</div>
          <div className="text-xs font-semibold tracking-widest uppercase text-[#C9953A] mb-3">Dubai · UAE</div>
          <h1 className="font-bold text-white mb-4" style={{fontSize:'clamp(2rem,5vw,4rem)',fontFamily:'var(--font-playfair,serif)'}}>Desert Safari Dubai</h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed mb-8">{cat.description}</p>
          <div className="flex flex-wrap justify-center gap-6 text-center">
            {[{v:'6',l:'Experiences'},{v:'4.9★',l:'Avg Rating'},{v:'Free',l:'Hotel Pickup'},{v:'Daily',l:'Departures'}].map(s=>(
              <div key={s.l}>
                <div className="font-bold text-xl gold-text" style={{fontFamily:'var(--font-playfair,serif)'}}>{s.v}</div>
                <div className="text-white/30 text-xs tracking-wider uppercase">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 py-20">
        <div className="text-center mb-12">
          <h2 className="font-bold text-[#1A1208]" style={{fontSize:'clamp(1.6rem,3.5vw,2.5rem)',fontFamily:'var(--font-playfair,serif)'}}>
            Choose Your <em className="gold-text font-normal italic">Desert Experience</em>
          </h2>
          <p className="text-[#1A1208]/50 mt-2 text-sm">Click any tour to see full details, itinerary, and book</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cat.subTours.map((tour,i)=>(
            <Link key={tour.slug} href={`/tours/desert-safari/${tour.slug}`}
              className="card-lift group bg-[#FFFDF8] border border-[#1A1208]/07 rounded-2xl overflow-hidden block">
              <div className="h-44 relative flex items-center justify-center overflow-hidden"
                style={{background:`linear-gradient(145deg,${['#1A0C04,#5A3010','#040B1A,#0A1A08','#0A0A1A,#1A0C1A','#041A0A,#0A2A0A','#1A0404,#3A1008','#040A18,#0A1A1A'][i%6]})`}}>
                <div className="text-7xl group-hover:scale-110 transition-transform duration-500">{tour.emoji}</div>
                {tour.badge&&<div className="absolute top-3 left-3 bg-gradient-to-r from-[#C9953A] to-[#B84420] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">{tour.badge}</div>}
                <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/40 rounded-full px-2 py-1">
                  <span className="text-yellow-400 text-xs">★</span>
                  <span className="text-white text-xs font-semibold">{tour.rating}</span>
                  <span className="text-white/50 text-xs">({tour.reviews.toLocaleString()})</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#1A1208] text-lg mb-1.5 group-hover:text-[#C9953A] transition-colors" style={{fontFamily:'var(--font-playfair,serif)'}}>{tour.name}</h3>
                <p className="text-[#1A1208]/50 text-sm leading-relaxed mb-4 line-clamp-2">{tour.tagline}</p>
                <div className="flex gap-4 mb-4 text-xs text-[#1A1208]/40">
                  <span>⏱ {tour.duration}</span><span>👥 {tour.groupSize}</span>
                </div>
                <div className="space-y-1.5 mb-5">
                  {tour.highlights.slice(0,3).map(h=>(
                    <div key={h} className="flex items-center gap-2 text-xs text-[#1A1208]/60">
                      <span className="text-[#C9953A] text-[10px]">✦</span>{h}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[#1A1208]/06">
                  <div>
                    <div className="text-[#1A1208]/35 text-xs">From</div>
                    <div className="font-bold text-[#C9953A] text-2xl" style={{fontFamily:'var(--font-playfair,serif)'}}>${tour.price}<span className="text-xs text-[#1A1208]/35 font-sans font-normal"> /person</span></div>
                  </div>
                  <span className="flex items-center gap-1 bg-[#C9953A]/10 border border-[#C9953A]/20 text-[#C9953A] text-xs font-semibold px-4 py-2 rounded-full group-hover:bg-[#C9953A] group-hover:text-white transition-all">Details →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#C9953A] to-[#B84420] py-14 px-5 text-center">
        <h2 className="font-bold text-white text-2xl mb-3" style={{fontFamily:'var(--font-playfair,serif)'}}>Not sure which safari to pick?</h2>
        <p className="text-white/75 mb-6 text-sm">WhatsApp Salman directly — he will recommend the perfect option for your group and budget.</p>
        <a href={`https://wa.me/${WHATSAPP}?text=Hi%20Salman!%20I%20need%20help%20choosing%20the%20right%20desert%20safari.`} target="_blank" rel="noopener"
          className="inline-flex items-center gap-2 bg-white text-[#B84420] font-semibold text-sm px-8 py-3.5 rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
          💬 WhatsApp Salman
        </a>
      </div>
    </div>
  )
}
