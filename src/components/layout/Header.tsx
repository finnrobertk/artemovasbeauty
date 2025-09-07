'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const NAV = [
  { href: '/', label: 'Hjem' },
  { href: '/booking', label: 'Booking' },
  { href: '/behandlinger', label: 'Behandlinger' },
  { href: '/galleri', label: 'Galleri' },
  { href: '/om-oss', label: 'Om oss' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const bookingUrl = '/booking'

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Naturlig Fake">
            <Image
              src="/Logo-uten-tekst.svg"
              alt="Naturlig Fake"
              width={160}
              height={32}
              priority
              className="h-8 w-auto md:h-9 lg:h-10"
            />
            <span className="hidden sm:inline font-sans font-normal text-[#F2EAB8] text-xl md:text-2xl">Naturlig Fake</span>
            <span className="sr-only">Naturlig Fake</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 ml-4 md:ml-8">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground whitespace-nowrap">
                {item.label}
              </Link>
            ))}
            <Link
              href={bookingUrl}
              className="inline-flex items-center rounded-md bg-gradient-gold hover:bg-gradient-gold-hover px-4 py-2 text-sm font-medium text-background shadow-md whitespace-nowrap"
            >
              Book time
            </Link>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              href={bookingUrl}
              className="inline-flex items-center rounded-md bg-gradient-gold hover:bg-gradient-gold-hover px-3 py-2 text-sm font-medium text-background shadow-md whitespace-nowrap"
            >
              Book time
            </Link>
            <button
              aria-label="Meny"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-accent"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="i-[hamburger]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t py-3">
            <nav className="flex flex-col gap-2">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-2 py-2 text-sm hover:bg-accent"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
