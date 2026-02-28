import type { Metadata } from 'next'
import { Playfair_Display, Jost } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'

const playfair = Playfair_Display({ subsets:['latin'], variable:'--font-playfair', display:'swap' })
const jost = Jost({ subsets:['latin'], variable:'--font-jost', display:'swap' })

export const metadata: Metadata = {
  title: { default:'ENTO Tourism — Best Tours & Activities in the UAE', template:'%s | ENTO Tourism' },
  description:'Book the best tours and activities across Dubai, Abu Dhabi, Sharjah and the UAE. Desert safaris, city tours, boat trips and more.',
  keywords:['UAE tours','Dubai tours','desert safari Dubai','ENTO Tourism','Salman Ali'],
  openGraph:{ type:'website', siteName:'ENTO Tourism', locale:'en_AE' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable}`}>
      <body style={{fontFamily:"var(--font-jost,'Jost',sans-serif)"}}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
