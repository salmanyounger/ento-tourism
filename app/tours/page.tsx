import Link from 'next/link'
import { tourCategories } from '@/data/tours'
import type { Metadata } from 'next'
export const metadata:Metadata={title:'All UAE Tours & Activities',description:'Browse all tours across the UAE. Desert safaris, city tours, boat trips, adventure sports and more.'}
export default function ToursPage(){
  return(
    <div className="pt-28 pb-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#C9953A] mb-3">All UAE Experiences</div>
          <h1 className="font-bold text-[#1A1208]" style={{fontSize:'clamp(2rem,5vw,3.5rem)',fontFamily:'var(--font-playfair,serif)'}}>
            Every Tour. Every Adventure.<br/><em className="gold-text font-normal italic">All Across the UAE.</em>
          </h1>
        </div>
        {tourCategories.map(cat=>(
          <div key={cat.slug} className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{cat.heroEmoji}</span>
                <div>
                  <h2 className="font-bold text-[#1A1208] text-2xl" style={{fontFamily:'var(--font-playfair,serif)'}}>{cat.name}</h2>
                  <p className="text-[#1A1208]/50 text-sm">{cat.tagline}</p>
                </div>
              </div>
              <Link href={`/tours/${cat.slug}`} className="text-[#C9953A] text-sm font-medium hover:gap-2 transition-all">See all →</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {cat.subTours.slice(0,3).map(tour=>(
                <Link key={tour.slug} href={`/tours/${cat.slug}/${tour.slug}`}
                  className="card-lift group bg-[#FFFDF8] border border-[#1A1208]/07 rounded-2xl p-6 block">
                  <div className="text-3xl mb-3">{tour.emoji}</div>
                  {tour.badge&&<span className="text-[10px] font-bold tracking-wider uppercase bg-[#C9953A]/10 text-[#C9953A] px-2 py-0.5 rounded-full">{tour.badge}</span>}
                  <h3 className="font-bold text-[#1A1208] text-lg mt-2 mb-1 group-hover:text-[#C9953A] transition-colors" style={{fontFamily:'var(--font-playfair,serif)'}}>{tour.name}</h3>
                  <p className="text-[#1A1208]/50 text-sm mb-4 line-clamp-2">{tour.tagline}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#C9953A] text-xl" style={{fontFamily:'var(--font-playfair,serif)'}}>${tour.price}<span className="text-xs text-[#1A1208]/40 font-sans font-normal"> /person</span></span>
                    <span className="text-[#1A1208]/40 text-xs">{tour.duration}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
