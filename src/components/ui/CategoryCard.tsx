import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../../../sanity/lib/client'
import type { SanityImage } from '../../../sanity/lib/types'

type Category = {
  _id: string
  title: string
  slug?: { current: string }
  image?: SanityImage
  description?: string
}

export function CategoryCard({ category }: { category: Category }) {
  const href = category.slug?.current ? `/behandlinger/${category.slug.current}` : '#'
  const hasImage = Boolean(category.image)

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-lg border bg-card hover:shadow-md transition-shadow"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
        {hasImage ? (
          <Image
            src={urlFor(category.image).width(800).height(600).fit('crop').url()}
            alt={category.image?.alt || category.title}
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
        <h3 className="text-lg font-medium">{category.title}</h3>
        {category.description ? (
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{category.description}</p>
        ) : null}
      </div>
    </Link>
  )
}
