import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { client, urlFor } from '../../../../sanity/lib/client'
import { treatmentCategoryBySlugQuery } from '../../../../sanity/lib/queries'
import type { SanityImage } from '../../../../sanity/lib/types'
import { TreatmentCard } from '@/components/ui/TreatmentCard'

export const revalidate = 60

type Params = { params: Promise<{ category: string }> }

type Subcategory = {
  _id: string
  title: string
  slug?: { current: string }
  image?: SanityImage
  treatment?: import('@/components/sections/TreatmentDetail').Treatment
}

type Category = {
  _id: string
  title: string
  slug?: { current: string }
  image?: SanityImage
  description?: string
  hasSubcategories?: boolean
  subcategories?: Subcategory[]
  treatments?: import('@/components/ui/TreatmentCard').TreatmentItem[]
}

async function getCategory(slug: string): Promise<Category | null> {
  const data = await client.fetch<Category | null>(treatmentCategoryBySlugQuery, { slug })
  return data || null
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category } = await params
  const cat = await getCategory(category)
  if (!cat) return { title: 'Behandlinger', description: 'Kategorier kommer snart.' }
  return {
    title: cat.title,
    description: cat.description || `Utforsk ${cat.title} hos Artemova's Beauty i Oslo.`,
  }
}

export default async function CategoryPage({ params }: Params) {
  const { category } = await params
  const cat = await getCategory(category)

  if (!cat) {
    return (
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold">Kategorien finnes ikke</h1>
        <p className="mt-2 text-muted-foreground">Prøv igjen senere eller gå tilbake.</p>
        <div className="mt-6 text-sm"><Link href="/behandlinger">Til alle behandlinger</Link></div>
      </main>
    )
  }

  const hasSubs = Boolean(cat.hasSubcategories)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-semibold">{cat.title}</h1>
          {cat.description ? (
            <p className="mt-2 text-muted-foreground">{cat.description}</p>
          ) : null}
        </header>

        {hasSubs ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(cat.subcategories || []).length > 0 ? (
              cat.subcategories!.map((sub) => {
                const href = sub.slug?.current ? `/behandlinger/${category}/${sub.slug.current}` : '#'
                return (
                  <Link key={sub._id} href={href} className="group block overflow-hidden rounded-lg border bg-card hover:shadow-md transition-shadow">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                      {sub.image ? (
                        <Image
                          src={urlFor(sub.image).width(800).height(600).fit('crop').url()}
                          alt={sub.image?.alt || sub.title}
                          width={800}
                          height={600}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-muted-foreground">Ingen bilde</div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium">{sub.title}</h3>
                    </div>
                  </Link>
                )
              })
            ) : (
              <p className="text-muted-foreground">Ingen underkategorier tilgjengelig.</p>
            )}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(cat.treatments || []).length > 0 ? (
              cat.treatments!.map((t) => <TreatmentCard key={t._id} treatment={t} />)
            ) : (
              <p className="text-muted-foreground">Ingen behandlinger tilgjengelig.</p>
            )}
          </div>
        )}
      </section>
    </main>
  )
}
