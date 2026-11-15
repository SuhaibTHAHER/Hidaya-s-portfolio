export type Locale = 'en' | 'ar'

export const locales: Locale[] = ['en', 'ar']

export const htmlLang: Record<Locale, string> = { en: 'en', ar: 'ar' }
export const dirOf: Record<Locale, 'ltr' | 'rtl'> = { en: 'ltr', ar: 'rtl' }
export const ogLocale: Record<Locale, string> = { en: 'en_US', ar: 'ar_PS' }

/**
 * Path of a page in a given language. English keeps the original URLs at the root
 * (so nothing that is already indexed changes); Arabic lives under /ar.
 *   localePath('en', '/projects') -> '/projects'
 *   localePath('ar', '/projects') -> '/ar/projects'
 */
export function localePath(locale: Locale, path = '/') {
  const clean = path.startsWith('/') ? path : `/${path}`
  if (locale === 'en') return clean
  return clean === '/' ? '/ar' : `/ar${clean}`
}

/** hreflang map for a page that exists in both languages (x-default = English). */
export function languageAlternates(path: string) {
  return {
    en: localePath('en', path),
    ar: localePath('ar', path),
    'x-default': localePath('en', path),
  }
}

export const otherLocale = (locale: Locale): Locale => (locale === 'en' ? 'ar' : 'en')
