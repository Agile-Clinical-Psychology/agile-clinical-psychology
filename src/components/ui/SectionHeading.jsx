export default function SectionHeading({ title, subtitle, align = 'center', light = false }) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  const textColor = light ? 'text-white' : 'text-brand-charcoal'
  const subtitleColor = light ? 'text-white/80' : 'text-brand-muted'

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      <h2 className={`font-heading text-3xl md:text-4xl font-semibold leading-snug ${textColor}`}>
        {title}
      </h2>
      <span className="block w-12 h-1 rounded-full bg-brand-terra" />
      {subtitle && (
        <p className={`font-body text-lg leading-relaxed max-w-xl ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
