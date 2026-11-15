import type { Metadata } from 'next'
import { personalInfo, services, education } from '@/lib/data'
import type { Project } from '@/lib/projects'

/**
 * Canonical origin of the site: the custom domain connected to the Vercel project.
 * Every canonical, sitemap, robots and structured-data URL is built from it.
 * (hidaya-portfolio.vercel.app permanently redirects here; see next.config.mjs.)
 * Override with NEXT_PUBLIC_SITE_URL only if the production domain changes.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://hidayathaher.com').replace(/\/+$/, '')

export const SITE_NAME = 'Hidaya Thaher — Interior Designer'

/** Date the site content was last meaningfully updated (used for sitemap lastmod and dateModified). */
export const CONTENT_UPDATED = '2026-11-15'

export const DEFAULT_DESCRIPTION =
  'Hidaya Thaher is an interior designer in Nablus, Palestine, creating residential and commercial interiors with space planning and photorealistic 3D renders.'

export const OG_IMAGE = {
  url: '/og/hidaya-thaher-interior-designer.jpg',
  width: 1200,
  height: 630,
  alt: 'Hidaya Thaher, interior designer in Nablus, Palestine',
}

/** Absolute URL; the home page is written without a trailing slash, matching its canonical. */
export const absoluteUrl = (path = '/') =>
  path === '/' || path === '' ? SITE_URL : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`

export const ids = {
  person: `${SITE_URL}/#person`,
  portrait: `${SITE_URL}/#portrait`,
  website: `${SITE_URL}/#website`,
  homePage: `${SITE_URL}/#webpage`,
}

/** Truncate at a word boundary without cutting words in half. */
export function truncate(text: string, max = 155) {
  if (text.length <= max) return text
  const cut = text.slice(0, max + 1)
  const lastSpace = cut.lastIndexOf(' ')
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max).replace(/[\s,;:—-]+$/, '')}…`
}

type PageImage = { url: string; width: number; height: number; alt: string }

/**
 * Complete per-page metadata. Next.js replaces (does not merge) a parent's openGraph/twitter
 * objects, so every page builds the full set here: canonical, og:url, title, description, image.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = OG_IMAGE,
  absoluteTitle = false,
  type = 'website',
}: {
  title: string
  description: string
  path: string
  image?: PageImage
  absoluteTitle?: boolean
  type?: 'website' | 'article'
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | Hidaya Thaher`
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: 'en_US',
      siteName: SITE_NAME,
      url: path,
      title: fullTitle,
      description,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  }
}

const personNode = () => ({
  '@type': 'Person',
  '@id': ids.person,
  name: personalInfo.name,
  jobTitle: personalInfo.title,
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  image: {
    '@type': 'ImageObject',
    '@id': ids.portrait,
    contentUrl: absoluteUrl(personalInfo.portrait.src),
    url: absoluteUrl(personalInfo.portrait.src),
    width: personalInfo.portrait.width,
    height: personalInfo.portrait.height,
    caption: personalInfo.portrait.alt,
  },
  email: `mailto:${personalInfo.email}`,
  telephone: personalInfo.phone.replace(/\s/g, ''),
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nablus',
    addressCountry: 'PS',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: education[0].institution,
    address: { '@type': 'PostalAddress', addressLocality: 'Nablus', addressCountry: 'PS' },
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'degree',
    name: education[0].degree,
    recognizedBy: { '@type': 'CollegeOrUniversity', name: education[0].institution },
  },
  knowsLanguage: ['ar', 'en'],
  knowsAbout: [
    'Interior design',
    'Space planning',
    'Residential interior design',
    'Commercial interior design',
    '3D visualization',
    'Furniture design',
    'Custom door design',
    'AutoCAD',
    '3ds Max',
    'V-Ray',
  ],
  makesOffer: services.map((s) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: s.title, description: s.description },
  })),
})

const websiteNode = () => ({
  '@type': 'WebSite',
  '@id': ids.website,
  url: SITE_URL,
  name: personalInfo.name,
  alternateName: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  inLanguage: 'en',
  publisher: { '@id': ids.person },
  author: { '@id': ids.person },
})

/** Site-wide graph: the WebSite and the Person behind it. */
export function siteGraph() {
  return { '@context': 'https://schema.org', '@graph': [websiteNode(), personNode()] }
}

export function homePageGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': ids.homePage,
        url: SITE_URL,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        inLanguage: 'en',
        isPartOf: { '@id': ids.website },
        mainEntity: { '@id': ids.person },
        about: { '@id': ids.person },
        primaryImageOfPage: { '@id': ids.portrait },
        dateModified: CONTENT_UPDATED,
      },
    ],
  }
}

const breadcrumb = (items: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
})

export function projectsIndexGraph(projects: Project[]) {
  const url = absoluteUrl('/projects')
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${url}#webpage`,
        url,
        name: 'Interior Design Projects by Hidaya Thaher',
        inLanguage: 'en',
        isPartOf: { '@id': ids.website },
        about: { '@id': ids.person },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: projects.length,
          itemListElement: projects.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: absoluteUrl(`/projects/${p.slug}`),
            name: p.title,
          })),
        },
      },
      breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
      ]),
    ],
  }
}

export function projectGraph(project: Project) {
  const url = absoluteUrl(`/projects/${project.slug}`)
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: project.title,
        inLanguage: 'en',
        isPartOf: { '@id': ids.website },
        mainEntity: { '@id': `${url}#work` },
        primaryImageOfPage: { '@id': `${absoluteUrl(project.cover.src)}#image` },
        dateModified: CONTENT_UPDATED,
      },
      {
        '@type': 'CreativeWork',
        '@id': `${url}#work`,
        name: project.title,
        alternateName: project.titleAr,
        description: project.overview,
        genre: 'Interior design',
        about: project.projectType,
        keywords: project.tags.join(', '),
        inLanguage: 'en',
        url,
        creator: { '@id': ids.person },
        author: { '@id': ids.person },
        isPartOf: { '@id': ids.website },
        image: project.images.map((img) => ({
          '@type': 'ImageObject',
          '@id': `${absoluteUrl(img.src)}#image`,
          contentUrl: absoluteUrl(img.src),
          url: absoluteUrl(img.src),
          width: img.width,
          height: img.height,
          // The cover is shown without a caption on the page, so its schema carries none either.
          ...(img.src === project.cover.src ? {} : { caption: img.caption }),
          description: img.alt,
          creator: { '@id': ids.person },
          creditText: personalInfo.name,
        })),
      },
      breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: project.title, path: `/projects/${project.slug}` },
      ]),
    ],
  }
}
