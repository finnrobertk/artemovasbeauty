import { client } from '../../../sanity/lib/client'
import { treatmentCategoriesQuery } from '../../../sanity/lib/queries'
import type { SanityImage } from '../../../sanity/lib/types'
import { CategoryCard } from '@/components/ui/CategoryCard'
import type { Metadata } from 'next'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Behandlinger hos Naturlig Fake",
    description: 'Utforsk vårt utvalg av profesjonelle skjønnhetsbehandlinger innen vipper, PMU og bryn.',
  }
}

export default async function BehandlingerPage() {
  const categories = await client.fetch<Array<{
    _id: string
    title: string
    slug?: { current: string }
    image?: SanityImage
    description?: string
    hasSubcategories?: boolean
  }>>(treatmentCategoriesQuery)
  const guideCategories = (categories || []).filter((c) => c?.hasSubcategories)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-semibold">Behandlinger</h1>
        <p className="mt-2 text-muted-foreground">Utforsk våre behandlinger. Flere detaljer kommer snart.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guideCategories.length > 0 ? (
            guideCategories.map((cat) => <CategoryCard key={cat._id} category={cat} />)
          ) : (
            <p className="text-muted-foreground">Kategorier kommer snart.</p>
          )}
        </div>
      </section>
    </main>
  )
}
