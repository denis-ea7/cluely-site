import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Benefits from '@/components/Benefits'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-app bg-grid min-h-screen overflow-hidden">
      <Hero />
      <Features />
      <Benefits />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}




























