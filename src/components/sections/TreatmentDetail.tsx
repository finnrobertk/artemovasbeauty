import Image from 'next/image'
import { urlFor } from '../../../sanity/lib/client'
import { RichText } from '../ui/RichText'
import type { PortableTextBlock } from '@portabletext/types'
import type { SanityImage } from '../../../sanity/lib/types'

export type Treatment = {
  _id: string
  title: string
  slug?: { current: string }
  description?: string
  content?: PortableTextBlock[]
  beforeCare?: PortableTextBlock[]
  aftercare?: PortableTextBlock[]
  beforeImage?: SanityImage
  afterImage?: SanityImage
  priceFrom?: number
  duration?: string
}

export function TreatmentDetail({ treatment }: { treatment: Treatment }) {
  const hasBefore = Boolean(treatment.beforeImage)
  const hasAfter = Boolean(treatment.afterImage)

  return (
    <article className="grid gap-8 lg:grid-cols-5">
      <div className="lg:col-span-3 space-y-6">
        {(hasBefore || hasAfter) && (
          <div className="grid gap-4 sm:grid-cols-2">
            {hasBefore && (
              <figure className="overflow-hidden rounded-lg border">
                <Image
                  src={urlFor(treatment.beforeImage).width(1000).height(750).fit('crop').url()}
                  alt={treatment.beforeImage?.alt || `${treatment.title} før`}
                  width={1000}
                  height={750}
                  className="h-auto w-full object-cover"
                />
                <figcaption className="px-3 py-2 text-xs text-muted-foreground">Før</figcaption>
              </figure>
            )}
            {hasAfter && (
              <figure className="overflow-hidden rounded-lg border">
                <Image
                  src={urlFor(treatment.afterImage).width(1000).height(750).fit('crop').url()}
                  alt={treatment.afterImage?.alt || `${treatment.title} etter`}
                  width={1000}
                  height={750}
                  className="h-auto w-full object-cover"
                />
                <figcaption className="px-3 py-2 text-xs text-muted-foreground">Etter</figcaption>
              </figure>
            )}
          </div>
        )}

        {treatment.description ? (
          <p className="text-base text-muted-foreground leading-relaxed">{treatment.description}</p>
        ) : null}

        {treatment.content ? (
          <section>
            <RichText value={treatment.content} />
          </section>
        ) : null}
      </div>

      <aside className="lg:col-span-2 space-y-6">
        <div className="rounded-lg border p-5">
          <h3 className="text-lg font-semibold">Informasjon</h3>
          <div className="mt-3 space-y-2 text-sm text-muted-foreground">
            {typeof treatment.priceFrom === 'number' && (
              <div>
                <span className="font-medium text-foreground">Pris:</span> Fra {Math.round(treatment.priceFrom)} kr
              </div>
            )}
            {treatment.duration && (
              <div>
                <span className="font-medium text-foreground">Varighet:</span> {treatment.duration}
              </div>
            )}
          </div>
        </div>

        {treatment.beforeCare ? (
          <div className="rounded-lg border p-5">
            <h3 className="text-lg font-semibold">Forberedelser</h3>
            <div className="mt-3">
              <RichText value={treatment.beforeCare} />
            </div>
          </div>
        ) : null}

        {treatment.aftercare ? (
          <div className="rounded-lg border p-5">
            <h3 className="text-lg font-semibold">Etterbehandling</h3>
            <div className="mt-3">
              <RichText value={treatment.aftercare} />
            </div>
          </div>
        ) : null}
      </aside>
    </article>
  )
}
