export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="h-8 w-48 rounded bg-muted animate-pulse" />
        <div className="mt-2 h-4 w-80 rounded bg-muted animate-pulse" />
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-lg border bg-card">
            <div className="aspect-[4/3] w-full bg-muted animate-pulse" />
            <div className="p-4 space-y-2">
              <div className="h-5 w-40 rounded bg-muted animate-pulse" />
              <div className="h-4 w-64 rounded bg-muted animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
