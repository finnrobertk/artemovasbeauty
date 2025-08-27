import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const BYPASS_KEY = 'demo123'
const COOKIE_NAME = 'ab_preview_access'

export function middleware(req: NextRequest) {
  // Evaluate env at request time to avoid build-time capture
  const ENABLED = process.env['COMING_SOON'] === 'true'
  if (!ENABLED) return NextResponse.next()

  const { pathname } = req.nextUrl

  // Always allow the coming soon page itself
  if (pathname.startsWith('/coming-soon')) return NextResponse.next()

  // Bypass via query string ?key=demo123 -> set cookie and strip key
  const key = req.nextUrl.searchParams.get('key')
  if (key && key === BYPASS_KEY) {
    const url = req.nextUrl.clone()
    url.searchParams.delete('key')
    const res = NextResponse.redirect(url)
    res.cookies.set(COOKIE_NAME, '1', {
      path: '/',
      httpOnly: false,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
    return res
  }

  // Clear bypass via query string ?clear=1 -> delete cookie and strip query
  const clear = req.nextUrl.searchParams.get('clear')
  if (clear === '1') {
    const url = req.nextUrl.clone()
    url.searchParams.delete('clear')
    const res = NextResponse.redirect(url)
    // Delete the cookie to force redirect back to coming-soon
    res.cookies.delete(COOKIE_NAME)
    return res
  }

  // Bypass if user already has cookie
  if (req.cookies.get(COOKIE_NAME)?.value === '1') {
    return NextResponse.next()
  }

  // Otherwise, redirect to /coming-soon
  const url = req.nextUrl.clone()
  url.pathname = '/coming-soon'
  url.search = ''
  return NextResponse.redirect(url)
}

// Exclude static assets and the coming-soon page from middleware
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|coming-soon).*)',
  ],
}

