export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="container-max section-padding py-20">
        <div className="text-center">
          <h1 className="heading-1 mb-6">
            Velkommen til{' '}
            <span className="text-beauty-pink-500">Artemova's Beauty</span>
          </h1>
          <p className="body-large max-w-2xl mx-auto mb-8">
            Din profesjonelle skjønnhetssalong i Oslo. Vi tilbyr eksklusive behandlinger 
            som vippebøy, PMU og tannbleking i en varm og profesjonell atmosfære.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Book behandling
            </button>
            <button className="btn-secondary">
              Se våre tjenester
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
