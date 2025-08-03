import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-foreground mb-6">
            Velkommen til{' '}
            <span className="bg-gradient-gold bg-clip-text text-transparent">Artemova's Beauty</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Din profesjonelle skjønnhetssalong i Oslo. Vi tilbyr eksklusive 
            behandlinger som vippebøy, PMU og laminering i en varm og 
            profesjonell atmosfære.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent-dark text-background hover:bg-accent-light transition">
              Book behandling
            </Button>
            <Button className="border border-accent-dark text-foreground hover:bg-accent-dark hover:text-background transition">
              Se våre tjenester
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
