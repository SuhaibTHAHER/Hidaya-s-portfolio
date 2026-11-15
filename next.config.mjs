/** @type {import('next').NextConfig} */

// Project URLs from the first version of the site, whose placeholder case studies were
// replaced by Hidaya's real projects. They were live in production, so they redirect
// permanently to the projects index instead of returning 404.
const retiredProjectSlugs = [
  'modern-luxury-villa',
  'contemporary-apartment',
  'boutique-coffee-shop',
  'minimalist-office',
  'fashion-retail-store',
  'hotel-lobby-concept',
  'scandinavian-living-space',
  'fine-dining-restaurant',
]

const nextConfig = {
  poweredByHeader: false,
  images: {
    // All images are local files in /public; Vercel serves responsive AVIF/WebP variants.
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  async redirects() {
    return retiredProjectSlugs.map((slug) => ({
      source: `/projects/${slug}`,
      destination: '/projects',
      permanent: true,
    }))
  },
}
export default nextConfig
