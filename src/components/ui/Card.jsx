export default function Card({ icon, title, description, children, className = '' }) {
  return (
    <div
      className={`bg-brand-cream rounded-3xl shadow-card p-7 flex flex-col gap-3
        hover:shadow-warm hover:-translate-y-1 transition-all duration-200 ${className}`}
    >
      {icon && (
        <span className="text-3xl">{icon}</span>
      )}
      {title && (
        <h3 className="font-heading text-xl font-semibold text-brand-charcoal">{title}</h3>
      )}
      {description && (
        <p className="font-body text-brand-muted leading-relaxed text-sm">{description}</p>
      )}
      {children}
    </div>
  )
}
