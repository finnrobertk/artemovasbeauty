import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Artemova\'s Beauty - Skjønnhetssalong i Oslo',
  description: 'Profesjonell skjønnhetssalong som tilbyr vippebøy, PMU og tannbleking. Book din behandling i dag.',
  keywords: ['skjønnhetssalong', 'vippebøy', 'PMU', 'tannbleking', 'Oslo', 'beauty salon'],
  authors: [{ name: 'Artemova\'s Beauty' }],
  openGraph: {
    title: 'Artemova\'s Beauty - Skjønnhetssalong i Oslo',
    description: 'Profesjonell skjønnhetssalong som tilbyr vippebøy, PMU og tannbleking.',
    type: 'website',
    locale: 'nb_NO',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no" className="scroll-smooth">
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
}
