import Button from '../ui/Button'

export default function BookingCTA() {
  return (
    <section className="py-14 md:py-20 px-6 bg-brand-terra">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white leading-snug">
          Ready to take the first step?
        </h2>
        <p className="font-body text-white/80 text-lg leading-relaxed">
          Booking is easy and confidential. Select a time that suits you and we'll take it from there.
        </p>
        <Button to="/book" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:!text-brand-terra focus:ring-white">
          Book a Session Online
        </Button>
        <p className="font-body text-white/60 text-sm">
          Prefer to call?{' '}
          <a href="tel:0422918631" className="underline hover:text-white transition-colors">
            0422 918 631
          </a>
        </p>
      </div>
    </section>
  )
}
