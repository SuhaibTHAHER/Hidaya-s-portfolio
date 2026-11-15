import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import '../globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { DirProvider } from '@/components/providers/DirProvider'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL, SITE_NAMES, DESCRIPTIONS, OG_IMAGES, HOME_TITLES, siteGraph } from '@/lib/site'

// Variable fonts: one file per family covers every weight used on the site.
const playfair = Playfair_Display({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-playfair', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: HOME_TITLES.en, template: '%s | Hidaya Thaher' },
  description: DESCRIPTIONS.en,
  applicationName: SITE_NAMES.en,
  authors: [{ name: 'Hidaya Thaher', url: SITE_URL }],
  creator: 'Hidaya Thaher',
  publisher: 'Hidaya Thaher',
  // Canonical, hreflang and og:url are set per page (never inherited) so no page can canonicalize to another.
  openGraph: { type: 'website', locale: 'en_US', siteName: SITE_NAMES.en, title: HOME_TITLES.en, description: DESCRIPTIONS.en, images: [OG_IMAGES.en] },
  twitter: { card: 'summary_large_image', title: HOME_TITLES.en, description: DESCRIPTIONS.en, images: [OG_IMAGES.en.url] },
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

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-cream-50 dark:bg-charcoal-950 text-charcoal-800 dark:text-cream-100 transition-colors duration-300">
        <JsonLd data={siteGraph()} />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <DirProvider dir="ltr">{children}</DirProvider>
        </ThemeProvider>
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  )
}
