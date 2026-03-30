import { Helmet } from 'react-helmet-async'
import SectionHeading from '../components/ui/SectionHeading'
import HalaxyWidget from '../components/booking/HalaxyWidget'

export default function Book() {
  return (
    <>
      <Helmet>
        <title>Book an Appointment | Agile Clinical Psychology</title>
        <meta name="description" content="Book a telehealth session with Roderick Gawthrop, Clinical Psychologist. Flexible hours available. Medicare rebates may apply." />
      </Helmet>
      {/* Page header */}
      <section className="bg-brand-sage-dark py-14 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Book an Appointment"
            subtitle="Select a service and a time that suits you. All appointments are confidential."
            light
          />
        </div>
      </section>

      {/* Booking widget */}
      <section className="py-14 md:py-20 px-6 bg-brand-beige">
        <div className="max-w-5xl mx-auto">
          <HalaxyWidget />
          <p className="font-body text-center text-sm text-brand-muted mt-6">
            Your privacy is our priority. All booking information is handled securely through Halaxy.
          </p>
        </div>
      </section>
    </>
  )
}
