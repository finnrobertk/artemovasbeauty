import Link from 'next/link'

export type Crumb = {
  label: string
  href?: string
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (!items?.length) return null
  return (
    <nav className="mb-6 text-sm text-muted-foreground" aria-label="Brødsmulesti">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1
          return (
            <li key={idx} className="inline-flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-foreground">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground/80">{item.label}</span>
              )}
              {!isLast && <span className="opacity-50">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
