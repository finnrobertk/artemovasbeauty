import { Button } from '../components/ui/button'
import Link from 'next/link'

export default function HomePage() {
  const bookingUrl = '/booking'
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-foreground mb-4">
            Naturlig skjønnhet – med presisjon
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Eksklusive behandlinger i hjertet av Oslo
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={bookingUrl} className="inline-flex">
              <Button className="bg-accent-dark text-background hover:bg-accent-light transition">
                Book time
              </Button>
            </Link>
            <Link href="/behandlinger" className="inline-flex">
              <Button variant="outline" className="border border-accent-dark text-foreground hover:bg-accent-dark hover:text-background transition">
                Se våre tjenester
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
