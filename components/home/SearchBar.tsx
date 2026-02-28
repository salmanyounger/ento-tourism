'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const categories = ['All Activities','Desert Safari','City Tours','Boat Tours','Adventure','Theme Parks','Cultural','Helicopter']
const destinations = ['All UAE','Dubai','Abu Dhabi','Sharjah','Ras Al Khaimah','Fujairah','Ajman']

export default function SearchBar() {
  const router = useRouter()
  const [dest,setDest]=useState('')
  const [cat,setCat]=useState('')
  const [date,setDate]=useState('')
  const [guests,setGuests]=useState('')
  const handleSearch=(e:React.FormEvent)=>{
    e.preventDefault()
    const p=new URLSearchParams()
    if(dest)p.set('destination',dest); if(cat)p.set('category',cat)
    if(date)p.set('date',date); if(guests)p.set('guests',guests)
    router.push(`/tours?${p.toString()}`)
  }
  return (
    <section className="relative z-20 -mt-16 px-4 mb-16">
      <div className="max-w-5xl mx-auto">
        <form onSubmit={handleSearch} className="bg-[#FFFDF8] rounded-2xl shadow-2xl shadow-[#1A1208]/12 border border-[#1A1208]/06 p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {[
              {icon:'📍',val:dest,set:setDest,opts:destinations,ph:'Destination'},
              {icon:'🗺',val:cat,set:setCat,opts:categories,ph:'Category'},
            ].map(f=>(
              <div key={f.ph} className="flex items-center gap-2 border border-[#1A1208]/10 rounded-xl px-3 py-3 bg-[#FAF5EC]/60">
                <span className="text-[#C9953A] text-sm shrink-0">{f.icon}</span>
                <select value={f.val} onChange={e=>f.set(e.target.value)} className="flex-1 bg-transparent text-sm text-[#1A1208]/80 outline-none font-light">
                  <option value="">{f.ph}</option>
                  {f.opts.map(o=><option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            ))}
            <div className="flex items-center gap-2 border border-[#1A1208]/10 rounded-xl px-3 py-3 bg-[#FAF5EC]/60">
              <span className="text-[#C9953A] text-sm shrink-0">📅</span>
              <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="flex-1 bg-transparent text-sm text-[#1A1208]/70 outline-none font-light"/>
            </div>
            <div className="flex items-center gap-2 border border-[#1A1208]/10 rounded-xl px-3 py-3 bg-[#FAF5EC]/60">
              <span className="text-[#C9953A] text-sm shrink-0">👥</span>
              <select value={guests} onChange={e=>setGuests(e.target.value)} className="flex-1 bg-transparent text-sm text-[#1A1208]/80 outline-none font-light">
                <option value="">Guests</option>
                {[1,2,3,4,5,6,7,8,'9+'].map(g=><option key={g} value={g}>{g} {g===1?'Guest':'Guests'}</option>)}
              </select>
            </div>
          </div>
          <button type="submit" className="mt-3 w-full bg-gradient-to-r from-[#C9953A] to-[#B84420] text-white font-semibold text-sm tracking-wider uppercase py-3.5 rounded-xl hover:shadow-lg hover:shadow-[#C9953A]/30 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2">
            🔍 Search Tours
          </button>
        </form>
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {['🏜️ Desert Safari','⛵ Boat Tours','🏙️ City Tours','🚁 Helicopter','🎢 Theme Parks','⛰️ Adventure'].map(tag=>(
            <button key={tag} onClick={()=>router.push(`/tours?category=${tag.split(' ').slice(1).join(' ')}`)}
              className="bg-white/70 border border-[#1A1208]/08 text-[#1A1208]/65 text-xs font-medium px-4 py-2 rounded-full hover:border-[#C9953A]/40 hover:text-[#C9953A] transition-all duration-200">
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
