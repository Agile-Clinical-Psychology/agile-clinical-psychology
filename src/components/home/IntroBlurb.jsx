import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

export default function IntroBlurb() {
  return (
    <section className="py-14 md:py-20 px-6 bg-brand-cream">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <SectionHeading title="A warm, welcoming space for real change" />
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="flex flex-col items-center gap-3 flex-shrink-0">
            <img
              src="/psychologist.avif"
              alt="Roderick Gawthrop"
              className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover shadow-card"
            />
            <div className="text-center">
              <p className="font-heading text-lg font-semibold text-brand-charcoal">Roderick Gawthrop</p>
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-brand-terra mt-0.5">Clinical Psychologist</p>
              <p className="font-body text-sm text-brand-muted mt-0.5">BPsych(Hons), MClin Psych</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-body text-brand-muted text-lg leading-relaxed">
              At Agile Clinical Psychology, we believe that seeking support is a sign of strength. Whether
              you're navigating anxiety, relationship challenges, a difficult life transition, or something
              you can't quite name yet — we're here to help you find clarity and move forward in an agile way.
            </p>
            <p className="font-body text-brand-muted text-lg leading-relaxed">
              Our approach is collaborative, evidence-based, and always tailored to you. You don't have to
              have it all figured out before reaching out. We'll work through it together.
            </p>
            <div className="pt-2 self-center">
              <Button to="/about" variant="outline" size="md">Meet Roderick</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
