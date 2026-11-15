import { projects } from '@/lib/projects'
import { personalInfo } from '@/lib/data'
import { CONTENT_UPDATED, absoluteUrl } from '@/lib/site'

// Hand-written so that every page can carry its image entries (Google image sitemap
// extension); MetadataRoute.Sitemap in Next 14 has no image support.
export const dynamic = 'force-static'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')

type Entry = { path: string; images: string[] }

export function GET() {
  const entries: Entry[] = [
    { path: '/', images: [personalInfo.portrait.src, ...projects.map((p) => p.cover.src)] },
    { path: '/projects', images: projects.map((p) => p.cover.src) },
    ...projects.map((p) => ({ path: `/projects/${p.slug}`, images: p.images.map((i) => i.src) })),
  ]

  const body = entries
    .map(({ path, images }) => {
      const imgs = Array.from(new Set(images))
        .map((src) => `    <image:image><image:loc>${esc(absoluteUrl(src))}</image:loc></image:image>`)
        .join('\n')
      return `  <url>\n    <loc>${esc(absoluteUrl(path))}</loc>\n    <lastmod>${CONTENT_UPDATED}</lastmod>\n${imgs}\n  </url>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${body}
</urlset>
`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
