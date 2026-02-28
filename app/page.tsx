import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import SearchBar from '@/components/home/SearchBar'
import CategoriesSection from '@/components/home/CategoriesSection'
import WhyENTO from '@/components/home/WhyENTO'
import Testimonials from '@/components/home/Testimonials'

export const metadata: Metadata = {
  title: 'ENTO Tourism — Best Tours & Activities Across the UAE',
  description: 'Discover and book desert safaris, city tours, boat trips and adventures across Dubai, Abu Dhabi and the UAE. Free hotel pickup. Book via WhatsApp.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SearchBar />
      <CategoriesSection />
      <WhyENTO />
      <Testimonials />
    </>
  )
}