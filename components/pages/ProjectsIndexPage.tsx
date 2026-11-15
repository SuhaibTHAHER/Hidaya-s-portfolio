import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import PageShell from '@/components/pages/PageShell'
import { getProjects, getSiteContent } from '@/lib/content'
import { getUI, fmt } from '@/lib/content/ui'
import { type Locale, localePath } from '@/lib/i18n'
import { pageMetadata, projectsIndexGraph } from '@/lib/site'

export const projectsIndexMetadata = (locale: Locale): Metadata => {
  const ui = getUI(locale)
  return pageMetadata({ locale, title: ui.projectsPage.metaTitle, description: ui.projectsPage.metaDescription, path: '/projects' })
}

export default function ProjectsIndexPage({ locale }: { locale: Locale }) {
  const c = getSiteContent(locale)
  const { ui } = c
  const projects = getProjects(locale)
  return (
    <PageShell content={c} path="/projects">
      <JsonLd data={projectsIndexGraph(projects, locale, ui)} />
      <main id="main" className="min-h-screen bg-cream-50 dark:bg-charcoal-950">
        {/* Hero */}
        <div className="pt-32 pb-20 bg-charcoal-950 text-cream-50">
          <div className="container-luxury">
            <Breadcrumbs
              items={[{ name: ui.crumbs.home, href: localePath(locale, '/') }, { name: ui.crumbs.projects }]}
              className="mb-8 text-charcoal-400"
            />
            <span className="section-label on-dark mb-4 block">{ui.projectsPage.label}</span>
            <h1 className="font-serif text-5xl md:text-6xl font-medium mb-6">{ui.projectsPage.h1}</h1>
            <p className="text-charcoal-300 max-w-xl leading-relaxed">{fmt(ui.projectsPage.intro, { n: projects.length })}</p>
          </div>
        </div>

        {/* Grid */}
        <div className="container-luxury py-20">
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <li key={project.slug}>
                <Link href={localePath(locale, `/projects/${project.slug}`)} className="group block">
                  <div className="relative overflow-hidden aspect-[4/3] bg-cream-200 dark:bg-charcoal-900">
                    <Image
                      src={project.cover.src}
                      alt={project.cover.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) calc((100vw - 3rem) * 1.34), (max-width: 1280px) 67vw, 512px"
                      priority={i === 0}
                      loading={i === 0 ? undefined : i < 3 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/50 transition-all duration-500" />
                    <div className="absolute top-4 end-4 px-2 py-1 bg-charcoal-950/70 text-cream-200 text-xs tracking-widest">
                      {project.categoryLabel}
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 start-4 px-2 py-1 bg-gold-700 text-white text-xs tracking-wider">
                        {ui.projects.featured}
                      </div>
                    )}
                  </div>
                  <div className="py-5 border-b border-cream-300 dark:border-charcoal-800">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="font-serif text-xl text-charcoal-900 dark:text-cream-100 group-hover:text-gold-700 transition-colors">
                          {project.title}
                        </h2>
                        <p className="text-sm text-charcoal-500 dark:text-charcoal-400 mt-1">{project.subtitle}</p>
                      </div>
                      <ArrowUpRight size={18} aria-hidden="true" className="text-charcoal-300 group-hover:text-gold-600 transition-colors mt-1 flex-shrink-0 rtl:-scale-x-100" />
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-xs border border-charcoal-200 dark:border-charcoal-700 text-charcoal-500 dark:text-charcoal-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="text-center mt-16">
            <Link href={`${localePath(locale, '/')}#contact`} className="btn-gold rounded-none text-xs tracking-[0.2em] uppercase inline-block">
              <span>{ui.projectsPage.cta}</span>
            </Link>
          </div>
        </div>
      </main>
    </PageShell>
  )
}
