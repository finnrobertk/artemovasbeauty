import Link from 'next/link'
import type { Metadata } from 'next'
import { client } from '../../../../../sanity/lib/client'
import { treatmentSubcategoryBySlugQuery } from '../../../../../sanity/lib/queries'
import type { SanityImage } from '../../../../../sanity/lib/types'
import { TreatmentDetail, type Treatment } from '@/components/sections/TreatmentDetail'

export const revalidate = 60

type Params = { params: Promise<{ category: string; subcategory: string }> }

type Subcategory = {
  _id: string
  title: string
  slug?: { current: string }
  image?: SanityImage
  category?: { title?: string; slug?: { current: string } }
  treatment?: Treatment
}

async function getSubcategory(slug: string): Promise<Subcategory | null> {
  const data = await client.fetch<Subcategory | null>(treatmentSubcategoryBySlugQuery, { slug })
  return data || null
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { subcategory } = await params
  const sub = await getSubcategory(subcategory)
  if (!sub) return { title: 'Behandling', description: 'Underkategori finnes ikke.' }
  const baseTitle = sub.title
  const desc = sub.treatment?.description || `Les mer om ${sub.title} hos Artemova's Beauty i Oslo.`
  return { title: baseTitle, description: desc }
}

export default async function SubcategoryPage({ params }: Params) {
  const { category, subcategory } = await params
  const sub = await getSubcategory(subcategory)

  if (!sub) {
    return (
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold">Underkategori finnes ikke</h1>
        <p className="mt-2 text-muted-foreground">Prøv igjen senere eller gå tilbake.</p>
        <div className="mt-6 text-sm"><Link href={`/behandlinger/${category}`}>Til kategori</Link></div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-semibold">{sub.title}</h1>
          {sub.category?.title ? (
            <p className="mt-2 text-muted-foreground">Kategori: {sub.category.title}</p>
          ) : null}
        </header>

        {sub.treatment ? (
          <TreatmentDetail treatment={sub.treatment} />
        ) : (
          <p className="text-muted-foreground">Behandling tilknyttet denne underkategorien er ikke publisert ennå.</p>
        )}

        <div className="mt-8 text-sm">
          <Link href={`/behandlinger/${category}`}>← Tilbake til {sub.category?.title || 'kategori'}</Link>
        </div>
      </section>
    </main>
  )
}
