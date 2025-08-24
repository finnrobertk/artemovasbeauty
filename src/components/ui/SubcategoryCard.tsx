import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../../../sanity/lib/client'

export type Subcategory = {
  _id: string
  title: string
  slug?: { current: string }
  image?: any
}

export function SubcategoryCard({
  subcategory,
  parentSlug,
}: {
  subcategory: Subcategory
  parentSlug: string
}) {
  const href = subcategory.slug?.current
    ? `/behandlinger/${parentSlug}/${subcategory.slug.current}`
    : '#'
  const hasImage = Boolean(subcategory.image)

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-lg border bg-card hover:shadow-md transition-shadow"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
        {hasImage ? (
          <Image
            src={urlFor(subcategory.image).width(800).height(600).fit('crop').url()}
            alt={subcategory.image?.alt || subcategory.title}
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
        <h3 className="text-lg font-medium">{subcategory.title}</h3>
      </div>
    </Link>
  )
}

