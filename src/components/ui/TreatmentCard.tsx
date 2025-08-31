import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../../../sanity/lib/client'
import type { SanityImage } from '../../../sanity/lib/types'

export type TreatmentItem = {
  _id: string
  title: string
  slug?: { current: string }
  description?: string
  priceFrom?: number
  duration?: string
  afterImage?: SanityImage
}

export function TreatmentCard({ treatment }: { treatment: TreatmentItem }) {
  const href = treatment.slug?.current ? `/behandlinger/${treatment.slug.current}` : '#'
  const hasImage = Boolean(treatment.afterImage)

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-lg border bg-card hover:shadow-md transition-shadow"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
        {hasImage ? (
          <Image
            src={urlFor(treatment.afterImage).width(800).height(600).fit('crop').url()}
            alt={treatment.title}
            width={800}
            height={600}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground">
            Ingen bilde
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium">{treatment.title}</h3>
        <div className="mt-1 flex flex-wrap gap-3 text-sm text-muted-foreground">
          {typeof treatment.priceFrom === 'number' ? (
            <span>Fra {Math.round(treatment.priceFrom)} kr</span>
          ) : null}
          {treatment.duration ? <span>{treatment.duration}</span> : null}
        </div>
        {treatment.description ? (
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{treatment.description}</p>
        ) : null}
      </div>
    </Link>
  )
}
