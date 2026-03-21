import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-sage-dark via-brand-sage to-brand-beige min-h-[90vh] flex items-center">
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-terra/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-brand-cream/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="flex flex-col gap-6">
          <span className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-brand-terra-light">
            Agile Clinical Psychology
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Your path to <span className="text-brand-terra-light">wellbeing</span> starts here
          </h1>
          <p className="font-body text-lg text-white/80 leading-relaxed max-w-md">
            Compassionate, evidence-based psychological care for individuals, couples, and families.
            You deserve support that truly fits your needs.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button to="/book" variant="terra" size="lg">
              Book a Session
            </Button>
            <Button to="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-sage-dark focus:ring-white">
              Our Services
            </Button>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: '💬', label: 'Confidential', desc: 'Private, safe, non-judgemental' },
            { icon: '🏅', label: 'AHPRA Registered', desc: 'Fully qualified clinician' },
            { icon: '📅', label: 'Flexible Hours', desc: 'Morning & evening available' },
            { icon: '💳', label: 'Medicare Rebates', desc: 'Mental Health Care Plans accepted' },
          ].map(({ icon, label, desc }) => (
            <div key={label} className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 flex flex-col gap-2">
              <span className="text-2xl">{icon}</span>
              <p className="font-body font-semibold text-white text-sm">{label}</p>
              <p className="font-body text-white/70 text-xs leading-snug">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
