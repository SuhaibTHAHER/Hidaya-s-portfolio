import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Everything on this site is public portfolio content: nothing is blocked, so search
// engines and AI search crawlers can read every page, image, script and stylesheet.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
