const BOLD_PHRASES = ['First Class Honours', 'Master of Clinical Psychology', 'St John of God Hospital']

function BoldPhrases({ text }) {
  const parts = text.split(new RegExp(`(${BOLD_PHRASES.join('|')})`, 'g'))
  return parts.map((part, i) =>
    BOLD_PHRASES.includes(part) ? <strong key={i} className="font-semibold">{part}</strong> : part
  )
}

export default function BioCard({ practitioner }) {
  const { name, title, credentials, bio, approach, specialties, registrations } = practitioner
  return (
    <div className="bg-brand-cream rounded-3xl shadow-card overflow-hidden">
      <div className="grid md:grid-cols-[340px_1fr]">
        {/* Photo */}
        <div className="bg-brand-sage/20 flex items-center justify-center min-h-[280px]">
          <div className="text-center p-8">
            <img
              src="/psychologist.avif"
              alt={name}
              className="w-[300px] h-[300px] md:w-72 md:h-72 rounded-full object-cover mx-auto mb-4 shadow-card"
            />
            <p className="font-heading text-lg font-semibold text-brand-charcoal">{name}</p>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-brand-terra mt-1">{title}</p>
            <p className="font-body text-sm text-brand-muted mt-1">{credentials}</p>
          </div>
        </div>

        {/* Bio */}
        <div className="p-8 flex flex-col gap-5">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-brand-terra mb-2">About</p>
            <div className="flex flex-col gap-3">
              {bio.map((para, i) => (
                <p key={i} className="font-body text-brand-muted leading-relaxed"><BoldPhrases text={para} /></p>
              ))}
            </div>
          </div>
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-brand-terra mb-2">Therapeutic Approach</p>
            <p className="font-body text-brand-muted leading-relaxed">{approach}</p>
          </div>
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-brand-terra mb-3">Areas of Focus</p>
            <div className="flex flex-wrap gap-2">
              {specialties.map((s) => (
                <span
                  key={s}
                  className="font-body text-sm bg-brand-beige text-brand-sage-dark rounded-full px-3 py-1 border border-brand-sand"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <p className="font-body text-xs text-brand-muted border-t border-brand-sand pt-4">
            {registrations}
          </p>
        </div>
      </div>
    </div>
  )
}
