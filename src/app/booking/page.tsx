'use client'

import { useEffect } from 'react'

export default function BookingPage() {
  useEffect(() => {
    // Dynamically load iframe-resizer script
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/2.8.3/iframeResizer.min.js'
    script.async = true
    script.onload = () => {
      if (typeof iFrameResize === 'function') {
        iFrameResize({ checkOrigin: false }, '#reservationIframe58539')
      }
    }
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Bestill time</h1>
      <p className="mt-2 text-muted-foreground">Velg behandling og tidspunkt som passer for deg.</p>

      <div className="mt-8">
        <iframe
          width="100%"
          id="reservationIframe58539"
          src="https://bestill.timma.no/reservation/artemovasbeauty"
          frameBorder={0}
          // Sensible min height on first paint; iframe-resizer will adjust
          style={{ minHeight: '80vh' }}
        />
      </div>
    </main>
  )
}
