import Link from 'next/link'
import { client } from '../../../../sanity/lib/client'
import { treatmentBySlugQuery, testimonialsForTreatmentQuery } from '../../../../sanity/lib/queries'
import { TreatmentDetail } from '../../../components/sections/TreatmentDetail'
import { Breadcrumbs } from '../../../components/ui/Breadcrumbs'
import { TestimonialsList } from '../../../components/sections/TestimonialsList'

interface Params {
  params: Promise<{ slug: string }>
}

export const revalidate = 60

export default async function TreatmentPage({ params }: Params) {
  const { slug } = await params
  const treatment = await client.fetch(treatmentBySlugQuery, { slug })
  const testimonials = treatment
    ? await client.fetch(testimonialsForTreatmentQuery, { slug })
    : []

  if (!treatment) {
    return (
      <main className="container mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">Fant ikke behandlingen</h1>
          <p className="text-muted-foreground mt-2">Siden finnes ikke eller er ikke publisert.</p>
        </header>
        <div className="text-sm">
          <Link href="/behandlinger">← Til oversikt</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <header className="mb-8">
        <Breadcrumbs
          items={[
            { label: 'Behandlinger', href: '/behandlinger' },
            treatment.category?.slug?.current
              ? { label: treatment.category.title || 'Kategori', href: `/behandlinger/${treatment.category.slug.current}` }
              : { label: 'Kategori' },
            { label: treatment.title },
          ]}
        />
        <h1 className="text-3xl font-semibold tracking-tight">{treatment.title}</h1>
      </header>

      <TreatmentDetail treatment={treatment} />

      <TestimonialsList testimonials={testimonials} />

      <div className="mt-8 text-sm">
        <Link href="/behandlinger">← Til oversikt</Link>
      </div>
    </main>
  )
}
