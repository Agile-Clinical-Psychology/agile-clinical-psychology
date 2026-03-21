import { useState } from 'react'

// Replace with your actual Halaxy public booking URL from your Halaxy practice profile
// Format: https://www.halaxy.com/book/[practice-name]/[location-id]
const HALAXY_BOOKING_URL = 'https://www.halaxy.com/book/agile-clinical-psychology'

export default function HalaxyWidget() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="w-full rounded-3xl overflow-hidden shadow-warm border border-brand-sand bg-brand-cream">
      {!loaded && (
        <div className="flex flex-col items-center justify-center h-64 text-brand-muted font-body gap-3">
          <div className="w-8 h-8 border-2 border-brand-sage border-t-transparent rounded-full animate-spin" />
          <p className="text-sm">Loading booking calendar…</p>
        </div>
      )}
      <iframe
        src={HALAXY_BOOKING_URL}
        title="Online Booking — Agile Clinical Psychology"
        className={`w-full min-h-[700px] border-0 transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0 h-0'
        }`}
        onLoad={() => setLoaded(true)}
        allow="payment"
        loading="lazy"
      />
    </div>
  )
}
