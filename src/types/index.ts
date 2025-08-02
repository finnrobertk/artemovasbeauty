export interface Behandling {
  id: string
  navn: string
  beskrivelse: string
  pris: number
  varighet: number // in minutes
  kategori: BehandlingKategori
  bilde?: string
  forEtterBilder?: string[]
  populaer?: boolean
}

export interface BehandlingKategori {
  id: string
  navn: string
  beskrivelse?: string
  slug: string
}

export interface GalleriElement {
  id: string
  tittel: string
  beskrivelse?: string
  forBilde: string
  etterBilde: string
  behandling: Behandling
  dato: string
}

export interface SideInnhold {
  id: string
  tittel: string
  innhold: string
  slug: string
  seo?: {
    metaTittel?: string
    metaBeskrivelse?: string
    nøkkelord?: string[]
  }
}

export interface Kontaktinfo {
  telefon: string
  epost: string
  adresse: {
    gate: string
    postnummer: string
    by: string
  }
  åpningstider: {
    [key: string]: string
  }
  sosialeMedier?: {
    instagram?: string
    facebook?: string
    tiktok?: string
  }
}
