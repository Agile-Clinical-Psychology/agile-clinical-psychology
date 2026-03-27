import Button from '../ui/Button'
import IconConfidential from '../../assets/icon-confidential.svg?react'
import IconAhpra from '../../assets/icon-ahpra.svg?react'
import IconHours from '../../assets/icon-hours.svg?react'
import IconMedicare from '../../assets/icon-medicare.svg?react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-sage-dark via-brand-sage to-brand-beige min-h-[calc(100dvh-4rem)] flex items-center">
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-terra/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-brand-cream/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="flex flex-col gap-6">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Your journey to an <span className="text-brand-terra-light">agile</span> life begins here
          </h1>
          <p className="font-body text-lg text-white/80 leading-relaxed max-w-md">
            Compassionate, evidence-based psychological care for individuals, couples, and families.
            You deserve support that truly fits your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
            <Button to="/book" variant="terra" size="lg" className="flex-1">
              Book a Session
            </Button>
            <Button to="/services" variant="outline-white" size="lg" className="flex-1">
              Our Services
            </Button>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: <IconConfidential />, label: 'Confidential', desc: 'Private, safe, non-judgemental' },
            { icon: <IconAhpra />, label: 'AHPRA Registered', desc: 'Fully qualified clinician' },
            { icon: <IconHours />, label: 'Flexible Hours', desc: 'Morning & evening available' },
            { icon: <IconMedicare />, label: 'Medicare Rebates', desc: 'Mental Health Care Plans accepted' },
          ].map(({ icon, label, desc }) => (
            <div key={label} className="bg-brand-sage-dark/40 backdrop-blur-sm rounded-2xl p-7 flex flex-col gap-3">
              <div className="text-white">{icon}</div>
              <p className="font-body font-semibold text-white text-base">{label}</p>
              <p className="font-body text-white/90 text-sm leading-snug">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
