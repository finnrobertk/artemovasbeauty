import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../components/ui/button'
import type { SanityImage } from '../../sanity/lib/types'
import { client } from '../../sanity/lib/client'
import { homepageQuery } from '../../sanity/lib/queries'
import { TreatmentCard } from '../components/ui/TreatmentCard'
import { TestimonialsList } from '../components/sections/TestimonialsList'

// Robots: noindex if COMING_SOON=true
import type { Metadata } from 'next'
export async function generateMetadata(): Promise<Metadata> {
  const COMING_SOON = process.env['COMING_SOON'] === 'true'
  return COMING_SOON
    ? { robots: { index: false, follow: false, nocache: true } }
    : {}
}

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
      afterImage?: SanityImage
    }[]
    featuredTestimonials: {
      _id: string
      name?: string
      review?: string
      rating?: number
      image?: SanityImage
      publishedAt?: string
    }[]
  }>(homepageQuery)

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/eyelashes.jpg"
            alt="Lash extensions påført – full-bredde hero fra Artemova's Beauty"
            fill
            priority
            className="object-cover brightness-50"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gold-text bg-clip-text text-transparent">
              Naturlig skjønnhet – med presisjon
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-2xl">
              Skjønnhetssalong i hjertet av Oslo med spesialister på vipper, PMU og bryn.
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
              Eva er lidenskapelig opptatt av skjønnhet og presisjon. Hun tilbyr behandlinger innen PMU, bryn og vipper –
              og er kjent for sin rolige og profesjonelle tilnærming. Hos Artemova’s Beauty får du personlig oppfølging og
              skreddersydde resultater.
            </p>
            {/* Placeholder for profesjonelt portrett senere */}
          </div>
        </div>
      </section>

      {/* Featured treatments */}
      <section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Våre mest populære behandlinger</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Lash Extensions */}
            <div className="group overflow-hidden rounded-lg border bg-muted hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                <Image
                  src="/images/eyelashes.jpg"
                  alt="Lash Extensions – skreddersydd vippeforlengelse"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">Lash Extensions</h3>
                <p className="mt-2 text-sm text-muted-foreground">Skreddersydd vippeforlengelse for et naturlig eller glamorøst blikk.</p>
              </div>
            </div>

            {/* PMU Lepper */}
            <div className="group overflow-hidden rounded-lg border bg-muted hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                <Image
                  src="/images/pmu-lepper.jpg"
                  alt="PMU Lepper – fremhever leppenes form og farge"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">PMU Lepper</h3>
                <p className="mt-2 text-sm text-muted-foreground">Permanent makeup som fremhever leppenes form og farge.</p>
              </div>
            </div>

            {/* Brynforming */}
            <div className="group overflow-hidden rounded-lg border bg-muted hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                <Image
                  src="/images/hennabryn.jpg"
                  alt="Brynforming – form, farge og strukturerte bryn"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">Brynforming</h3>
                <p className="mt-2 text-sm text-muted-foreground">Form, farge og strukturerte bryn med henna, laminering eller microblading.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behandlingsguide */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold">Utforsk behandlingene våre</h2>
        <p className="mt-2 text-muted-foreground">Se forskjellene og finn behandlingen som passer deg best</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Lash Extensions oversikt */}
          <Link
            href="/behandlinger/lash-extensions"
            className="group block overflow-hidden rounded-lg border bg-muted hover:shadow-md transition-shadow"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
              <Image
                src="/images/lash-extensions-oversikt.jpg"
                alt="Lash Extensions oversikt – ulike stiler og lengder"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium">Lash Extensions</h3>
            </div>
          </Link>

          {/* PMU Lepper oversikt */}
          <Link
            href="/behandlinger/pmu-lepper"
            className="group block overflow-hidden rounded-lg border bg-muted hover:shadow-md transition-shadow"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
              <Image
                src="/images/pmu-lepper-oversikt-farger.jpg"
                alt="PMU Lepper oversikt – fargekart og resultater"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium">PMU Lepper</h3>
            </div>
          </Link>

          {/* Microblading oversikt */}
          <Link
            href="/behandlinger/microblading"
            className="group block overflow-hidden rounded-lg border bg-muted hover:shadow-md transition-shadow"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
              <Image
                src="/images/microblading-oversikt.jpg"
                alt="Microblading oversikt – form og hårstråeffekt"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium">Microblading</h3>
            </div>
          </Link>
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
