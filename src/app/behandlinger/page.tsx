import Image from 'next/image'
import Link from 'next/link'
import { client } from '../../../sanity/lib/client'
import { treatmentCategoriesQuery } from '../../../sanity/lib/queries'
import { TreatmentCategoriesGrid } from '@/components/sections/TreatmentCategoriesGrid'

const items: Array<{
  title: string
  image: string
  alt: string
  href?: string
}> = [
  { title: 'Vippebøy', image: '/images/eyelashes.jpg', alt: 'Vippebøy – naturlig løft av vippene' },
  { title: 'PMU Lepper', image: '/images/pmu-lepper.jpg', alt: 'PMU Lepper – fremhever leppenes form og farge', href: '/behandlinger/pmu-lepper' },
  { title: 'Brynforming', image: '/images/hennabryn.jpg', alt: 'Brynforming – form og farge på bryn' },
  { title: 'Lash Extensions', image: '/images/lash-extensions-oversikt.jpg', alt: 'Lash Extensions – ulike stiler og lengder', href: '/behandlinger/lash-extensions' },
  { title: 'PMU Farger', image: '/images/pmu-lepper-oversikt-farger.jpg', alt: 'PMU Lepper – fargekart og resultater' },
  { title: 'Microblading', image: '/images/microblading-oversikt.jpg', alt: 'Microblading – form og hårstråeffekt', href: '/behandlinger/microblading' },
]

export const revalidate = 60

export default async function BehandlingerPage() {
  const categories = await client.fetch(treatmentCategoriesQuery)

  if (!categories || categories.length === 0) {
    return (
      <main className="container mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-gold">Behandlinger</h1>
          <p className="text-muted-foreground mt-2">Kategorier kommer snart. Prøv igjen senere.</p>
        </header>
        <div className="text-sm">
          <Link href="/">Til forsiden</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-semibold">Behandlinger</h1>
        <p className="mt-2 text-muted-foreground">Utforsk våre behandlinger. Flere detaljer kommer snart.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Card = (
              <div className="group overflow-hidden rounded-lg border bg-muted hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                </div>
              </div>
            )
            return item.href ? (
              <Link key={item.title} href={item.href} className="block">
                {Card}
              </Link>
            ) : (
              <div key={item.title}>{Card}</div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
