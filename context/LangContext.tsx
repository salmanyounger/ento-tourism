'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { LangCode, T, LANGUAGES, detectLang } from '@/lib/translations'

interface LangCtx { lang: LangCode; t: (k:string)=>string; setLang: (l:LangCode)=>void; isRTL: boolean }
const Ctx = createContext<LangCtx>({ lang:'en', t:(k)=>k, setLang:()=>{}, isRTL:false })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>('en')

  useEffect(() => {
    // Detect country via IP then fallback to browser lang
    const saved = localStorage.getItem('ento_lang') as LangCode|null
    if (saved && T[saved]) { setLangState(saved); return }
    
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(data => {
        const countryMap: Record<string,LangCode> = {
          AE:'ar',SA:'ar',EG:'ar',JO:'ar',KW:'ar',BH:'ar',QA:'ar',OM:'ar',LB:'ar',IQ:'ar',MA:'ar',DZ:'ar',TN:'ar',LY:'ar',YE:'ar',
          RU:'ru',BY:'ru',KZ:'ru',UA:'ru',
          DE:'de',AT:'de',
          FR:'fr',BE:'fr',
          ES:'es',MX:'es',AR:'es',CO:'es',CL:'es',PE:'es',
          CN:'zh',TW:'zh',HK:'zh',SG:'zh',
          JP:'ja',IN:'hi',PK:'ur',BR:'pt',PT:'pt',KR:'ko',IT:'it',NL:'nl',TR:'tr',
        }
        const detected = countryMap[data.country_code]
        if (detected) setLangState(detected)
        else {
          const browser = navigator.language?.split('-')[0] as LangCode
          if (browser && T[browser]) setLangState(browser)
        }
      })
      .catch(() => {
        const browser = navigator.language?.split('-')[0] as LangCode
        if (browser && T[browser]) setLangState(browser)
      })
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = LANGUAGES[lang]?.dir === 'rtl' ? 'rtl' : 'ltr'
  }, [lang])

  const setLang = (l: LangCode) => {
    setLangState(l)
    localStorage.setItem('ento_lang', l)
  }

  const t = (k: string) => T[lang]?.[k] || T['en']?.[k] || k

  return (
    <Ctx.Provider value={{ lang, t, setLang, isRTL: LANGUAGES[lang]?.dir === 'rtl' }}>
      {children}
    </Ctx.Provider>
  )
}

export const useLang = () => useContext(Ctx)
