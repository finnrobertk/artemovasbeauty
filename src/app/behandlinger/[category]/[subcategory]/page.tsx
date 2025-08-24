import Link from 'next/link'
import Image from 'next/image'
import { client } from '../../../../../sanity/lib/client'
import { treatmentSubcategoryBySlugQuery, treatmentBySlugQuery } from '../../../../../sanity/lib/queries'
import { TreatmentDetail } from '../../../../components/sections/TreatmentDetail'
import { urlFor } from '../../../../../sanity/lib/client'
import { Breadcrumbs } from '../../../../components/ui/Breadcrumbs'

interface Params {
  params: { category: string; subcategory: string }
}

export const revalidate = 60

export default async function SubcategoryPage({ params }: Params) {
  const { subcategory } = params
  const sub = await client.fetch(treatmentSubcategoryBySlugQuery, { slug: subcategory })

  if (!sub) {
    return (
      <main className="container mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">Fant ikke underkategori</h1>
          <p className="text-muted-foreground mt-2">Siden finnes ikke eller er ikke publisert.</p>
        </header>
        <div className="text-sm">
          <Link href={`/behandlinger/${params.category}`}>Tilbake til {params.category}</Link>
        </div>
      </main>
    )
  }

  const hasImage = Boolean(sub.image)
  let treatment = sub.treatment
  // Hvis vi bare har en referanse/slim behandling, hent full behandling via slug
  if (treatment?.slug?.current) {
    const full = await client.fetch(treatmentBySlugQuery, { slug: treatment.slug.current })
    treatment = full || treatment
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <header className="mb-8">
        <Breadcrumbs
          items={[
            { label: 'Behandlinger', href: '/behandlinger' },
            sub.category?.slug?.current
              ? { label: sub.category.title || 'Kategori', href: `/behandlinger/${sub.category.slug.current}` }
              : { label: 'Kategori' },
            { label: sub.title },
          ]}
        />
        <h1 className="text-3xl font-semibold tracking-tight">{sub.title}</h1>
        {hasImage ? (
          <div className="mt-6 overflow-hidden rounded-lg border">
            <Image
              src={urlFor(sub.image).width(1200).height(600).fit('crop').url()}
              alt={sub.image?.alt || sub.title}
              width={1200}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
        ) : null}
      </header>

      {treatment ? (
        <TreatmentDetail treatment={treatment} />
      ) : (
        <EmptyState message="Ingen tilknyttet behandling ennå." />
      )}

      <div className="mt-8 text-sm">
        <Link href={`/behandlinger/${params.category}`}>← Tilbake til {params.category}</Link>
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
