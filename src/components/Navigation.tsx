'use client';

import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navigation = [
  { name: 'Hjem', href: '/' },
  { name: 'Behandlinger', href: '/behandlinger' },
  // { name: 'Kurs', href: '/kurs' },
  // { name: 'Produkter', href: '/produkter' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={300}
                  height={100}
                  priority
              />
            </Link>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-8 ml-8">
            {/* Desktop Book Time Button */}
            <Link
              href="/booking"
              className="btn-primary text-sm"
            >
              Book time
            </Link>

            {/* Menu Items */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium relative ${
                  pathname === item.href
                    ? 'text-secondary'
                    : 'text-white hover:text-secondary transition-colors duration-200'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-primary/80 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium relative ${
                  pathname === item.href
                    ? 'text-secondary'
                    : 'text-white hover:text-secondary transition-colors duration-200'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary" />
                )}
              </Link>
            ))}
            <Link
              href="/booking"
              className="block px-3 py-2 text-base font-medium bg-secondary text-white rounded-md text-center mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book time
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 