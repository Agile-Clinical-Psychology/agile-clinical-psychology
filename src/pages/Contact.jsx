import SectionHeading from '../components/ui/SectionHeading'
import ContactForm from '../components/contact/ContactForm'
import ContactDetails from '../components/contact/ContactDetails'

export default function Contact() {
  return (
    <>
      {/* Page header */}
      <section className="bg-brand-sage-dark py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Contact Us"
            subtitle="Reach out to book an appointment or ask a question. We'd love to hear from you."
            light
          />
        </div>
      </section>

      {/* Form + Details */}
      <section className="py-20 px-6 bg-brand-beige">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_360px] gap-12">
          <div className="bg-brand-cream rounded-3xl shadow-card p-8">
            <h2 className="font-heading text-2xl font-semibold text-brand-charcoal mb-6">Send us a message</h2>
            <ContactForm />
          </div>
          <div className="flex flex-col gap-8">
            <div className="bg-brand-cream rounded-3xl shadow-card p-8">
              <ContactDetails />
            </div>
            <div className="bg-brand-cream rounded-3xl shadow-card p-6 text-center">
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-brand-terra mb-2">Prefer to book directly?</p>
              <a
                href="/book"
                className="font-body text-sm font-semibold text-brand-sage-dark hover:text-brand-terra transition-colors underline underline-offset-4"
              >
                Book online via our calendar →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
