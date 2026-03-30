import { Helmet } from 'react-helmet-async'
import Hero from '../components/home/Hero'
import IntroBlurb from '../components/home/IntroBlurb'
import ServiceHighlights from '../components/home/ServiceHighlights'
import BookingCTA from '../components/home/BookingCTA'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Agile Clinical Psychology | Psychologist in Surry Hills, Sydney</title>
        <meta name="description" content="Compassionate, evidence-based psychological care for individuals, couples, and families in Surry Hills, Sydney. Book a telehealth session today." />
      </Helmet>
      <Hero />
      <IntroBlurb />
      <ServiceHighlights />
      <BookingCTA />
    </>
  )
}
