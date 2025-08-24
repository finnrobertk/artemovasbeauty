# Artemova's Beauty - Skjønnhetssalong

En moderne, responsiv nettside for Artemova's Beauty skjønnhetssalong bygget med Next.js 14 App Router, TypeScript, Tailwind CSS og Shadcn UI.

## 🚀 Teknologi

- **Next.js 15** - App Router med TypeScript
- **TypeScript** - Konsekvent brukt i hele prosjektet inkludert config-filer
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Moderne UI komponenter
- **Radix UI** - Tilgjengelige primitiver
- **pnpm** - Rask pakkebehandler

## 🎨 Design System

### Fargepalett
- **Soft Pink**: Primærfarge for varme og femininitet
- **Gold**: Aksentfarge for eksklusivitet
- **Dark Gray**: Tekst og kontrast
- **White**: Bakgrunn og renhet

### Typografi
- **Inter**: Hovedfont for lesbarhet
- **Playfair Display**: Elegant serif for overskrifter

## 📁 Prosjektstruktur

```
src/
├── app/                    # Next.js App Router
│   ├── behandlinger/       # Behandlinger side
│   ├── galleri/           # Galleri side
│   ├── om-oss/            # Om oss side
│   ├── kontakt/           # Kontakt side
│   ├── globals.css        # Global CSS
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Hjemmeside
├── components/
│   ├── ui/                # Shadcn UI komponenter
│   ├── layout/            # Layout komponenter
│   └── sections/          # Seksjons komponenter
├── lib/
│   └── utils.ts           # Utility funksjoner
└── types/
    └── index.ts           # TypeScript typer
```

## 📌 Prosjektstatus

- Status: Phase 2 (Sanity CMS) pågår
- Siste: Oppdatert hero-typografi og knapper i `src/app/page.tsx`
- Neste: Koble forsiden mot Sanity-innhold og verifisere schemer

## ✅ TODO (kort sikt)

- [ ] Fullføre og verifisere Sanity-skjemaer: `page`, `service`, `siteSettings`
- [ ] Koble Next.js til Sanity via GROQ i `sanity/lib/queries.ts`
- [ ] Hente hero/innhold på forsiden fra Sanity
- [ ] Legge inn eksempeldata i Sanity Studio

## 🛠️ Utvikling

### Forutsetninger
- Node.js 18+
- pnpm

### Installasjon
```bash
pnpm install
```

### Kjør utviklingsserver
```bash
pnpm dev
```

Åpne [http://localhost:3001](http://localhost:3001) i nettleseren.

### Andre kommandoer
```bash
pnpm build      # Bygg for produksjon
pnpm start      # Start produksjonsserver
pnpm lint       # Kjør ESLint
```

## 📋 Neste steg

### Phase 2: Sanity CMS Setup
- [ ] Sanity schema for behandlinger
- [ ] Sanity schema for galleri
- [ ] Sanity Studio konfigurasjon

### Phase 3: Core Layout & Components
- [ ] Header med navigasjon
- [ ] Footer med kontaktinfo
- [ ] Responsiv navigasjon
- [ ] BehandlingCard komponent
- [ ] GalleriGrid komponent

### Phase 4: Page Implementation
- [ ] Forside med hero og fremhevede behandlinger
- [ ] Behandlinger oversikt og detaljsider
- [ ] Galleri med før/etter bilder
- [ ] Om oss side
- [ ] Kontakt side med skjema

### Phase 5: Polish & Optimization
- [ ] Bildeoptimalisering
- [ ] SEO metadata
- [ ] Tilgjengelighet
- [ ] Performance optimalisering

## 🎯 Målgruppe

Kvinner 20-45 år i Oslo-området som er opptatt av:
- Kvalitet og hygiene
- Profesjonell presentasjon
- Enkelt å forstå tilbudet
- Lett å bestille time

## 📞 Tjenester

- **Vippebøy** - Naturlig løft av vipper
- **PMU** - Permanent makeup
- **Tannbleking** - Profesjonell tannbleking
