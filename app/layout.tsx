import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION, OG_IMAGE, siteGraph } from '@/lib/site'

// Variable fonts: one file per family covers every weight used on the site.
const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Hidaya Thaher — Interior Designer in Nablus, Palestine',
    template: '%s | Hidaya Thaher',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: 'Hidaya Thaher — Interior Designer',
  authors: [{ name: 'Hidaya Thaher', url: SITE_URL }],
  creator: 'Hidaya Thaher',
  publisher: 'Hidaya Thaher',
  // Canonical and og:url are set per page (never inherited) so no page can canonicalize to another.
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE_NAME,
    title: 'Hidaya Thaher — Interior Designer in Nablus, Palestine',
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hidaya Thaher — Interior Designer in Nablus, Palestine',
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-cream-50 dark:bg-charcoal-950 text-charcoal-800 dark:text-cream-100 transition-colors duration-300">
        <JsonLd data={siteGraph()} />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
