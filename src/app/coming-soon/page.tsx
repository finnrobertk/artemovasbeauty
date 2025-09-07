import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kommer snart | Naturlig Fake',
  robots: { index: false, follow: false },
}

export default function ComingSoonPage() {
  return (
    <main className="min-h-[70vh] container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">Naturlig Fake</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Nettsiden kommer snart</h1>
        <p className="mt-4 text-muted-foreground">
          Vi jobber med en ny opplevelse. Kom tilbake snart, eller følg oss på sosiale medier for oppdateringer.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/" className="rounded-md border px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
            Oppdater
          </Link>
          <Link
            href="/?key=demo123"
            className="rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            Forhåndsvis (demo)
          </Link>
        </div>

        <div className="mt-8 text-xs text-muted-foreground">
          Denne siden er midlertidig og vil ikke indekseres av søkemotorer.
        </div>
      </div>
    </main>
  )
}
