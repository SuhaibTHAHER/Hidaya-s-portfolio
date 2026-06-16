import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Hidaya Thaher — Interior Designer | Nablus, Palestine',
    template: '%s | Hidaya Thaher',
  },
  description: 'Award-winning interior designer specializing in luxury residential and commercial spaces. Transforming environments into timeless experiences through innovative design.',
  keywords: ['interior designer', 'Nablus', 'Palestine', 'luxury interior design', 'residential design', 'commercial design', 'space planning', '3D visualization'],
  authors: [{ name: 'Hidaya Thaher', url: 'https://hidayathaher.com' }],
  creator: 'Hidaya Thaher',
  publisher: 'Hidaya Thaher',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hidayathaher.com',
    title: 'Hidaya Thaher — Interior Designer',
    description: 'Luxury interior designer transforming spaces into timeless experiences.',
    siteName: 'Hidaya Thaher Portfolio',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Hidaya Thaher — Interior Designer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hidaya Thaher — Interior Designer',
    description: 'Luxury interior designer transforming spaces into timeless experiences.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: { google: 'your-google-verification-code' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Hidaya Thaher',
              jobTitle: 'Interior Designer',
              url: 'https://hidayathaher.com',
              email: 'hidayathaher@gmail.com',
              telephone: '+970598305271',
              address: { '@type': 'PostalAddress', addressLocality: 'Nablus', addressCountry: 'PS' },
              sameAs: ['https://behance.net/hidayathaher'],
              knowsAbout: ['Interior Design', 'Space Planning', 'Residential Design', 'Commercial Design'],
            }),
          }}
        />
      </head>
      <body className="bg-cream-50 dark:bg-charcoal-950 text-charcoal-800 dark:text-cream-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
