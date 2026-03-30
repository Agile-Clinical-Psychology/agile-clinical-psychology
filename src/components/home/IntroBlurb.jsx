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
            <Button to="/about" variant="outline" size="md">Meet Roderick</Button>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-body text-brand-muted text-lg leading-relaxed">
              Hi, I'm Roderick — a Clinical Psychologist with a passion for helping people navigate life's
              challenges with clarity, confidence, and compassion. Whether you're facing anxiety, relationship
              difficulties, a difficult transition, or something you can't quite name yet, I'm here to help
              you find a way forward.
            </p>
            <p className="font-body text-brand-muted text-lg leading-relaxed">
              The word <span className="font-semibold text-brand-charcoal">agile</span> is at the heart of
              everything I do. It reflects my unique approach to clinical practice and my broader philosophy
              on life — that true wellbeing comes from cultivating agility across mind, body, and spirit.
              Rather than a one-size-fits-all method, I work with you to develop flexible, adaptive strategies
              that honour the whole person.
            </p>
            <p className="font-body text-brand-muted text-lg leading-relaxed">
              You don't need to have it all figured out before reaching out. We'll work through it together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
