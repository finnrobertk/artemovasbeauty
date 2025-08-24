import { SubcategoryCard } from '@/components/ui/SubcategoryCard'

export type Subcategory = {
  _id: string
  title: string
  slug?: { current: string }
  image?: any
  treatment?: {
    _id: string
    title: string
    slug?: { current: string }
    description?: string
    priceFrom?: number
    duration?: string
    afterImage?: any
  } | null
}

export function TreatmentSubcategoriesGrid({
  subcategories,
  parentSlug,
}: {
  subcategories: Subcategory[]
  parentSlug: string
}) {
  return (
    <section>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {subcategories.map((sub) => (
          <SubcategoryCard key={sub._id} subcategory={sub} parentSlug={parentSlug} />
        ))}
      </div>
    </section>
  )
}
