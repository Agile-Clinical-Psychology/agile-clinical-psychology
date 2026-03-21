export default function BioCard({ practitioner }) {
  const { name, credentials, bio, approach, specialties, registrations } = practitioner
  return (
    <div className="bg-brand-cream rounded-3xl shadow-card overflow-hidden">
      <div className="grid md:grid-cols-[280px_1fr]">
        {/* Photo */}
        <div className="bg-brand-sage/20 flex items-center justify-center min-h-[280px]">
          <div className="text-center p-8">
            <div className="w-32 h-32 rounded-full bg-brand-sand mx-auto mb-4 flex items-center justify-center">
              <span className="text-5xl">👤</span>
            </div>
            <p className="font-heading text-lg font-semibold text-brand-charcoal">{name}</p>
            <p className="font-body text-sm text-brand-muted mt-1">{credentials}</p>
          </div>
        </div>

        {/* Bio */}
        <div className="p-8 flex flex-col gap-5">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-brand-terra mb-2">About</p>
            <p className="font-body text-brand-muted leading-relaxed">{bio}</p>
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
