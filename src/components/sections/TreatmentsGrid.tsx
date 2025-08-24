import { TreatmentCard } from '../ui/TreatmentCard'
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

export function TreatmentsGrid({ treatments }: { treatments: TreatmentItem[] }) {
  return (
    <section>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {treatments.map((t) => (
          <TreatmentCard key={t._id} treatment={t} />
        ))}
      </div>
    </section>
  )
}
