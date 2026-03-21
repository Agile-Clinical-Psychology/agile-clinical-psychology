import SectionHeading from '../components/ui/SectionHeading'
import HalaxyWidget from '../components/booking/HalaxyWidget'

export default function Book() {
  return (
    <>
      {/* Page header */}
      <section className="bg-brand-sage-dark py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Book an Appointment"
            subtitle="Select a service and a time that suits you. All appointments are confidential."
            light
          />
        </div>
      </section>

      {/* Booking widget */}
      <section className="py-16 px-6 bg-brand-beige">
        <div className="max-w-4xl mx-auto">
          <HalaxyWidget />
          <p className="font-body text-center text-sm text-brand-muted mt-6">
            Your privacy is our priority. All booking information is handled securely through Halaxy.
            <br />
            Prefer to call?{' '}
            <a href="tel:0212345678" className="text-brand-sage-dark underline hover:text-brand-terra transition-colors">
              (02) 1234 5678
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
