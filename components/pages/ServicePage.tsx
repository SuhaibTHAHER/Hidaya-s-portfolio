import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, CheckCircle } from 'lucide-react'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import PageShell from '@/components/pages/PageShell'
import FaqList from '@/components/sections/FaqList'
import { getProjects, getSiteContent } from '@/lib/content'
import { servicePages, serviceProjects, serviceSlugs, type ServiceSlug } from '@/lib/content/pages'
import { type Locale, localePath } from '@/lib/i18n'
import { pageMetadata, serviceGraph } from '@/lib/site'

export const serviceStaticParams = () => serviceSlugs.map((slug) => ({ slug }))

const isServiceSlug = (s: string): s is ServiceSlug => (serviceSlugs as readonly string[]).includes(s)

export function serviceMetadata(locale: Locale, slug: string): Metadata {
  if (!isServiceSlug(slug)) return { robots: { index: false } }
  const page = servicePages[slug][locale]
  return pageMetadata({ locale, title: page.metaTitle, description: page.metaDescription, path: `/services/${slug}` })
}

export default function ServicePage({ locale, slug }: { locale: Locale; slug: string }) {
  if (!isServiceSlug(slug)) notFound()
  const c = getSiteContent(locale)
  const { ui } = c
  const page = servicePages[slug][locale]
  const all = getProjects(locale)
  const projects = serviceProjects[slug].map((s) => all.find((p) => p.slug === s)!).filter(Boolean)
  const href = (path: string) => localePath(locale, path)
  const others = serviceSlugs.filter((s) => s !== slug)

  return (
    <PageShell content={c} path={`/services/${slug}`}>
      <JsonLd
        data={serviceGraph(
          { path: `/services/${slug}`, name: page.h1, description: page.metaDescription, faq: page.faq, projects },
          locale,
          ui,
        )}
      />
      <main id="main" className="min-h-screen bg-cream-50 dark:bg-charcoal-950">
        {/* Hero */}
        <div className="pt-32 pb-20 bg-charcoal-950 text-cream-50">
          <div className="container-luxury">
            <Breadcrumbs items={[{ name: ui.crumbs.home, href: href('/') }, { name: page.h1 }]} label={ui.crumbs.label} className="mb-8 text-charcoal-400" />
            <span className="section-label on-dark mb-4 block">{ui.servicePages.label}</span>
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
            {page.sections.map((s, i) => (
              <section key={s.heading} className="mb-14" aria-labelledby={`s-${i}`}>
                <h2 id={`s-${i}`} className="font-serif text-3xl text-charcoal-900 dark:text-cream-100 mb-5">{s.heading}</h2>
                <div className="space-y-4">
                  {s.paragraphs.map((p) => (
                    <p key={p} className="text-charcoal-600 dark:text-charcoal-300 leading-[1.9]">{p}</p>
                  ))}
                </div>
                {s.bullets.length > 0 && (
                  <ul className="mt-5 space-y-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3 items-start">
                        <CheckCircle size={18} aria-hidden="true" className="text-gold-600 mt-0.5 flex-shrink-0" />
                        <span className="text-charcoal-600 dark:text-charcoal-300">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Real projects supporting this service */}
          <section className="mt-6 pt-14 border-t border-cream-300 dark:border-charcoal-800" aria-labelledby="service-projects">
            <span className="section-label mb-3 block">{ui.projects.label}</span>
            <h2 id="service-projects" className="font-serif text-3xl text-charcoal-900 dark:text-cream-100 mb-10">{page.projectsHeading}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link href={href(`/projects/${p.slug}`)} className="group block">
                    <div className="relative overflow-hidden aspect-[4/3] bg-cream-200 dark:bg-charcoal-900">
                      <Image
                        src={p.cover.src}
                        alt={p.cover.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) calc((100vw - 3rem) * 1.34), (max-width: 1280px) 67vw, 512px"
                      />
                    </div>
                    <div className="py-4 border-b border-cream-300 dark:border-charcoal-800 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-lg text-charcoal-800 dark:text-cream-100 group-hover:text-gold-700 transition-colors">{p.title}</h3>
                        <p className="text-xs text-charcoal-500 dark:text-charcoal-400 mt-1">{p.categoryLabel} · {p.projectType}</p>
                      </div>
                      <ArrowUpRight size={18} aria-hidden="true" className="text-charcoal-300 group-hover:text-gold-600 transition-colors mt-1 flex-shrink-0 rtl:-scale-x-100" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ */}
          {page.faq.length > 0 && (
            <section className="mt-20 max-w-4xl mx-auto" aria-labelledby="faq">
              <h2 id="faq" className="font-serif text-3xl text-charcoal-900 dark:text-cream-100 mb-8">{page.faqHeading}</h2>
              <FaqList items={page.faq} />
            </section>
          )}

          {/* CTA + other services */}
          <section className="mt-20 p-10 bg-charcoal-900 text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl text-cream-100 mb-3">{page.ctaTitle}</h2>
            <p className="text-charcoal-300 mb-6 max-w-lg mx-auto">{page.ctaText}</p>
            <Link href={`${href('/')}#contact`} className="btn-gold rounded-none text-xs tracking-[0.2em] uppercase inline-block">
              <span>{page.ctaButton}</span>
            </Link>
          </section>

          <nav aria-label={ui.servicePages.otherServices} className="mt-14 max-w-4xl mx-auto">
            <h2 className="text-xs tracking-[0.2em] uppercase text-gold-800 dark:text-gold-500 mb-4 font-medium">{ui.servicePages.otherServices}</h2>
            <ul className="flex flex-wrap gap-3">
              {others.map((s) => (
                <li key={s}>
                  <Link href={href(`/services/${s}`)} className="btn-outline-gold rounded-none text-xs inline-block">
                    {ui.servicePages.names[s]}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={href('/process')} className="btn-outline-gold rounded-none text-xs inline-block">
                  {ui.servicePages.process}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </PageShell>
  )
}
