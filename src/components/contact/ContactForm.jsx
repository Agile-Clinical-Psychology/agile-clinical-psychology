import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import Button from '../ui/Button'

const inputClass =
  'w-full rounded-xl border border-brand-sand bg-brand-beige px-4 pr-8 py-3 font-body text-brand-charcoal placeholder-brand-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-sage transition text-sm'

const SERVICE_OPTIONS = [
  'Individual Therapy',
  'Couples Therapy',
  'Child & Adolescent Therapy',
  'Psychological Assessment',
  'General Enquiry',
]

function ServiceSelect({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`${inputClass} flex items-center justify-between text-left ${!value ? 'text-brand-muted/60' : ''}`}
      >
        <span>{value || 'Select a service...'}</span>
        <svg className={`w-4 h-4 ml-2 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-brand-beige border border-brand-sand rounded-xl shadow-card overflow-hidden">
          {SERVICE_OPTIONS.map((opt) => (
            <li
              key={opt}
              onMouseDown={() => { onChange(opt); setOpen(false) }}
              className={`px-4 py-3 font-body text-sm cursor-pointer hover:bg-brand-sage/10 transition-colors ${value === opt ? 'text-brand-sage-dark font-semibold' : 'text-brand-charcoal'}`}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [reason, setReason] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const data = Object.fromEntries(new FormData(e.target))
    data.reason = reason
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-brand-sage/10 border border-brand-sage p-8 text-center">
        <p className="font-heading text-xl text-brand-sage-dark mb-2">Thank you for reaching out.</p>
        <p className="font-body text-brand-muted text-sm">We'll be in touch within 1–2 business days.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-body text-sm font-medium text-brand-charcoal mb-1">
            Full Name <span className="text-brand-terra">*</span>
          </label>
          <input name="name" required className={inputClass} placeholder="Jane Smith" />
        </div>
        <div>
          <label className="block font-body text-sm font-medium text-brand-charcoal mb-1">
            Email <span className="text-brand-terra">*</span>
          </label>
          <input name="email" type="email" required className={inputClass} placeholder="jane@example.com" />
        </div>
      </div>

      <div>
        <label className="block font-body text-sm font-medium text-brand-charcoal mb-1">
          Phone <span className="text-brand-muted text-xs">(optional)</span>
        </label>
        <input name="phone" type="tel" className={inputClass} placeholder="04xx xxx xxx" />
      </div>

      <div>
        <label className="block font-body text-sm font-medium text-brand-charcoal mb-1">
          How can we help? <span className="text-brand-terra">*</span>
        </label>
        <ServiceSelect value={reason} onChange={setReason} />
        {/* Hidden input so form validation works */}
        <input type="hidden" name="reason" value={reason} required />
      </div>

      <div>
        <label className="block font-body text-sm font-medium text-brand-charcoal mb-1">
          Message <span className="text-brand-terra">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Tell us a little about what you're looking for..."
        />
      </div>

      {status === 'error' && (
        <p className="font-body text-sm text-red-600">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <Button type="submit" variant="primary" size="md" className="w-full" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </Button>

      <p className="font-body text-xs text-brand-muted text-center">
        This form is confidential. We respond within 1–2 business days.
      </p>
    </form>
  )
}
