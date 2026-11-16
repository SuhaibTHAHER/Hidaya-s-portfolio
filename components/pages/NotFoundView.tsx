import type { Metadata } from 'next'
import Link from 'next/link'
import { getUI } from '@/lib/content/ui'
import { type Locale, localePath } from '@/lib/i18n'

export const notFoundMetadata = (locale: Locale): Metadata => {
  const ui = getUI(locale)
  return {
    title: { absolute: `${ui.notFound.title} | ${ui.name}` },
    description: ui.notFound.description,
    robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
  }
}

export default function NotFoundView({ locale }: { locale: Locale }) {
  const ui = getUI(locale)
  return (
    <div className="min-h-screen bg-cream-50 dark:bg-charcoal-950 flex items-center justify-center px-6">
      <div className="text-center">
        <div className="font-serif text-8xl text-gold-300 dark:text-gold-800 mb-6" aria-hidden="true">404</div>
        <h1 className="font-serif text-3xl text-charcoal-800 dark:text-cream-100 mb-4">{ui.notFound.title}</h1>
        <p className="text-charcoal-500 dark:text-charcoal-400 mb-8 max-w-sm mx-auto">{ui.notFound.text}</p>
        <Link href={localePath(locale, '/')} className="btn-gold rounded-none text-xs tracking-[0.2em] uppercase inline-block">
          <span>{ui.notFound.back}</span>
        </Link>
      </div>
    </div>
  )
}
