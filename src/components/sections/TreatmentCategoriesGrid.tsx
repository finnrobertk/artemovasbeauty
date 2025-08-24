import { CategoryCard } from '../ui/CategoryCard'
import type { SanityImage } from '../../../sanity/lib/types'

type Category = {
  _id: string
  title: string
  slug?: { current: string }
  image?: SanityImage
  description?: string
  hasSubcategories?: boolean
}

export function TreatmentCategoriesGrid({ categories }: { categories: Category[] }) {
  return (
    <section>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <CategoryCard key={cat._id} category={cat} />)
        )}
      </div>
    </section>
  )
}
