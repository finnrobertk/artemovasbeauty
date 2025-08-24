export default function LoadingSubcategory() {
  return (
    <main className="container mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="h-8 w-64 rounded bg-muted animate-pulse" />
        <div className="mt-2 h-4 w-96 rounded bg-muted animate-pulse" />
      </header>
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-4">
          <div className="aspect-[4/3] w-full bg-muted animate-pulse rounded-lg" />
          <div className="h-4 w-5/6 bg-muted animate-pulse rounded" />
          <div className="h-4 w-2/3 bg-muted animate-pulse rounded" />
          <div className="h-4 w-3/4 bg-muted animate-pulse rounded" />
        </div>
        <div className="lg:col-span-2 space-y-4">
          <div className="h-40 bg-muted animate-pulse rounded-lg" />
          <div className="h-32 bg-muted animate-pulse rounded-lg" />
          <div className="h-32 bg-muted animate-pulse rounded-lg" />
        </div>
      </div>
    </main>
  )
}
