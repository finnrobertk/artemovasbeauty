import type { Metadata } from 'next'
import './globals.css'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

export const metadata: Metadata = {
  title: 'Naturlig Fake - Skjønnhetssalong i Oslo',
  description: 'Profesjonell skjønnhetssalong som tilbyr vippebøy, PMU og tannbleking. Book din behandling i dag.',
  keywords: ['skjønnhetssalong', 'vippebøy', 'PMU', 'tannbleking', 'Oslo', 'beauty salon'],
  authors: [{ name: 'Naturlig Fake' }],
  openGraph: {
    title: 'Naturlig Fake - Skjønnhetssalong i Oslo',
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
      <body className="min-h-screen bg-background">
        <Header />
        <div className="min-h-[calc(100vh-160px)]">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
