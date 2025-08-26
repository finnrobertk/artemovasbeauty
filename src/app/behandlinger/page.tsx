import Link from 'next/link'
import { client } from '../../../sanity/lib/client'
import { treatmentCategoriesQuery } from '../../../sanity/lib/queries'
import { TreatmentCategoriesGrid } from '@/components/sections/TreatmentCategoriesGrid'

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
    <main className="container mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-gold">Behandlinger</h1>
        <p className="text-muted-foreground mt-2">Velg en kategori for å se tilgjengelige behandlinger.</p>
      </header>
      <TreatmentCategoriesGrid categories={categories} />
    </main>
  )
}
