import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter, Markazi_Text, Tajawal } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import '../globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { DirProvider } from '@/components/providers/DirProvider'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL, SITE_NAMES, DESCRIPTIONS, OG_IMAGES, HOME_TITLES, siteGraph } from '@/lib/site'

// Arabic pages: Markazi Text (Naskh serif, pairs with the Playfair headings) and Tajawal for text.
// Chosen for weight: ~70 KB together. The previous pair (Amiri + Noto Sans Arabic, ~370 KB) shared the slow-network
// bandwidth with the hero image and pushed mobile LCP from ~3 s to ~5 s.
// Latin fonts are loaded without preload, only for the few Latin words on Arabic pages.
const markazi = Markazi_Text({ subsets: ['arabic'], variable: '--font-ar-serif', display: 'swap' })
const tajawal = Tajawal({ subsets: ['arabic'], weight: ['400', '500', '700'], variable: '--font-ar-sans', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap', preload: false })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap', preload: false })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: HOME_TITLES.ar, template: '%s | هداية ظاهر' },
  description: DESCRIPTIONS.ar,
  applicationName: SITE_NAMES.ar,
  authors: [{ name: 'هداية ظاهر', url: SITE_URL }],
  creator: 'هداية ظاهر',
  publisher: 'هداية ظاهر',
  openGraph: { type: 'website', locale: 'ar_PS', siteName: SITE_NAMES.ar, title: HOME_TITLES.ar, description: DESCRIPTIONS.ar, images: [OG_IMAGES.ar] },
  twitter: { card: 'summary_large_image', title: HOME_TITLES.ar, description: DESCRIPTIONS.ar, images: [OG_IMAGES.ar.url] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FDFBF7' },
    { media: '(prefers-color-scheme: dark)', color: '#0D0B09' },
  ],
}

export default function ArabicRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${markazi.variable} ${tajawal.variable} ${playfair.variable} ${inter.variable}`}
    >
      <body className="bg-cream-50 dark:bg-charcoal-950 text-charcoal-800 dark:text-cream-100 transition-colors duration-300">
        <JsonLd data={siteGraph('ar')} />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <DirProvider dir="rtl">{children}</DirProvider>
        </ThemeProvider>
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  )
}
