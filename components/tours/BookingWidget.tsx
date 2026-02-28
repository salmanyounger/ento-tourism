'use client'
import { useState } from 'react'
import { WHATSAPP, type SubTour } from '@/data/tours'

interface Props { tour: SubTour; waLink: string }

const STEPS = ['Date & Guests', 'Your Details', 'Pickup & Requests', 'Confirm']

const HOTELS = [
  'Downtown Dubai', 'Dubai Marina', 'JBR / Jumeirah Beach',
  'Palm Jumeirah', 'Deira / Old Dubai', 'Business Bay',
  'Dubai Hills', 'DIFC', 'Other / I will specify on WhatsApp'
]

export default function BookingWidget({ tour }: Props) {
  const [step, setStep] = useState(0)

  // Step 1
  const [date, setDate] = useState('')
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)

  // Step 2
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('')

  // Step 3
  const [hotel, setHotel] = useState('')
  const [roomNo, setRoomNo] = useState('')
  const [requests, setRequests] = useState('')

  const total = adults * tour.price + children * Math.round(tour.price * 0.5)

  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  const canNext = () => {
    if (step === 0) return date !== ''
    if (step === 1) return name !== '' && phone !== ''
    if (step === 2) return hotel !== ''
    return true
  }

  const handleConfirm = () => {
    const msg = `Hi Salman! I want to book the *${tour.name}*.

📅 *Date:* ${date}
👥 *Adults:* ${adults} × $${tour.price} = $${adults * tour.price}
👦 *Children:* ${children} × $${Math.round(tour.price * 0.5)} = $${children * Math.round(tour.price * 0.5)}
💰 *Total:* $${total}

👤 *Name:* ${name}
📞 *Phone:* ${phone}
📧 *Email:* ${email || 'Not provided'}
🌍 *Country:* ${country || 'Not specified'}

🏨 *Hotel:* ${hotel}
🚪 *Room:* ${roomNo || 'Will confirm'}
📝 *Requests:* ${requests || 'None'}

Please confirm availability!`

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div className="bg-[#FFFDF8] border border-[#1A1208]/08 rounded-2xl overflow-hidden shadow-xl shadow-[#1A1208]/06">

      {/* Header */}
      <div className="bg-gradient-to-r from-[#080C16] to-[#1A1008] p-5">
        <div className="font-bold text-white text-lg mb-1" style={{ fontFamily: 'var(--font-playfair,serif)' }}>
          Reserve Your Spot
        </div>
        <div className="text-white/40 text-xs">Free cancellation · Instant WhatsApp confirmation</div>
      </div>

      {/* Step indicators */}
      <div className="flex border-b border-[#1A1208]/08">
        {STEPS.map((s, i) => (
          <div key={i} className={`flex-1 py-2.5 text-center text-[10px] font-semibold tracking-wider uppercase transition-all ${
            i === step ? 'text-[#C9953A] border-b-2 border-[#C9953A]' :
            i < step ? 'text-[#25D366]' : 'text-[#1A1208]/30'
          }`}>
            {i < step ? '✓' : i + 1}. {s}
          </div>
        ))}
      </div>

      <div className="p-5">

        {/* STEP 1 — Date & Guests */}
        {step === 0 && (
          <div className="space-y-4">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-[#1A1208]/40 text-sm">From</span>
              <span className="font-bold text-[#C9953A] text-3xl" style={{ fontFamily: 'var(--font-playfair,serif)' }}>${tour.price}</span>
              <span className="text-[#1A1208]/40 text-sm">/ person</span>
            </div>

            <div>
              <label className="text-[#1A1208]/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Select Date *</label>
              <div className="flex items-center gap-2 border border-[#1A1208]/10 rounded-xl px-3 py-2.5 bg-[#FAF5EC]/40">
                <span className="text-[#C9953A]">📅</span>
                <input type="date" value={date} min={minDate} onChange={e => setDate(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-[#1A1208]/80 outline-none" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { l: 'Adults', v: adults, set: setAdults, min: 1, max: 20, price: tour.price },
                { l: 'Children (under 12)', v: children, set: setChildren, min: 0, max: 10, price: Math.round(tour.price * 0.5) }
              ].map(f => (
                <div key={f.l}>
                  <label className="text-[#1A1208]/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">{f.l}</label>
                  <div className="flex items-center border border-[#1A1208]/10 rounded-xl overflow-hidden">
                    <button onClick={() => f.set((v: number) => Math.max(f.min, v - 1))}
                      className="px-3 py-2.5 text-[#C9953A] font-bold hover:bg-[#C9953A]/08 transition-colors">−</button>
                    <span className="flex-1 text-center text-sm font-semibold text-[#1A1208]">{f.v}</span>
                    <button onClick={() => f.set((v: number) => Math.min(f.max, v + 1))}
                      className="px-3 py-2.5 text-[#C9953A] font-bold hover:bg-[#C9953A]/08 transition-colors">+</button>
                  </div>
                  <div className="text-[#1A1208]/30 text-xs mt-1 text-center">${f.price} / person</div>
                </div>
              ))}
            </div>

            <div className="bg-[#C9953A]/06 border border-[#C9953A]/15 rounded-xl px-4 py-3 flex justify-between items-center">
              <div className="text-[#1A1208]/45 text-xs">Estimated Total</div>
              <div className="font-bold text-[#C9953A] text-xl" style={{ fontFamily: 'var(--font-playfair,serif)' }}>${total}</div>
            </div>
          </div>
        )}

        {/* STEP 2 — Personal Details */}
        {step === 1 && (
          <div className="space-y-3">
            <div className="text-[#1A1208]/60 text-sm mb-4">Your details help Salman prepare personally for your arrival.</div>

            {[
              { l: 'Full Name *', val: name, set: setName, ph: 'e.g. Ahmed Al Mansouri', icon: '👤', type: 'text' },
              { l: 'WhatsApp / Phone *', val: phone, set: setPhone, ph: '+971 50 123 4567', icon: '📱', type: 'tel' },
              { l: 'Email (optional)', val: email, set: setEmail, ph: 'your@email.com', icon: '📧', type: 'email' },
            ].map(f => (
              <div key={f.l}>
                <label className="text-[#1A1208]/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">{f.l}</label>
                <div className="flex items-center gap-2 border border-[#1A1208]/10 rounded-xl px-3 py-2.5 bg-[#FAF5EC]/40">
                  <span className="text-[#C9953A] text-sm shrink-0">{f.icon}</span>
                  <input type={f.type} value={f.val} onChange={e => f.set(e.target.value)}
                    placeholder={f.ph} className="flex-1 bg-transparent text-sm text-[#1A1208]/80 outline-none placeholder:text-[#1A1208]/25" />
                </div>
              </div>
            ))}

            <div>
              <label className="text-[#1A1208]/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Country / Nationality</label>
              <div className="flex items-center gap-2 border border-[#1A1208]/10 rounded-xl px-3 py-2.5 bg-[#FAF5EC]/40">
                <span className="text-[#C9953A] text-sm shrink-0">🌍</span>
                <input type="text" value={country} onChange={e => setCountry(e.target.value)}
                  placeholder="e.g. United Kingdom" className="flex-1 bg-transparent text-sm text-[#1A1208]/80 outline-none placeholder:text-[#1A1208]/25" />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3 — Pickup & Requests */}
        {step === 2 && (
          <div className="space-y-3">
            <div className="text-[#1A1208]/60 text-sm mb-4">Free hotel pickup is included. Just tell us where you are staying.</div>

            <div>
              <label className="text-[#1A1208]/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Hotel Area *</label>
              <div className="flex items-center gap-2 border border-[#1A1208]/10 rounded-xl px-3 py-2.5 bg-[#FAF5EC]/40">
                <span className="text-[#C9953A] text-sm shrink-0">📍</span>
                <select value={hotel} onChange={e => setHotel(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-[#1A1208]/80 outline-none">
                  <option value="">Select your area</option>
                  {HOTELS.map(h => <option key={h} value={h}>{h}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="text-[#1A1208]/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Hotel Name & Room No.</label>
              <div className="flex items-center gap-2 border border-[#1A1208]/10 rounded-xl px-3 py-2.5 bg-[#FAF5EC]/40">
                <span className="text-[#C9953A] text-sm shrink-0">🏨</span>
                <input type="text" value={roomNo} onChange={e => setRoomNo(e.target.value)}
                  placeholder="e.g. Atlantis The Palm, Room 412" className="flex-1 bg-transparent text-sm text-[#1A1208]/80 outline-none placeholder:text-[#1A1208]/25" />
              </div>
            </div>

            <div>
              <label className="text-[#1A1208]/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Special Requests</label>
              <div className="flex items-start gap-2 border border-[#1A1208]/10 rounded-xl px-3 py-2.5 bg-[#FAF5EC]/40">
                <span className="text-[#C9953A] text-sm shrink-0 mt-0.5">💬</span>
                <textarea value={requests} onChange={e => setRequests(e.target.value)} rows={3}
                  placeholder="Vegetarian food, birthday surprise, wheelchair access, anniversary decoration..."
                  className="flex-1 bg-transparent text-sm text-[#1A1208]/70 outline-none resize-none placeholder:text-[#1A1208]/25" />
              </div>
            </div>
          </div>
        )}

        {/* STEP 4 — Confirm Summary */}
        {step === 3 && (
          <div className="space-y-3">
            <div className="text-[#1A1208]/60 text-sm mb-2">Review your booking and confirm via WhatsApp.</div>

            <div className="bg-[#FAF5EC] rounded-xl p-4 space-y-2 text-sm">
              {[
                { l: '🎯 Tour', v: tour.name },
                { l: '📅 Date', v: date },
                { l: '👥 Guests', v: `${adults} adult${adults > 1 ? 's' : ''}${children > 0 ? ` + ${children} child${children > 1 ? 'ren' : ''}` : ''}` },
                { l: '💰 Total', v: `$${total}` },
                { l: '👤 Name', v: name },
                { l: '📱 Phone', v: phone },
                { l: '📍 Hotel', v: hotel },
              ].map(row => (
                <div key={row.l} className="flex justify-between items-start gap-2">
                  <span className="text-[#1A1208]/40 shrink-0">{row.l}</span>
                  <span className="font-medium text-[#1A1208]/80 text-right">{row.v}</span>
                </div>
              ))}
              {requests && (
                <div className="pt-2 border-t border-[#1A1208]/08">
                  <span className="text-[#1A1208]/40 text-xs">📝 Note: </span>
                  <span className="text-[#1A1208]/60 text-xs">{requests}</span>
                </div>
              )}
            </div>

            <div className="bg-[#C9953A]/06 border border-[#C9953A]/15 rounded-xl p-3 text-center">
              <div className="font-bold text-[#C9953A] text-2xl mb-0.5" style={{ fontFamily: 'var(--font-playfair,serif)' }}>${total}</div>
              <div className="text-[#1A1208]/40 text-xs">No payment now · Pay cash on pickup day</div>
            </div>

            <button onClick={handleConfirm}
              className="w-full bg-[#25D366] text-white font-bold text-sm py-4 rounded-xl hover:bg-[#20ba5a] hover:-translate-y-0.5 hover:shadow-lg transition-all flex items-center justify-center gap-2">
              💬 Send Booking to Salman via WhatsApp
            </button>
            <p className="text-[#1A1208]/30 text-xs text-center">Salman will confirm within minutes</p>
          </div>
        )}

        {/* Navigation buttons */}
        <div className={`flex gap-2 mt-5 ${step === 0 ? 'justify-end' : 'justify-between'}`}>
          {step > 0 && (
            <button onClick={() => setStep(s => s - 1)}
              className="px-5 py-2.5 border border-[#1A1208]/15 text-[#1A1208]/60 text-sm font-medium rounded-xl hover:bg-[#1A1208]/04 transition-colors">
              ← Back
            </button>
          )}
          {step < 3 && (
            <button onClick={() => canNext() && setStep(s => s + 1)}
              className={`px-6 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                canNext()
                  ? 'bg-gradient-to-r from-[#C9953A] to-[#B84420] text-white hover:-translate-y-0.5 hover:shadow-lg'
                  : 'bg-[#1A1208]/08 text-[#1A1208]/30 cursor-not-allowed'
              }`}>
              Next Step →
            </button>
          )}
        </div>

      </div>
    </div>
  )
}
