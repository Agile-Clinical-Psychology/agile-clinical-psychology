import { Link } from 'react-router-dom'
import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/services'
import { serviceIcons } from '../../data/serviceIcons'

export default function ServiceHighlights() {
  return (
    <section className="py-14 md:py-20 px-6 bg-brand-beige">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col items-center">
          <SectionHeading
            title="How we can help"
            subtitle="Evidence-based therapy tailored to your individual needs."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link key={s.id} to="/services" className="group">
              <Card icon={serviceIcons[s.id]} title={s.title} description={s.shortDesc} className="h-full group-hover:shadow-warm" />
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/services" className="font-body text-sm font-semibold text-brand-sage-dark hover:text-brand-terra transition-colors underline underline-offset-4">
            View all services →
          </Link>
        </div>
      </div>
    </section>
  )
}
