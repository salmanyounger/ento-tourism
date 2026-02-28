'use client'
import { useState } from 'react'
import { WHATSAPP, type SubTour } from '@/data/tours'

interface Props { tour: SubTour; waLink: string }

const NATIONALITIES = [
  '🇦🇪 UAE','🇬🇧 United Kingdom','🇺🇸 United States','🇮🇳 India','🇵🇰 Pakistan',
  '🇩🇪 Germany','🇫🇷 France','🇷🇺 Russia','🇨🇳 China','🇯🇵 Japan','🇰🇷 South Korea',
  '🇧🇷 Brazil','🇦🇺 Australia','🇨🇦 Canada','🇮🇹 Italy','🇪🇸 Spain','🇸🇦 Saudi Arabia',
  '🇪🇬 Egypt','🇵🇭 Philippines','🇧🇩 Bangladesh','🇲🇾 Malaysia','🇹🇷 Turkey',
  '🇮🇩 Indonesia','🇳🇱 Netherlands','🇸🇪 Sweden','🇨🇭 Switzerland','🇵🇱 Poland','🇿🇦 South Africa','Other'
]

const HOTELS = [
  'Downtown Dubai / Burj Khalifa','Dubai Marina','JBR / Jumeirah Beach Residence',
  'Palm Jumeirah','Business Bay / DIFC','Deira / Airport Area','Jumeirah / Umm Suqeim',
  'Dubai Hills / Al Barsha','Bur Dubai / Karama','Sharjah','Abu Dhabi','Other Area'
]

const PICKUP_TIMES = [
  '3:00 PM (Standard)','3:30 PM','4:00 PM','Morning — 5:30 AM','Morning — 6:00 AM','Flexible — Salman will confirm'
]

const STEPS = [
  { num: 1, icon: '📅', label: 'Date & Guests' },
  { num: 2, icon: '👤', label: 'Your Details' },
  { num: 3, icon: '🏨', label: 'Pickup Info' },
  { num: 4, icon: '✅', label: 'Confirm' },
]

