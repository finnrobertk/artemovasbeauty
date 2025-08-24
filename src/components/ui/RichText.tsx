import { PortableText, PortableTextComponents } from '@portabletext/react'

const components: PortableTextComponents = {
  types: {},
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 space-y-1">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 space-y-1">{children}</ol>,
  },
  block: {
    h2: ({ children }) => <h2 className="text-xl font-semibold mt-8 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-semibold mt-6 mb-2">{children}</h3>,
    normal: ({ children }) => <p className="text-base text-muted-foreground leading-relaxed mb-4">{children}</p>,
  },
  marks: {
    em: ({ children }) => <em className="italic">{children}</em>,
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    link: ({ children, value }) => (
      <a href={value?.href} target="_blank" rel="noreferrer" className="underline underline-offset-4">
        {children}
      </a>
    ),
  },
}

export function RichText({ value }: { value: any }) {
  if (!value) return null
  return <PortableText value={value} components={components} />
}
