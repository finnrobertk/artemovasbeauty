import { PortableTextBlock } from '@portabletext/types'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Base Sanity document
export interface SanityDocument {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}

// Image with alt text
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
}

// Slug
export interface SanitySlug {
  _type: 'slug'
  current: string
}

// Service
export interface Service extends SanityDocument {
  _type: 'service'
  title: string
  slug: SanitySlug
  description?: string
  longDescription?: PortableTextBlock[]
  image?: SanityImage
  price?: number
  duration?: number
  category?: 'vipper' | 'pmu' | 'laminering' | 'hudpleie' | 'annet'
  featured: boolean
  order?: number
}

// Treatment
export interface Treatment extends SanityDocument {
  _type: 'treatment'
  title: string
  slug: SanitySlug
  service: Service
  description?: string
  content?: PortableTextBlock[]
  beforeImage?: SanityImage
  afterImage?: SanityImage
  price?: number
  duration?: number
  aftercare?: PortableTextBlock[]
  featured: boolean
}

// Testimonial
export interface Testimonial extends SanityDocument {
  _type: 'testimonial'
  name: string
  review: string
  rating: number
  service?: Service
  image?: SanityImage
  featured: boolean
  publishedAt: string
}

// Page
export interface Page extends SanityDocument {
  _type: 'page'
  title: string
  slug: SanitySlug
  metaTitle?: string
  metaDescription?: string
  heroImage?: SanityImage
  heroTitle?: string
  heroSubtitle?: string
  content?: PortableTextBlock[]
  showServices: boolean
  showTestimonials: boolean
  publishedAt: string
}

// Site Settings
export interface ContactInfo {
  phone?: string
  email?: string
  address?: string
  openingHours?: string
}

export interface SocialMedia {
  instagram?: string
  facebook?: string
  tiktok?: string
}

export interface BookingSettings {
  bookingUrl?: string
  bookingPhone?: string
  bookingEmail?: string
}

export interface SEOSettings {
  metaTitle?: string
  metaDescription?: string
  ogImage?: SanityImage
}

export interface SiteSettings extends SanityDocument {
  _type: 'siteSettings'
  title: string
  description?: string
  logo?: SanityImage
  contactInfo?: ContactInfo
  socialMedia?: SocialMedia
  bookingSettings?: BookingSettings
  seo?: SEOSettings
}

// Homepage data structure
export interface HomepageData {
  siteSettings: SiteSettings
  featuredServices: Service[]
  featuredTestimonials: Testimonial[]
}

// Category labels for display
export const categoryLabels: Record<string, string> = {
  vipper: 'Vipper',
  pmu: 'PMU',
  laminering: 'Laminering',
  hudpleie: 'Hudpleie',
  annet: 'Annet',
}

// Helper type for image URL builder
export type ImageSource = SanityImageSource
