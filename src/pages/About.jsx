import SectionHeading from '../components/ui/SectionHeading'
import BioCard from '../components/about/BioCard'
import BookingCTA from '../components/home/BookingCTA'
import { practitioner, approaches } from '../data/team'

const values = [
  { icon: '🤝', title: 'Collaborative', desc: 'Therapy is a partnership. We work with you, not at you.' },
  { icon: '🌿', title: 'Compassionate', desc: 'A warm, non-judgemental space where you can be honest.' },
  { icon: '🔬', title: 'Evidence-Based', desc: 'Treatment grounded in the best available research.' },
  { icon: '🎯', title: 'Goal-Oriented', desc: 'Focused on practical, meaningful change in your life.' },
]

export default function About() {
  return (
    <>
      {/* Page header */}
      <section className="bg-brand-sage-dark py-14 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="About the Practice"
            subtitle="Get to know the person behind the practice and the values that guide our work."
            light
          />
        </div>
      </section>

      {/* Bio */}
      <section className="py-14 md:py-20 px-6 bg-brand-beige">
        <div className="max-w-5xl mx-auto">
          <BioCard practitioner={practitioner} />
        </div>
      </section>

      {/* Therapeutic Approaches */}
      <section className="py-14 md:py-20 px-6 bg-brand-mist">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 flex flex-col items-center">
            <SectionHeading
              title="Therapeutic Approaches"
              subtitle="The evidence-based methods that guide our work."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {approaches.map(({ name, fullName, desc }) => (
              <div key={name} className="bg-brand-cream rounded-3xl shadow-card p-7 flex flex-col gap-2">
                <span className="font-heading text-4xl font-bold text-brand-sage">{name}</span>
                <h3 className="font-heading text-lg font-semibold text-brand-charcoal">{fullName}</h3>
                <p className="font-body text-sm text-brand-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 md:py-20 px-6 bg-brand-cream">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 flex flex-col items-center">
            <SectionHeading
              title="Our values"
              subtitle="The principles that shape every session."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="bg-brand-beige rounded-3xl p-6 text-center flex flex-col items-center gap-3">
                <span className="text-3xl">{icon}</span>
                <h3 className="font-heading text-lg font-semibold text-brand-charcoal">{title}</h3>
                <p className="font-body text-sm text-brand-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}
