import { projects } from '@/lib/projects'
import { personalInfo } from '@/lib/data'
import { CONTENT_UPDATED, absoluteUrl } from '@/lib/site'
import { locales, localePath } from '@/lib/i18n'

// Hand-written so that every page can carry (1) its image entries (Google image sitemap
// extension) and (2) its hreflang alternates (xhtml:link) — MetadataRoute.Sitemap in Next 14
// supports neither images nor per-URL language alternates.
export const dynamic = 'force-static'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')

type Entry = { path: string; images: string[] }

export function GET() {
  // Language-neutral pages; each one exists in English (root) and Arabic (/ar).
  const pages: Entry[] = [
    { path: '/', images: [personalInfo.portrait.src, ...projects.map((p) => p.cover.src)] },
    { path: '/projects', images: projects.map((p) => p.cover.src) },
    ...projects.map((p) => ({ path: `/projects/${p.slug}`, images: p.images.map((i) => i.src) })),
  ]

  const urls = pages.flatMap(({ path, images }) =>
    locales.map((locale) => {
      const alternates = [
        ...locales.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${esc(absoluteUrl(localePath(l, path)))}"/>`),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${esc(absoluteUrl(localePath('en', path)))}"/>`,
      ].join('\n')
      const imgs = Array.from(new Set(images))
        .map((src) => `    <image:image><image:loc>${esc(absoluteUrl(src))}</image:loc></image:image>`)
        .join('\n')
      return `  <url>\n    <loc>${esc(absoluteUrl(localePath(locale, path)))}</loc>\n    <lastmod>${CONTENT_UPDATED}</lastmod>\n${alternates}\n${imgs}\n  </url>`
    }),
  )

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join('\n')}
</urlset>
`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
