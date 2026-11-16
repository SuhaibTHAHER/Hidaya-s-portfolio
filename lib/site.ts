import type { Metadata } from 'next'
import { personalInfo, services, education } from '@/lib/data'
import type { LocalizedProject } from '@/lib/content'
import type { UI } from '@/lib/content/ui'
import { type Locale, localePath, languageAlternates, ogLocale, otherLocale } from '@/lib/i18n'

/**
 * Canonical origin of the site: the custom domain connected to the Vercel project.
 * Every canonical, sitemap, robots and structured-data URL is built from it.
 * (hidaya-portfolio.vercel.app permanently redirects here; see next.config.mjs.)
 * Override with NEXT_PUBLIC_SITE_URL only if the production domain changes.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://hidayathaher.com').replace(/\/+$/, '')

export const SITE_NAMES: Record<Locale, string> = {
  en: 'Hidaya Thaher — Interior Designer',
  ar: 'هداية ظاهر — مصممة داخلية',
}
export const SITE_NAME = SITE_NAMES.en

/** Date the site content was last meaningfully updated (used for sitemap lastmod and dateModified). */
export const CONTENT_UPDATED = '2026-11-15'

export const DESCRIPTIONS: Record<Locale, string> = {
  en: 'Hidaya Thaher is an interior designer in Nablus, Palestine, creating residential and commercial interiors with space planning and photorealistic 3D renders.',
  ar: 'هداية ظاهر مصممة داخلية في نابلس، فلسطين، تصمّم مساحات سكنية وتجارية بتخطيط مدروس للمساحة وتصاميم ثلاثية الأبعاد واقعية.',
}
export const DEFAULT_DESCRIPTION = DESCRIPTIONS.en

export const HOME_TITLES: Record<Locale, string> = {
  en: 'Hidaya Thaher — Interior Designer in Nablus, Palestine',
  ar: 'هداية ظاهر — مصممة داخلية في نابلس، فلسطين',
}

const TITLE_SUFFIX: Record<Locale, string> = { en: ' | Hidaya Thaher', ar: ' | هداية ظاهر' }

export const OG_IMAGES: Record<Locale, PageImage> = {
  en: { url: '/og/hidaya-thaher-interior-designer.jpg', width: 1200, height: 630, alt: 'Hidaya Thaher, interior designer in Nablus, Palestine' },
  ar: { url: '/og/hidaya-thaher-interior-designer-ar.jpg', width: 1200, height: 630, alt: 'هداية ظاهر، مصممة داخلية في نابلس، فلسطين' },
}
export const OG_IMAGE = OG_IMAGES.en

/** Absolute URL; the home page is written without a trailing slash, matching its canonical. */
export const absoluteUrl = (path = '/') =>
  path === '/' || path === '' ? SITE_URL : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`

export const ids = {
  person: `${SITE_URL}/#person`,
  portrait: `${SITE_URL}/#portrait`,
  website: `${SITE_URL}/#website`,
  homePage: (locale: Locale) => `${absoluteUrl(localePath(locale, '/'))}#webpage`,
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
 * objects, so every page builds the full set here: canonical, hreflang alternates, og:url,
 * og:locale, title, description and image. `path` is the language-neutral path ('/projects');
 * the canonical becomes '/projects' (en) or '/ar/projects' (ar).
 */
export function pageMetadata({
  locale = 'en',
  title,
  description,
  path,
  image,
  absoluteTitle = false,
  type = 'website',
}: {
  locale?: Locale
  title: string
  description: string
  path: string
  image?: PageImage
  absoluteTitle?: boolean
  type?: 'website' | 'article'
}): Metadata {
  const img = image ?? OG_IMAGES[locale]
  const canonical = localePath(locale, path)
  const fullTitle = absoluteTitle ? title : `${title}${TITLE_SUFFIX[locale]}`
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical, languages: languageAlternates(path) },
    openGraph: {
      type,
      locale: ogLocale[locale],
      alternateLocale: [ogLocale[otherLocale(locale)]],
      siteName: SITE_NAMES[locale],
      url: canonical,
      title: fullTitle,
      description,
      images: [img],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [{ url: img.url, alt: img.alt }],
    },
  }
}

const areaServed = [
  { '@type': 'City', name: 'Nablus' },
  { '@type': 'Country', name: 'Palestine' },
]

/** One Person entity for both languages (same @id everywhere), with her Arabic name as alternateName. */
const personNode = () => ({
  '@type': 'Person',
  '@id': ids.person,
  name: personalInfo.name,
  alternateName: personalInfo.nameAlternates,
  jobTitle: personalInfo.title,
  description: DESCRIPTIONS.en,
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
  address: { '@type': 'PostalAddress', addressLocality: 'Nablus', addressCountry: 'PS' },
  workLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Nablus', addressCountry: 'PS' } },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: education[0].institution,
    alternateName: 'جامعة النجاح الوطنية',
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
    'Interior design', 'Space planning', 'Residential interior design', 'Commercial interior design',
    '3D visualization', 'Furniture design', 'Custom door design', 'AutoCAD', '3ds Max', 'V-Ray',
    'التصميم الداخلي', 'الديكور', 'التصميم ثلاثي الأبعاد',
  ],
  makesOffer: services.map((s) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: s.title, description: s.description, areaServed },
  })),
})

const websiteNode = () => ({
  '@type': 'WebSite',
  '@id': ids.website,
  url: SITE_URL,
  name: personalInfo.name,
  alternateName: [SITE_NAMES.en, SITE_NAMES.ar, personalInfo.nameAr],
  description: DESCRIPTIONS.en,
  inLanguage: ['en', 'ar'],
  publisher: { '@id': ids.person },
  author: { '@id': ids.person },
})

