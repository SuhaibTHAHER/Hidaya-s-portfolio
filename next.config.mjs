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
    // Extra small widths so cards (≈384px) and gallery tiles (≈448px) get a close srcset candidate.
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 448],
    deviceSizes: [640, 750, 828, 896, 1080, 1200, 1440, 1920, 2048, 3840],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  async redirects() {
    return [
      // One canonical host: the default Vercel domain serves an identical copy of the site.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'hidaya-portfolio.vercel.app' }],
        destination: 'https://hidayathaher.com/:path*',
        permanent: true,
      },
      ...retiredProjectSlugs.map((slug) => ({
        source: `/projects/${slug}`,
        destination: '/projects',
        permanent: true,
      })),
    ]
  },
}
export default nextConfig
