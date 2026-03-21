import Hero from '../components/home/Hero'
import IntroBlurb from '../components/home/IntroBlurb'
import ServiceHighlights from '../components/home/ServiceHighlights'
import BookingCTA from '../components/home/BookingCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <IntroBlurb />
      <ServiceHighlights />
      <BookingCTA />
    </>
  )
}