/** Site-wide graph: the WebSite and the Person behind it (identical on every page, both languages). */
export function siteGraph() {
  return { '@context': 'https://schema.org', '@graph': [websiteNode(), personNode()] }
}

export function homePageGraph(locale: Locale = 'en') {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': ids.homePage(locale),
        url: absoluteUrl(localePath(locale, '/')),
        name: HOME_TITLES[locale],
        description: DESCRIPTIONS[locale],
        inLanguage: locale,
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

export function projectsIndexGraph(projects: LocalizedProject[], locale: Locale = 'en', ui?: UI) {
  const url = absoluteUrl(localePath(locale, '/projects'))
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${url}#webpage`,
        url,
        name: ui ? `${ui.projectsPage.h1}${TITLE_SUFFIX[locale].replace(' | ', ' — ')}` : 'Interior Design Projects by Hidaya Thaher',
        inLanguage: locale,
        isPartOf: { '@id': ids.website },
        about: { '@id': ids.person },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: projects.length,
          itemListElement: projects.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: absoluteUrl(localePath(locale, `/projects/${p.slug}`)),
            name: p.title,
          })),
        },
      },
      breadcrumb([
        { name: ui?.crumbs.home ?? 'Home', path: localePath(locale, '/') },
        { name: ui?.crumbs.projects ?? 'Projects', path: localePath(locale, '/projects') },
      ]),
    ],
  }
}

export function projectGraph(project: LocalizedProject, locale: Locale = 'en', ui?: UI) {
  const url = absoluteUrl(localePath(locale, `/projects/${project.slug}`))
  // Image nodes carry language-specific descriptions, so each language gets its own @id.
  const imgId = (src: string) => `${absoluteUrl(src)}#image${locale === 'en' ? '' : `-${locale}`}`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: project.title,
        inLanguage: locale,
        isPartOf: { '@id': ids.website },
        mainEntity: { '@id': `${url}#work` },
        primaryImageOfPage: { '@id': imgId(project.cover.src) },
        dateModified: CONTENT_UPDATED,
      },
      {
        '@type': 'CreativeWork',
        '@id': `${url}#work`,
        name: project.title,
        alternateName: project.otherTitle,
        description: project.overview,
        genre: locale === 'ar' ? 'تصميم داخلي' : 'Interior design',
        about: project.projectType,
        keywords: project.tags.join(locale === 'ar' ? '، ' : ', '),
        inLanguage: locale,
        url,
        creator: { '@id': ids.person },
        author: { '@id': ids.person },
        isPartOf: { '@id': ids.website },
        image: project.images.map((img) => ({
          '@type': 'ImageObject',
          '@id': imgId(img.src),
          contentUrl: absoluteUrl(img.src),
          url: absoluteUrl(img.src),
          width: img.width,
          height: img.height,
          // The cover is shown without a caption on the page, so its schema carries none either.
          ...(img.src === project.cover.src ? {} : { caption: img.caption }),
          description: img.alt,
          creator: { '@id': ids.person },
          creditText: locale === 'ar' ? personalInfo.nameAr : personalInfo.name,
        })),
      },
      breadcrumb([
        { name: ui?.crumbs.home ?? 'Home', path: localePath(locale, '/') },
        { name: ui?.crumbs.projects ?? 'Projects', path: localePath(locale, '/projects') },
        { name: project.title, path: localePath(locale, `/projects/${project.slug}`) },
      ]),
    ],
  }
}

type FAQ = { q: string; a: string }
const faqNode = (url: string, faq: FAQ[], locale: Locale) => ({
  '@type': 'FAQPage',
  '@id': `${url}#faq`,
  inLanguage: locale,
  mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
})

/** Service page: the Service itself (provided by the Person), its visible FAQ and breadcrumbs. */
export function serviceGraph(
  { path, name, description, faq, projects }: { path: string; name: string; description: string; faq: FAQ[]; projects: { slug: string; title: string }[] },
  locale: Locale,
  ui: UI,
) {
  const url = absoluteUrl(localePath(locale, path))
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: locale,
        isPartOf: { '@id': ids.website },
        mainEntity: { '@id': `${url}#service` },
        dateModified: CONTENT_UPDATED,
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name,
        serviceType: name,
        description,
        url,
        provider: { '@id': ids.person },
        areaServed,
        availableLanguage: ['ar', 'en'],
        subjectOf: projects.map((p) => ({ '@id': `${absoluteUrl(localePath(locale, `/projects/${p.slug}`))}#work` })),
      },
      ...(faq.length ? [faqNode(url, faq, locale)] : []),
      breadcrumb([
        { name: ui.crumbs.home, path: localePath(locale, '/') },
        { name, path: localePath(locale, path) },
      ]),
    ],
  }
}

export function processGraph({ name, description, faq }: { name: string; description: string; faq: FAQ[] }, locale: Locale, ui: UI) {
  const url = absoluteUrl(localePath(locale, '/process'))
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: locale,
        isPartOf: { '@id': ids.website },
        about: { '@id': ids.person },
        dateModified: CONTENT_UPDATED,
      },
      ...(faq.length ? [faqNode(url, faq, locale)] : []),
      breadcrumb([
        { name: ui.crumbs.home, path: localePath(locale, '/') },
        { name, path: localePath(locale, '/process') },
      ]),
    ],
  }
}
