import type { Locale } from '@/lib/i18n'

/**
 * Service pages and the "How I work" page, in both languages. Each page owns one search intent
 * (see the keyword map): the home page owns "interior designer in Nablus"; these pages own
 * residential, commercial and 3D-visualization intents and the process/FAQ questions.
 * Facts are limited to what the owner confirmed: design and 3D only, no execution or supervision.
 */
export type Section = { heading: string; paragraphs: string[]; bullets: string[] }
export type QA = { q: string; a: string }

export type ServicePageContent = {
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string[]
  sections: Section[]
  projectsHeading: string
  faqHeading: string
  faq: QA[]
  ctaTitle: string
  ctaText: string
  ctaButton: string
}

export type ProcessPageContent = {
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string[]
  stepsHeading: string
  steps: { title: string; text: string }[]
  faqHeading: string
  faq: QA[]
  ctaTitle: string
  ctaText: string
  ctaButton: string
}

export const serviceSlugs = ['residential-interior-design', 'commercial-interior-design', '3d-visualization'] as const
export type ServiceSlug = (typeof serviceSlugs)[number]

/** Which real projects support each service page. */
export const serviceProjects: Record<ServiceSlug, string[]> = {
  'residential-interior-design': ['kitchen-and-dining-nook', 'master-bedroom', 'bedroom-design', 'kids-bedroom', 'boys-bedroom', 'lounge-seating-area', 'private-room'],
  'commercial-interior-design': ['restaurant-interior', 'clothing-store', 'bank-branch', 'art-supply-showroom', 'camera-store', 'work-office', 'parametric-reception'],
  '3d-visualization': ['restaurant-interior', 'kitchen-and-dining-nook', 'bank-branch', 'master-bedroom', 'parametric-reception', 'clothing-store'],
}

/** Service page that a project belongs to (for contextual links from project pages). */
export const serviceForCategory = (category: string): ServiceSlug =>
  category === 'Residential' ? 'residential-interior-design' : 'commercial-interior-design'

export const servicePages: Record<ServiceSlug, Record<Locale, ServicePageContent>> = {} as never
export const processPage: Record<Locale, ProcessPageContent> = {} as never
