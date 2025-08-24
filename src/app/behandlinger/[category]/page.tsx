import Link from 'next/link'
import { client } from '../../../../sanity/lib/client'
import { treatmentCategoryBySlugQuery } from '../../../../sanity/lib/queries'
import { TreatmentSubcategoriesGrid } from '@/components/sections/TreatmentSubcategoriesGrid'
import { TreatmentsGrid } from '@/components/sections/TreatmentsGrid'
import { Breadcrumbs } from '../../../components/ui/Breadcrumbs'

interface Params {
  params: { category: string }
}

export const revalidate = 60

export default async function CategoryPage({ params }: Params) {
  const slug = params.category
  const category = await client.fetch(treatmentCategoryBySlugQuery, { slug })

  if (!category) {
    return (
      <main className="container mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">Fant ikke kategori</h1>
          <p className="text-muted-foreground mt-2">Kategorien finnes ikke eller er ikke publisert.</p>
        </header>
        <div className="text-sm">
          <Link href="/behandlinger">Tilbake til kategorier</Link>
        </div>
      </main>
    )
  }

  const title = category.title ?? 'Kategori'
  const hasSubs = Boolean(category.hasSubcategories)
  const subcategories = category.subcategories ?? []
  const treatments = category.treatments ?? []

  return (
    <main className="container mx-auto px-4 py-12">
      <header className="mb-8">
        <Breadcrumbs
          items={[
            { label: 'Behandlinger', href: '/behandlinger' },
            { label: title },
          ]}
        />
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        {category.description ? (
          <p className="text-muted-foreground mt-2">{category.description}</p>
        ) : null}
      </header>

      {hasSubs ? (
        subcategories.length > 0 ? (
          <TreatmentSubcategoriesGrid
            subcategories={subcategories}
            parentSlug={slug}
          />
        ) : (
          <EmptyState message="Ingen underkategorier publisert ennå." />
        )
      ) : treatments.length > 0 ? (
        <TreatmentsGrid treatments={treatments} />
      ) : (
        <EmptyState message="Ingen behandlinger i denne kategorien ennå." />
      )}

      <div className="mt-8 text-sm">
        <Link href="/behandlinger">← Tilbake til kategorier</Link>
      </div>
    </main>
  )
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="rounded-lg border bg-card p-8 text-center text-muted-foreground">
      {message}
    </div>
  )
}
