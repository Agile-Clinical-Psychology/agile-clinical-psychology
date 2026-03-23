import SectionHeading from '../components/ui/SectionHeading'
import ServiceCard from '../components/services/ServiceCard'
import BookingCTA from '../components/home/BookingCTA'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      {/* Page header */}
      <section className="bg-brand-sage-dark py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Our Services"
            subtitle="Evidence-based therapy and assessment services, tailored to your unique situation."
            light
          />
        </div>
      </section>

      {/* Service cards */}
      <section className="py-20 px-6 bg-brand-beige">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 px-6 bg-brand-cream">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-col items-center mb-10">
            <SectionHeading
              title="Conditions we can help with"
              subtitle="These are some of the most common reasons people seek support. Whatever you're facing, you don't have to face it alone."
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Anxiety',
              'Depression',
              'Stress & Burnout',
              'Trauma & PTSD',
              'LGBTQI+ issues',
              'Personality difficulties',
              'Grief & Loss',
              'Relationship issues',
            ].map((condition) => (
              <span
                key={condition}
                className="font-body text-sm font-medium bg-brand-beige text-brand-sage-dark border border-brand-sand rounded-full px-5 py-2"
              >
                {condition}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Medicare note */}
      <section className="py-12 px-6 bg-brand-cream">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-brand-terra mb-3">Medicare Rebates</p>
          <p className="font-body text-brand-muted text-base leading-relaxed">
            Many of our services are eligible for Medicare rebates through a Mental Health Care Plan (MHCP).
            Your GP can refer you for up to 10 individual sessions per calendar year. Please bring your MHCP
            to your first appointment.
          </p>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}
