const details = [
  { icon: '📍', label: 'Address',       value: 'Level 1/17 Randle St, Surry Hills NSW 2010' },
  { icon: '📞', label: 'Phone',         value: '0422 918 631' },
  { icon: '✉️', label: 'Email',         value: 'info@agileclinpsych.com.au' },
  // { icon: '🕐', label: 'Business Hours',value: 'Mon–Fri: 8am–6pm  |  Sat: 9am–1pm' },
]

export default function ContactDetails() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-1">Get in touch</h3>
        <p className="font-body text-brand-muted text-sm leading-relaxed">
          We aim to respond to all enquiries within 1–2 business days. For urgent support, please
          contact{' '}
          <a href="https://www.lifeline.org.au" target="_blank" rel="noopener noreferrer" className="text-brand-sage-dark underline">
            Lifeline on 13 11 14
          </a>
          .
        </p>
      </div>

      <ul className="space-y-4">
        {details.map(({ icon, label, value }) => (
          <li key={label} className="flex gap-3 items-start">
            <span className="text-xl mt-0.5">{icon}</span>
            <div>
              <p className="font-body text-xs font-semibold text-brand-terra uppercase tracking-wide mb-0.5">{label}</p>
              <p className="font-body text-brand-charcoal text-sm">{value}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
