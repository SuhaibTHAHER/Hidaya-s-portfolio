import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import PageShell from '@/components/pages/PageShell'
import FaqList from '@/components/sections/FaqList'
import { getSiteContent } from '@/lib/content'
import { processPage, serviceSlugs } from '@/lib/content/pages'
import { type Locale, localePath } from '@/lib/i18n'
import { pageMetadata, processGraph } from '@/lib/site'

export const processMetadata = (locale: Locale): Metadata => {
  const page = processPage[locale]
  return pageMetadata({ locale, title: page.metaTitle, description: page.metaDescription, path: '/process' })
}

export default function ProcessPage({ locale }: { locale: Locale }) {
  const c = getSiteContent(locale)
  const { ui } = c
  const page = processPage[locale]
  const href = (path: string) => localePath(locale, path)

  return (
    <PageShell content={c} path="/process">
      <JsonLd data={processGraph({ name: page.h1, description: page.metaDescription, faq: page.faq }, locale, ui)} />
      <main id="main" className="min-h-screen bg-cream-50 dark:bg-charcoal-950">
        <div className="pt-32 pb-20 bg-charcoal-950 text-cream-50">
          <div className="container-luxury">
            <Breadcrumbs items={[{ name: ui.crumbs.home, href: href('/') }, { name: page.h1 }]} label={ui.crumbs.label} className="mb-8 text-charcoal-400" />
            <span className="section-label on-dark mb-4 block">{ui.servicePages.process}</span>
            <h1 className="font-serif text-4xl md:text-6xl font-medium mb-6 max-w-4xl">{page.h1}</h1>
            <div className="space-y-4 max-w-2xl">
              {page.intro.map((p) => (
                <p key={p} className="text-charcoal-300 leading-relaxed text-lg">{p}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="container-luxury py-20">
          <div className="max-w-4xl mx-auto">
            <section aria-labelledby="steps" className="mb-20">
              <h2 id="steps" className="font-serif text-3xl text-charcoal-900 dark:text-cream-100 mb-10">{page.stepsHeading}</h2>
              <ol className="space-y-8">
                {page.steps.map((s, i) => (
                  <li key={s.title} className="flex gap-6">
                    <span aria-hidden="true" className="w-10 h-10 flex-shrink-0 rounded-full border-2 border-gold-500 flex items-center justify-center font-serif text-gold-800 dark:text-gold-400">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-charcoal-900 dark:text-cream-100 mb-2">{s.title}</h3>
                      <p className="text-charcoal-600 dark:text-charcoal-300 leading-[1.9]">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="faq" className="mb-20">
              <h2 id="faq" className="font-serif text-3xl text-charcoal-900 dark:text-cream-100 mb-8">{page.faqHeading}</h2>
              <FaqList items={page.faq} />
            </section>

            <section className="p-10 bg-charcoal-900 text-center">
              <h2 className="font-serif text-2xl text-cream-100 mb-3">{page.ctaTitle}</h2>
              <p className="text-charcoal-300 mb-6 max-w-lg mx-auto">{page.ctaText}</p>
              <Link href={`${href('/')}#contact`} className="btn-gold rounded-none text-xs tracking-[0.2em] uppercase inline-block">
                <span>{page.ctaButton}</span>
              </Link>
            </section>

            <nav aria-label={ui.servicePages.allServicesHint} className="mt-14">
              <h2 className="text-xs tracking-[0.2em] uppercase text-gold-800 dark:text-gold-500 mb-4 font-medium">{ui.servicePages.label}</h2>
              <ul className="flex flex-wrap gap-3">
                {serviceSlugs.map((s) => (
                  <li key={s}>
                    <Link href={href(`/services/${s}`)} className="btn-outline-gold rounded-none text-xs inline-block">
                      {ui.servicePages.names[s]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </PageShell>
  )
}
