import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import Button from '../ui/Button'

const links = [
  { to: '/',         label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about',    label: 'About' },
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-brand-cream backdrop-blur-md border-b border-brand-sand relative">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Agile Clinical Psychology logo" className="h-[50px] w-[50px] object-contain" />
          <span className="font-heading text-xl font-semibold text-brand-sage-dark leading-tight">
            Agile Clinical<br className="hidden sm:block" />
            <span className="text-brand-terra"> Psychology</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `font-body text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-brand-sage-dark'
                    : 'text-brand-charcoal hover:text-brand-sage-dark'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Button to="/book" variant="primary" size="sm">
            Book Now
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-xl text-brand-charcoal hover:bg-brand-beige transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-current mb-1.5 transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current mb-1.5 transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 z-50 bg-brand-cream border-t border-brand-sand px-6 py-4 flex flex-col gap-4 shadow-card">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-body font-medium py-1 ${isActive ? 'text-brand-sage-dark' : 'text-brand-charcoal'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Button to="/book" variant="primary" size="sm" className="w-fit" onClick={() => setOpen(false)}>
            Book Now
          </Button>
        </div>
      )}
    </header>
  )
}
