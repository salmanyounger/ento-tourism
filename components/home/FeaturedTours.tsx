import Link from 'next/link'
import { tourCategories, WHATSAPP } from '@/data/tours'
export default function FeaturedTours() {
  const tours = tourCategories[0].subTours.slice(0,3)
  return (
    <section className="bg-[#080C16] py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#C9953A] mb-3">Featured Right Now</div>
            <h2 className="font-bold text-white leading-tight" style={{fontSize:'clamp(1.8rem,4vw,3rem)',fontFamily:'var(--font-playfair,serif)'}}>
              Desert Safari Dubai<br/><em className="gold-text font-normal italic">6 Ways to Experience It</em>
            </h2>
          </div>
          <Link href="/tours/desert-safari" className="inline-flex items-center gap-2 text-[#C9953A] text-sm font-medium hover:gap-3 transition-all">
            See All 6 Safaris →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tours.map((tour,i)=>(
            <Link key={tour.slug} href={`/tours/desert-safari/${tour.slug}`}
              className="card-lift group bg-white/5 border border-white/8 rounded-2xl overflow-hidden hover:border-[#C9953A]/25 block">
              <div className="relative h-52 flex items-center justify-center overflow-hidden"
                style={{background:`linear-gradient(145deg,${['#1A0C04,#5A3010','#040B1A,#1A1008','#0A1A08,#1A1008'][i%3]})`}}>
                <div className="text-6xl group-hover:scale-110 transition-transform duration-500">{tour.emoji}</div>
                {tour.badge&&<div className="absolute top-3 left-3 bg-gradient-to-r from-[#C9953A] to-[#B84420] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">{tour.badge}</div>}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                <div className="absolute bottom-3 left-3 flex items-center gap-1">
                  <span className="text-yellow-400 text-xs">★</span>
                  <span className="text-white font-semibold text-sm">{tour.rating}</span>
                  <span className="text-white/50 text-xs">({tour.reviews.toLocaleString()})</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-white text-lg mb-1 group-hover:text-[#E8B86D] transition-colors" style={{fontFamily:'var(--font-playfair,serif)'}}>{tour.name}</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4 line-clamp-2">{tour.tagline}</p>
                <div className="flex gap-4 mb-5 text-white/40 text-xs">
                  <span>⏱ {tour.duration}</span>
                  <span>👥 {tour.groupSize}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white/35 text-xs">From</span>
                    <span className="font-bold text-[#E8B86D] text-xl ml-1" style={{fontFamily:'var(--font-playfair,serif)'}}>${tour.price}</span>
                    <span className="text-white/35 text-xs"> /person</span>
                  </div>
                  <span className="bg-[#C9953A]/15 border border-[#C9953A]/25 text-[#E8B86D] text-xs font-semibold px-3 py-1.5 rounded-full group-hover:bg-[#C9953A] group-hover:text-white transition-all">View Tour →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/tours/desert-safari" className="inline-flex items-center gap-2 border border-[#C9953A]/30 text-[#C9953A] text-sm font-medium px-8 py-3.5 rounded-full hover:bg-[#C9953A] hover:text-white transition-all duration-300">
            View All 6 Desert Safari Options →
          </Link>
        </div>
      </div>
    </section>
  )
}
