import { groq } from 'next-sanity'

// Site Settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    logo,
    contactInfo,
    socialMedia,
    bookingSettings,
    seo
  }
`

// Treatment hierarchy
export const treatmentCategoriesQuery = groq`
  *[_type == "treatmentCategory"] | order(title asc) {
    _id,
    title,
    slug,
    image,
    description,
    hasSubcategories
  }
`

export const treatmentCategoryBySlugQuery = groq`
  *[_type == "treatmentCategory" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    image,
    description,
    hasSubcategories,
    "subcategories": *[_type == "treatmentSubcategory" && category._ref == ^._id] | order(title asc) {
      _id,
      title,
      slug,
      image,
      treatment->{
        _id,
        title,
        slug,
        description,
        priceFrom,
        duration,
        afterImage
      }
    },
    "treatments": *[_type == "treatment" && category._ref == ^._id] | order(title asc) {
      _id,
      title,
      slug,
      description,
      priceFrom,
      duration,
      afterImage
    }
  }
`

export const treatmentSubcategoryBySlugQuery = groq`
  *[_type == "treatmentSubcategory" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    image,
    category->{ title, slug },
    treatment->{
      _id,
      title,
      slug,
      description,
      priceFrom,
      duration,
      afterImage
    }
  }
`

// Treatments
export const treatmentsQuery = groq`
  *[_type == "treatment"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    category->{ title, slug },
    beforeImage,
    afterImage,
    priceFrom,
    duration,
    featured
  }
`

export const featuredTreatmentsQuery = groq`
  *[_type == "treatment" && featured == true] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    category->{ title, slug },
    beforeImage,
    afterImage,
    priceFrom,
    duration
  }
`

export const treatmentBySlugQuery = groq`
  *[_type == "treatment" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    content,
    category->{ title, slug },
    beforeImage,
    afterImage,
    beforeCare,
    priceFrom,
    duration,
    aftercare,
    featured
  }
`

// Testimonials
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(publishedAt desc) {
    _id,
    name,
    review,
    rating,
    treatment->{ title, slug },
    image,
    featured,
    publishedAt
  }
`

export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && featured == true] | order(publishedAt desc) {
    _id,
    name,
    review,
    rating,
    treatment->{ title, slug },
    image,
    publishedAt
  }
`

// Pages
export const pagesQuery = groq`
  *[_type == "page"] | order(title asc) {
    _id,
    title,
    slug,
    metaTitle,
    metaDescription,
    publishedAt
  }
`

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    metaTitle,
    metaDescription,
    heroImage,
    heroTitle,
    heroSubtitle,
    content,
    showServices,
    showTestimonials,
    publishedAt
  }
`

// Homepage data (combines multiple queries)
export const homepageQuery = groq`
  {
    "siteSettings": *[_type == "siteSettings"][0] {
      title,
      description,
      logo,
      contactInfo,
      socialMedia,
      bookingSettings
    },
    "featuredTreatments": *[_type == "treatment" && featured == true] | order(_createdAt desc) [0...3] {
      _id,
      title,
      slug,
      description,
      afterImage,
      priceFrom
    },
    "featuredTestimonials": *[_type == "testimonial" && featured == true] | order(publishedAt desc) [0...3] {
      _id,
      name,
      review,
      rating,
      treatment->{ title }
    }
  }
`
