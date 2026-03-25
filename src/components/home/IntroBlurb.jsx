import SectionHeading from '../ui/SectionHeading'

export default function IntroBlurb() {
  return (
    <section className="py-14 md:py-20 px-6 bg-brand-cream">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-6 flex flex-col items-center">
          <SectionHeading title="A warm, welcoming space for real change" />
        </div>
        <p className="font-body text-brand-muted text-lg leading-relaxed mb-4">
          At Agile Clinical Psychology, we believe that seeking support is a sign of strength. Whether
          you're navigating anxiety, relationship challenges, a difficult life transition, or something
          you can't quite name yet — we're here to help you find clarity and move forward in an agile way.
        </p>
        <p className="font-body text-brand-muted text-lg leading-relaxed">
          Our approach is collaborative, evidence-based, and always tailored to you. You don't have to
          have it all figured out before reaching out. We'll work through it together.
        </p>
      </div>
    </section>
  )
}
