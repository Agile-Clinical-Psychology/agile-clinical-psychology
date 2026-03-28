import { useState } from 'react'

export default function HalaxyWidget() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative w-full rounded-3xl overflow-hidden shadow-warm border border-brand-sand bg-brand-cream">
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-muted font-body gap-3 bg-brand-cream z-10">
          <div className="w-8 h-8 border-2 border-brand-sage border-t-transparent rounded-full animate-spin" />
          <p className="text-sm">Loading booking calendar…</p>
        </div>
      )}
      <iframe
        src="https://www.halaxy.com/book/widget/psychologist/mr-roderick-gawthrop/1771051/1354981"
        allow="payment"
        scroll="auto"
        style={{ height: '1200px' }}
        className={`w-full border-0 transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setTimeout(() => setLoaded(true), 1000)}
      />
    </div>
  )
}
