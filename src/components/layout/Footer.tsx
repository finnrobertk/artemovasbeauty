import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold tracking-wide">Naturlig Fake</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Naturlig skjønnhet – med presisjon.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium">Navigasjon</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-foreground">Hjem</Link></li>
            <li><Link href="/behandlinger" className="hover:text-foreground">Behandlinger</Link></li>
            <li><Link href="/galleri" className="hover:text-foreground">Galleri</Link></li>
            <li><Link href="/om-oss" className="hover:text-foreground">Om oss</Link></li>
            <li><Link href="/kontakt" className="hover:text-foreground">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium">Kontakt</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>E-post: E‑post kommer snart</li>
            <li>Adresse: Munkedamsveien 72B, 0270 Oslo</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Naturlig Fake. Alle rettigheter forbeholdt.
      </div>
    </footer>
  )
}
