import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../components/ui/button'
import { client } from '../../sanity/lib/client'
import { homepageQuery } from '../../sanity/lib/queries'
import { TreatmentCard } from '../components/ui/TreatmentCard'
import { TestimonialsList } from '../components/sections/TestimonialsList'

// Robots: noindex if COMING_SOON=true
import type { Metadata } from 'next'
const COMING_SOON = process.env.COMING_SOON === 'true'
export const metadata: Metadata = COMING_SOON
  ? { robots: { index: false, follow: false, nocache: true } }
  : {}

function getBookingUrl() {
  return process.env.NEXT_PUBLIC_BOOKING_URL || '/kontakt'
}

export default async function HomePage() {
  const bookingUrl = getBookingUrl()
  const data = await client.fetch<{
    featuredTreatments: {
      _id: string
      title: string
      slug?: { current: string }
      description?: string
      priceFrom?: number
      duration?: string
      afterImage?: any
    }[]
    featuredTestimonials: {
      _id: string
      name?: string
      review?: string
      rating?: number
      image?: any
      publishedAt?: string
    }[]
  }>(homepageQuery)

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* Temporary stock image background (Glamour portrett) */}
          <Image
            src="/lash-extensions.jpg"
            alt="Artemova's Beauty hero"
            fill
            priority
            className="object-cover brightness-50"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gold-text bg-clip-text text-transparent">
              Naturlig skjønnhet – med presisjon
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-2xl">
              Skjønnhetssalong i hjertet av Oslo med spesialister på vipper, PMU og laminering.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href={bookingUrl} className="inline-flex">
                <Button className="bg-gradient-gold hover:bg-gradient-gold-hover text-background font-medium shadow-md">
                  Book time
                </Button>
              </Link>
              <Link href="/behandlinger" className="inline-flex">
                <Button variant="outline" className="border-gold text-foreground hover:bg-gold/10">
                  Se våre behandlinger
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Eva intro placeholder */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/3] rounded-xl bg-card/60 border border-border" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Møt Eva – din skjønnhetsekspert</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Integer at sem vel augue posuere feugiat. Suspendisse
              potenti. Donec a risus sed lorem pulvinar accumsan.
            </p>
            {/* Klargjort for bilde + kort bio i to kolonner. Bildet til venstre er placeholder */}
          </div>
        </div>
      </section>

      {/* Featured treatments */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/lash-extensions.jpg"
            alt="Behandlinger bakgrunn"
            fill
            priority={false}
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Våre mest populære behandlinger</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data?.featuredTreatments?.map((t) => (
              <TreatmentCard key={t._id} treatment={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Hva kundene våre sier</h2>
        <TestimonialsList testimonials={data?.featuredTestimonials || []} />
      </section>

      {/* Booking section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-xl border border-border bg-card p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold">Klar for å bestille?</h3>
          <p className="mt-2 text-muted-foreground">Sikre deg time hos våre spesialister i dag.</p>
          <div className="mt-6">
            <Link href={bookingUrl} className="inline-flex">
              <Button className="bg-gradient-gold hover:bg-gradient-gold-hover text-background font-medium shadow-md">
                Bestill time
              </Button>
            </Link>
          </div>
          {/* Reservasjon: Timma iframe integrasjon kommer her senere */}
          {false && (
            <div className="mt-8">
              {/* <iframe src="https://timma.no/..." className="w-full h-[700px] rounded-lg" /> */}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
