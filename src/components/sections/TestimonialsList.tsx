import Image from 'next/image'
import { urlFor } from '../../../sanity/lib/client'

export type Testimonial = {
  _id: string
  name?: string
  review?: string
  rating?: number
  image?: any
  publishedAt?: string
}

export function TestimonialsList({ testimonials }: { testimonials: Testimonial[] }) {
  if (!testimonials?.length) return null
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold mb-4">Kundeomtaler</h2>
      <ul className="grid gap-4">
        {testimonials.map((t) => (
          <li key={t._id} className="rounded-lg border p-5">
            <div className="flex items-start gap-4">
              {t.image ? (
                <Image
                  src={urlFor(t.image).width(80).height(80).fit('crop').url()}
                  alt={t.name || 'Kunde'}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full object-cover"
                />
              ) : null}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-foreground">{t.name || 'Anonym'}</p>
                  {typeof t.rating === 'number' && (
                    <span className="text-sm text-muted-foreground">{t.rating} / 5</span>
                  )}
                </div>
                {t.publishedAt ? (
                  <p className="text-xs text-muted-foreground">{new Date(t.publishedAt).toLocaleDateString()}</p>
                ) : null}
                {t.review ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.review}</p>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
