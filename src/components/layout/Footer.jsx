import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white/80 font-body">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <p className="font-heading text-lg font-semibold text-white mb-2">
            Agile Clinical<span className="text-brand-terra-light"> Psychology</span>
          </p>
          <p className="text-sm leading-relaxed text-white/60">
            Compassionate, evidence-based psychological care for individuals, couples, and families.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">Navigate</p>
          <ul className="space-y-2 text-sm">
            {[['/', 'Home'], ['/services', 'Services'], ['/about', 'About'], ['/contact', 'Contact'], ['/book', 'Book Online']].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-white transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">Contact</p>
          <ul className="space-y-2 text-sm text-white/60">
            <li>📍 123 Placeholder Street, Sydney NSW 2000</li>
            <li>📞 (02) 1234 5678</li>
            <li>✉️ hello@agileclinical.com.au</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
        <p>© {new Date().getFullYear()} Agile Clinical Psychology. All rights reserved.</p>
        <p>AHPRA Registered Psychologist</p>
      </div>
    </footer>
  )
}
