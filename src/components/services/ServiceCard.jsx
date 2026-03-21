import Button from '../ui/Button'

export default function ServiceCard({ service }) {
  const { icon, title, longDesc, audience } = service
  return (
    <div className="bg-brand-cream rounded-3xl shadow-card p-8 flex flex-col gap-4">
      <span className="text-4xl">{icon}</span>
      <h3 className="font-heading text-2xl font-semibold text-brand-charcoal">{title}</h3>
      <p className="font-body text-brand-muted leading-relaxed flex-1">{longDesc}</p>
      <div className="bg-brand-beige rounded-2xl px-4 py-3">
        <p className="font-body text-xs font-semibold text-brand-terra uppercase tracking-wide mb-1">
          Suitable for
        </p>
        <p className="font-body text-sm text-brand-muted">{audience}</p>
      </div>
      <Button to="/book" variant="primary" size="sm" className="w-fit">
        Book for this service
      </Button>
    </div>
  )
}
