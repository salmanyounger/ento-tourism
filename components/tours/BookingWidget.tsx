'use client'
import { useState } from 'react'
import { WHATSAPP, type SubTour } from '@/data/tours'

interface Props{tour:SubTour;waLink:string}
export default function BookingWidget({tour,waLink}:Props){
  const [date,setDate]=useState('')
  const [adults,setAdults]=useState(2)
  const [children,setChildren]=useState(0)
  const [note,setNote]=useState('')
  const total=adults*tour.price+children*Math.round(tour.price*0.5)
  const handleWA=()=>{
    const msg=`Hi Salman! I want to book the ${tour.name}.%0ADate: ${date||'Flexible'}%0AAdults: ${adults}%0AChildren: ${children}%0ATotal: $${total}%0ANotes: ${note||'None'}`
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`,'_blank')
  }
  const tomorrow=new Date(); tomorrow.setDate(tomorrow.getDate()+1)
  const minDate=tomorrow.toISOString().split('T')[0]
  return(
    <div className="bg-[#FFFDF8] border border-[#1A1208]/08 rounded-2xl overflow-hidden shadow-xl shadow-[#1A1208]/06">
      <div className="bg-gradient-to-r from-[#080C16] to-[#1A1008] p-5">
        <div className="font-bold text-white text-lg mb-0.5" style={{fontFamily:'var(--font-playfair,serif)'}}>Reserve Your Spot</div>
        <div className="text-white/40 text-xs">Free cancellation · Instant WhatsApp confirmation</div>
      </div>
      <div className="p-5 space-y-4">
        <div className="flex items-baseline gap-2">
          <span className="text-[#1A1208]/40 text-sm">From</span>
          <span className="font-bold text-[#C9953A] text-3xl" style={{fontFamily:'var(--font-playfair,serif)'}}>${tour.price}</span>
          <span className="text-[#1A1208]/40 text-sm">/ person</span>
        </div>
        <div>
          <label className="text-[#1A1208]/50 text-xs font-medium uppercase tracking-wider mb-1.5 block">Select Date</label>
          <div className="flex items-center gap-2 border border-[#1A1208]/10 rounded-xl px-3 py-2.5 bg-[#FAF5EC]/40">
            <span className="text-[#C9953A]">📅</span>
            <input type="date" value={date} min={minDate} onChange={e=>setDate(e.target.value)} className="flex-1 bg-transparent text-sm text-[#1A1208]/80 outline-none"/>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[{l:'Adults',v:adults,s:setAdults,min:1,max:20},{l:'Children',v:children,s:setChildren,min:0,max:10}].map(f=>(
            <div key={f.l}>
              <label className="text-[#1A1208]/50 text-xs font-medium uppercase tracking-wider mb-1.5 block">{f.l}</label>
              <div className="flex items-center border border-[#1A1208]/10 rounded-xl overflow-hidden">
                <button onClick={()=>f.s((v:number)=>Math.max(f.min,v-1))} className="px-3 py-2.5 text-[#C9953A] font-bold hover:bg-[#C9953A]/08 transition-colors">−</button>
                <span className="flex-1 text-center text-sm font-medium text-[#1A1208]">{f.v}</span>
                <button onClick={()=>f.s((v:number)=>Math.min(f.max,v+1))} className="px-3 py-2.5 text-[#C9953A] font-bold hover:bg-[#C9953A]/08 transition-colors">+</button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <label className="text-[#1A1208]/50 text-xs font-medium uppercase tracking-wider mb-1.5 block">Special Request (optional)</label>
          <div className="flex items-start gap-2 border border-[#1A1208]/10 rounded-xl px-3 py-2.5 bg-[#FAF5EC]/40">
            <span className="text-[#C9953A] mt-0.5 text-sm">💬</span>
            <textarea value={note} onChange={e=>setNote(e.target.value)} rows={2} placeholder="Dietary needs, birthday, anniversary..."
              className="flex-1 bg-transparent text-sm text-[#1A1208]/70 outline-none resize-none placeholder:text-[#1A1208]/25"/>
          </div>
        </div>
        <div className="bg-[#C9953A]/06 border border-[#C9953A]/12 rounded-xl px-4 py-3 flex justify-between items-center">
          <div>
            <div className="text-[#1A1208]/45 text-xs">Total estimate</div>
            <div className="font-bold text-[#C9953A] text-2xl" style={{fontFamily:'var(--font-playfair,serif)'}}>${total}</div>
          </div>
          <div className="text-right text-xs text-[#1A1208]/40">
            <div>{adults} adult{adults>1?'s':''} × ${tour.price}</div>
            {children>0&&<div>{children} child{children>1?'ren':''} × ${Math.round(tour.price*0.5)}</div>}
          </div>
        </div>
        <button onClick={handleWA} className="w-full bg-[#25D366] text-white font-semibold text-sm py-4 rounded-xl hover:bg-[#20ba5a] hover:-translate-y-0.5 hover:shadow-lg transition-all flex items-center justify-center gap-2">
          💬 Confirm via WhatsApp
        </button>
        <p className="text-[#1A1208]/30 text-xs text-center">No payment now · Confirm directly with Salman · Free cancellation 24h before</p>
      </div>
    </div>
  )
}
