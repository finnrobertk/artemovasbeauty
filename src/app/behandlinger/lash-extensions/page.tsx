import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../../../components/ui/button'

export default function LashExtensionsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold">Lash Extensions</h1>
            <p className="mt-4 text-muted-foreground">
              Detaljert informasjon kommer snart. I mellomtiden kan du utforske behandlingsguiden og andre tjenester.
            </p>
            <div className="mt-6">
              <Link href="/behandlinger" className="inline-flex">
                <Button className="bg-gradient-gold hover:bg-gradient-gold-hover text-background font-medium shadow-md">
                  Se alle behandlinger
                </Button>
              </Link>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted border border-border">
            <Image
              src="/images/lash-extensions-oversikt.jpg"
              alt="Lash Extensions oversikt – ulike stiler og lengder"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              priority={false}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