export default function BookingWidget({ tour }: Props) {
  const [step, setStep] = useState(0)

  // Step 1
  const [date, setDate] = useState('')
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)

  // Step 2
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [nationality, setNationality] = useState('')
  const [passportNo, setPassportNo] = useState('')
  const [emergencyName, setEmergencyName] = useState('')
  const [emergencyPhone, setEmergencyPhone] = useState('')

  // Step 3
  const [hotel, setHotel] = useState('')
  const [hotelName, setHotelName] = useState('')
  const [roomNo, setRoomNo] = useState('')
  const [pickupTime, setPickupTime] = useState('')
  const [specialRequest, setSpecialRequest] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)

  const adultTotal = adults * tour.price
  const childTotal = children * Math.round(tour.price * 0.5)
  const total = adultTotal + childTotal

  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  const bookingRef = `ENTO-${Date.now().toString().slice(-6)}`

  const canProceed = () => {
    if (step === 0) return date !== ''
    if (step === 1) return firstName !== '' && lastName !== '' && phone !== '' && nationality !== ''
    if (step === 2) return hotel !== '' && hotelName !== '' && pickupTime !== '' && agreeTerms
    return true
  }

  const handleConfirm = () => {
    const msg =
`Hi Salman! I want to confirm my booking with ENTO Tourism.

🎫 *Booking Ref:* ${bookingRef}
🏜️ *Tour:* ${tour.name}
📅 *Date:* ${date}
🕐 *Pickup Time:* ${pickupTime}

👥 *Guests:*
  Adults: ${adults} × $${tour.price} = $${adultTotal}
  Children: ${children} × $${Math.round(tour.price * 0.5)} = $${childTotal}
  Infants: ${infants} (free)
💰 *Total:* $${total}

👤 *Lead Guest:* ${firstName} ${lastName}
🌍 *Nationality:* ${nationality}
📱 *Phone:* ${phone}
📧 *Email:* ${email || 'Not provided'}
🪪 *Passport No:* ${passportNo || 'Will share on arrival'}

🚨 *Emergency Contact:* ${emergencyName || 'N/A'} — ${emergencyPhone || 'N/A'}

🏨 *Hotel Area:* ${hotel}
🏩 *Hotel Name:* ${hotelName}
🚪 *Room No:* ${roomNo || 'Will confirm'}

📝 *Special Requests:* ${specialRequest || 'None'}

Please confirm availability. Thank you!`

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div className="bg-[#FFFDF8] border border-[#1A1208]/08 rounded-2xl overflow-hidden shadow-xl shadow-[#1A1208]/06">

      {/* Header */}
      <div className="bg-gradient-to-r from-[#080C16] to-[#1A1008] p-5">
        <div className="font-bold text-white text-lg mb-0.5" style={{ fontFamily: 'var(--font-playfair,serif)' }}>
          Book Your Experience
        </div>
        <div className="text-white/40 text-xs">Free cancellation 24h before · No payment now · WhatsApp confirmation</div>
      </div>

      {/* Step progress bar */}
      <div className="px-5 pt-4 pb-2">
        <div className="flex items-center justify-between mb-2">
          {STEPS.map((s, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                i < step ? 'bg-[#25D366] text-white' :
                i === step ? 'bg-gradient-to-br from-[#C9953A] to-[#B84420] text-white shadow-lg shadow-[#C9953A]/30' :
                'bg-[#1A1208]/08 text-[#1A1208]/30'
              }`}>
                {i < step ? '✓' : s.icon}
              </div>
              <div className={`text-[9px] mt-1 font-medium tracking-wider text-center ${i === step ? 'text-[#C9953A]' : 'text-[#1A1208]/30'}`}>
                {s.label}
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden" />
              )}
            </div>
          ))}
        </div>
        {/* Progress line */}
        <div className="relative h-1 bg-[#1A1208]/08 rounded-full mx-4 -mt-8 mb-6">
          <div className="absolute h-full bg-gradient-to-r from-[#C9953A] to-[#B84420] rounded-full transition-all duration-500"
            style={{ width: `${(step / 3) * 100}%` }} />
        </div>
      </div>

      <div className="px-5 pb-5">

        {/* ─── STEP 1 — Date & Guests ─── */}
        {step === 0 && (
          <div className="space-y-4">
            <div className="flex items-baseline gap-2 bg-[#C9953A]/06 border border-[#C9953A]/15 rounded-xl px-4 py-3">
              <span className="text-[#1A1208]/40 text-sm">From</span>
              <span className="font-bold text-[#C9953A] text-3xl" style={{ fontFamily: 'var(--font-playfair,serif)' }}>${tour.price}</span>
              <span className="text-[#1A1208]/40 text-sm">/ person</span>
              <span className="ml-auto text-xs text-[#25D366] font-medium">✓ Free cancellation</span>
            </div>

            <div>
              <label className="text-[#1A1208]/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Tour Date *</label>
              <div className="flex items-center gap-2 border border-[#1A1208]/10 rounded-xl px-3 py-2.5 bg-[#FAF5EC]/40 focus-within:border-[#C9953A]/40 transition-colors">
                <span className="text-[#C9953A]">📅</span>
                <input type="date" value={date} min={minDate} onChange={e => setDate(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-[#1A1208]/80 outline-none" />
              </div>
            </div>

            <div className="space-y-3">
              {[
                { l: 'Adults (12+)', sub: `$${tour.price} each`, v: adults, set: setAdults, min: 1, max: 20 },
                { l: 'Children (3–11)', sub: `$${Math.round(tour.price * 0.5)} each (50% off)`, v: children, set: setChildren, min: 0, max: 10 },
                { l: 'Infants (0–2)', sub: 'Free', v: infants, set: setInfants, min: 0, max: 5 },
              ].map(f => (
                <div key={f.l} className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-[#1A1208]/80">{f.l}</div>
                    <div className="text-xs text-[#1A1208]/40">{f.sub}</div>
                  </div>
                  <div className="flex items-center border border-[#1A1208]/10 rounded-xl overflow-hidden">
                    <button onClick={() => f.set((v: number) => Math.max(f.min, v - 1))}
                      className="w-9 h-9 text-[#C9953A] font-bold hover:bg-[#C9953A]/08 transition-colors flex items-center justify-center">−</button>
                    <span className="w-8 text-center text-sm font-semibold text-[#1A1208]">{f.v}</span>
                    <button onClick={() => f.set((v: number) => Math.min(f.max, v + 1))}
                      className="w-9 h-9 text-[#C9953A] font-bold hover:bg-[#C9953A]/08 transition-colors flex items-center justify-center">+</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#080C16] rounded-xl px-4 py-3 flex justify-between items-center">
              <div>
                <div className="text-white/40 text-xs">Estimated Total</div>
                <div className="font-bold text-[#E8B86D] text-2xl" style={{ fontFamily: 'var(--font-playfair,serif)' }}>${total}</div>
              </div>
              <div className="text-right text-xs text-white/30 space-y-0.5">
                <div>{adults} adult{adults > 1 ? 's' : ''} × ${tour.price}</div>
                {children > 0 && <div>{children} child × ${Math.round(tour.price * 0.5)}</div>}
                {infants > 0 && <div>{infants} infant{infants > 1 ? 's' : ''} — free</div>}
              </div>
            </div>
          </div>
        )}

        {/* ─── STEP 2 — Personal Details ─── */}
        {step === 1 && (
          <div className="space-y-3">
            <p className="text-[#1A1208]/50 text-xs mb-3">Salman uses these details to prepare personally for your arrival and to send your confirmation.</p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { l: 'First Name *', v: firstName, set: setFirstName, ph: 'Ahmed', icon: '👤' },
                { l: 'Last Name *', v: lastName, set: setLastName, ph: 'Al Mansouri', icon: '👤' },
              ].map(f => (
                <div key={f.l}>
                  <label className="text-[#1A1208]/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">{f.l}</label>
                  <div className="flex items-center gap-2 border border-[#1A1208]/10 rounded-xl px-3 py-2.5 bg-[#FAF5EC]/40 focus-within:border-[#C9953A]/40 transition-colors">
                    <input type="text" value={f.v} onChange={e => f.set(e.target.value)} placeholder={f.ph}
                      className="flex-1 bg-transparent text-sm text-[#1A1208]/80 outline-none placeholder:text-[#1A1208]/25" />
                  </div>
                </div>
              ))}
            </div>

            {[
              { l: 'WhatsApp / Phone *', v: phone, set: setPhone, ph: '+971 50 123 4567', icon: '📱', type: 'tel' },
              { l: 'Email Address', v: email, set: setEmail, ph: 'your@email.com', icon: '📧', type: 'email' },
            ].map(f => (
              <div key={f.l}>
                <label className="text-[#1A1208]/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">{f.l}</label>
                <div className="flex items-center gap-2 border border-[#1A1208]/10 rounded-xl px-3 py-2.5 bg-[#FAF5EC]/40 focus-within:border-[#C9953A]/40 transition-colors">
                  <span className="text-[#C9953A] text-sm shrink-0">{f.icon}</span>
                  <input type={f.type} value={f.v} onChange={e => f.set(e.target.value)} placeholder={f.ph}
                    className="flex-1 bg-transparent text-sm text-[#1A1208]/80 outline-none placeholder:text-[#1A1208]/25" />
                </div>
              </div>
            ))}

            <div>
              <label className="text-[#1A1208]/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Nationality *</label>
              <div className="flex items-center gap-2 border border-[#1A1208]/10 rounded-xl px-3 py-2.5 bg-[#FAF5EC]/40 focus-within:border-[#C9953A]/40 transition-colors">
                <span className="text-[#C9953A] text-sm shrink-0">🌍</span>
                <select value={nationality} onChange={e => setNationality(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-[#1A1208]/80 outline-none">
                  <option value="">Select your nationality</option>
                  {NATIONALITIES.map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="text-[#1A1208]/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Passport / ID Number <span className="text-[#1A1208]/25 normal-case">(optional)</span></label>
              <div className="flex items-center gap-2 border border-[#1A1208]/10 rounded-xl px-3 py-2.5 bg-[#FAF5EC]/40 focus-within:border-[#C9953A]/40 transition-colors">
                <span className="text-[#C9953A] text-sm shrink-0">🪪</span>
                <input type="text" value={passportNo} onChange={e => setPassportNo(e.target.value)} placeholder="Required for some tours"
                  className="flex-1 bg-transparent text-sm text-[#1A1208]/80 outline-none placeholder:text-[#1A1208]/25" />
              </div>
            </div>

            <div className="border border-[#1A1208]/08 rounded-xl p-3 bg-[#FAF5EC]/40">
              <div className="text-xs font-semibold text-[#1A1208]/50 uppercase tracking-wider mb-2">🚨 Emergency Contact <span className="normal-case text-[#1A1208]/30">(optional but recommended)</span></div>
              <div className="grid grid-cols-2 gap-2">
                <input type="text" value={emergencyName} onChange={e => setEmergencyName(e.target.value)} placeholder="Contact name"
                  className="border border-[#1A1208]/10 rounded-lg px-3 py-2 text-sm text-[#1A1208]/80 bg-transparent outline-none placeholder:text-[#1A1208]/25" />
                <input type="tel" value={emergencyPhone} onChange={e => setEmergencyPhone(e.target.value)} placeholder="Phone number"
                  className="border border-[#1A1208]/10 rounded-lg px-3 py-2 text-sm text-[#1A1208]/80 bg-transparent outline-none placeholder:text-[#1A1208]/25" />
              </div>
            </div>
          </div>
        )}

        {/* ─── STEP 3 — Pickup & Requests ─── */}
        {step === 2 && (
          <div className="space-y-3">
            <p className="text-[#1A1208]/50 text-xs mb-3">Free hotel pickup is included. Tell us exactly where you are staying so Salman can arrange your private pickup.</p>

            <div>
              <label className="text-[#1A1208]/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Hotel Area *</label>
              <div className="flex items-center gap-2 border border-[#1A1208]/10 rounded-xl px-3 py-2.5 bg-[#FAF5EC]/40 focus-within:border-[#C9953A]/40 transition-colors">
                <span className="text-[#C9953A] text-sm shrink-0">📍</span>
                <select value={hotel} onChange={e => setHotel(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-[#1A1208]/80 outline-none">
                  <option value="">Select your area in Dubai</option>
                  {HOTELS.map(h => <option key={h} value={h}>{h}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="text-[#1A1208]/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Hotel / Apartment Name *</label>
              <div className="flex items-center gap-2 border border-[#1A1208]/10 rounded-xl px-3 py-2.5 bg-[#FAF5EC]/40 focus-within:border-[#C9953A]/40 transition-colors">
                <span className="text-[#C9953A] text-sm shrink-0">🏨</span>
                <input type="text" value={hotelName} onChange={e => setHotelName(e.target.value)} placeholder="e.g. Atlantis The Palm"
                  className="flex-1 bg-transparent text-sm text-[#1A1208]/80 outline-none placeholder:text-[#1A1208]/25" />
              </div>
            </div>

            <div>
              <label className="text-[#1A1208]/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Room / Apartment Number</label>
              <div className="flex items-center gap-2 border border-[#1A1208]/10 rounded-xl px-3 py-2.5 bg-[#FAF5EC]/40 focus-within:border-[#C9953A]/40 transition-colors">
                <span className="text-[#C9953A] text-sm shrink-0">🚪</span>
                <input type="text" value={roomNo} onChange={e => setRoomNo(e.target.value)} placeholder="e.g. Room 412 / Apt 2B"
                  className="flex-1 bg-transparent text-sm text-[#1A1208]/80 outline-none placeholder:text-[#1A1208]/25" />
              </div>
            </div>

            <div>
              <label className="text-[#1A1208]/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Preferred Pickup Time *</label>
              <div className="flex items-center gap-2 border border-[#1A1208]/10 rounded-xl px-3 py-2.5 bg-[#FAF5EC]/40 focus-within:border-[#C9953A]/40 transition-colors">
                <span className="text-[#C9953A] text-sm shrink-0">🕐</span>
                <select value={pickupTime} onChange={e => setPickupTime(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-[#1A1208]/80 outline-none">
                  <option value="">Select pickup time</option>
                  {PICKUP_TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="text-[#1A1208]/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Special Requests</label>
              <div className="flex items-start gap-2 border border-[#1A1208]/10 rounded-xl px-3 py-2.5 bg-[#FAF5EC]/40 focus-within:border-[#C9953A]/40 transition-colors">
                <span className="text-[#C9953A] text-sm shrink-0 mt-0.5">💬</span>
                <textarea value={specialRequest} onChange={e => setSpecialRequest(e.target.value)} rows={3}
                  placeholder="Vegetarian meal, birthday surprise, wheelchair access, anniversary decoration, baby seat needed..."
                  className="flex-1 bg-transparent text-sm text-[#1A1208]/70 outline-none resize-none placeholder:text-[#1A1208]/25" />
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <div className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-all ${agreeTerms ? 'bg-[#C9953A] border-[#C9953A]' : 'border-[#1A1208]/20'}`}
                onClick={() => setAgreeTerms(!agreeTerms)}>
                {agreeTerms && <span className="text-white text-xs">✓</span>}
              </div>
              <span className="text-xs text-[#1A1208]/50 leading-relaxed">
                I agree to ENTO Tourism&apos;s terms. I understand this is a WhatsApp booking confirmation — no payment is taken now. Free cancellation up to 24 hours before the tour.
              </span>
            </label>
          </div>
        )}

        {/* ─── STEP 4 — Booking Summary & Confirm ─── */}
        {step === 3 && (
          <div className="space-y-3">
            <div className="bg-gradient-to-br from-[#080C16] to-[#1A1008] rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-white/50 text-xs uppercase tracking-widest">Booking Reference</div>
                <div className="font-bold text-[#E8B86D] text-sm">{bookingRef}</div>
              </div>
              <div className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'var(--font-playfair,serif)' }}>{tour.name}</div>
              <div className="text-white/40 text-xs">{tour.duration} · {tour.groupSize} · {tour.difficulty}</div>
            </div>

            <div className="space-y-2 text-sm">
              {[
                { icon: '📅', l: 'Date', v: date },
                { icon: '🕐', l: 'Pickup', v: pickupTime },
                { icon: '👥', l: 'Guests', v: `${adults} adult${adults > 1 ? 's' : ''}${children > 0 ? ` · ${children} child${children > 1 ? 'ren' : ''}` : ''}${infants > 0 ? ` · ${infants} infant${infants > 1 ? 's' : ''}` : ''}` },
                { icon: '👤', l: 'Name', v: `${firstName} ${lastName}` },
                { icon: '🌍', l: 'Nationality', v: nationality },
                { icon: '📱', l: 'Phone', v: phone },
                { icon: '📍', l: 'Hotel Area', v: hotel },
                { icon: '🏨', l: 'Hotel', v: hotelName },
                { icon: '🚪', l: 'Room', v: roomNo || 'Will confirm' },
              ].map(row => (
                <div key={row.l} className="flex items-start gap-3 py-1.5 border-b border-[#1A1208]/05 last:border-0">
                  <span className="text-base shrink-0">{row.icon}</span>
                  <span className="text-[#1A1208]/40 w-20 shrink-0">{row.l}</span>
                  <span className="font-medium text-[#1A1208]/75 flex-1">{row.v}</span>
                </div>
              ))}
              {specialRequest && (
                <div className="flex items-start gap-3 py-1.5">
                  <span className="text-base shrink-0">💬</span>
                  <span className="text-[#1A1208]/40 w-20 shrink-0">Notes</span>
                  <span className="text-[#1A1208]/60 flex-1 text-xs italic">{specialRequest}</span>
                </div>
              )}
            </div>

            <div className="bg-[#C9953A]/08 border border-[#C9953A]/20 rounded-xl px-4 py-3 flex items-center justify-between">
              <div>
                <div className="text-[#1A1208]/40 text-xs">Total Amount</div>
                <div className="font-bold text-[#C9953A] text-3xl" style={{ fontFamily: 'var(--font-playfair,serif)' }}>${total}</div>
                <div className="text-[#1A1208]/30 text-xs">No payment now — pay cash on pickup day</div>
              </div>
              <div className="text-3xl">💰</div>
            </div>

            <button onClick={handleConfirm}
              className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#20ba5a] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/30 transition-all flex items-center justify-center gap-2 text-sm">
              💬 Send Booking to Salman on WhatsApp
            </button>

            <div className="text-center text-[#1A1208]/30 text-xs">
              Salman replies within minutes · {bookingRef}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className={`flex gap-2 mt-5 ${step === 0 ? 'justify-end' : 'justify-between'}`}>
          {step > 0 && (
            <button onClick={() => setStep(s => s - 1)}
              className="px-5 py-2.5 border border-[#1A1208]/12 text-[#1A1208]/55 text-sm font-medium rounded-xl hover:bg-[#1A1208]/04 transition-colors">
              ← Back
            </button>
          )}
          {step < 3 && (
            <button onClick={() => canProceed() && setStep(s => s + 1)}
              className={`px-7 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 ${
                canProceed()
                  ? 'bg-gradient-to-r from-[#C9953A] to-[#B84420] text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C9953A]/30'
                  : 'bg-[#1A1208]/06 text-[#1A1208]/25 cursor-not-allowed'
              }`}>
              {step === 2 ? 'Review Booking →' : 'Continue →'}
            </button>
          )}
        </div>

      </div>
    </div>
  )
}
