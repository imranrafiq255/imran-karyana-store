import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Services from '@/components/Services'
import DigitalServices from '@/components/DigitalServices'
import CelebritySection from '@/components/CelebritySection'
import WhyUs from '@/components/WhyUs'
import OpeningHours from '@/components/OpeningHours'
import Owner from '@/components/Owner'
import Contact from '@/components/Contact'
import Location from '@/components/Location'
import Collaborators from '@/components/Collaborators'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <DigitalServices />
      <CelebritySection />
      <WhyUs />
      <OpeningHours />
      <Owner />
      <Contact />
      <Location />
      <Collaborators />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
