import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Education from '@/components/sections/Education'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Services from '@/components/sections/Services'
import Stats from '@/components/sections/Stats'
import Contact from '@/components/sections/Contact'
import JsonLd from '@/components/seo/JsonLd'
import PageShell from '@/components/pages/PageShell'
import { getSiteContent } from '@/lib/content'
import type { Locale } from '@/lib/i18n'
import { homePageGraph, pageMetadata, DESCRIPTIONS, HOME_TITLES } from '@/lib/site'

export const homeMetadata = (locale: Locale): Metadata =>
  pageMetadata({ locale, title: HOME_TITLES[locale], absoluteTitle: true, description: DESCRIPTIONS[locale], path: '/' })

export default function HomePage({ locale }: { locale: Locale }) {
  const c = getSiteContent(locale)
  return (
    <PageShell content={c} path="/">
      <JsonLd data={homePageGraph(locale)} />
      <main id="main">
        <Hero ui={c.ui} personal={c.personal} stats={c.stats} locale={locale} />
        <Stats stats={c.stats} />
        <About ui={c.ui} personal={c.personal} expertise={c.expertise} interests={c.interests} projectsHref={c.href('/projects')} />
        <Projects locale={locale} />
        <Services ui={c.ui} services={c.services} base={locale === 'ar' ? '/ar' : ''} />
        <Skills ui={c.ui} skills={c.skills} />
        <Education ui={c.ui} education={c.education} />
        <Experience ui={c.ui} experience={c.experience} />
        <Contact ui={c.ui} personal={c.personal} />
      </main>
    </PageShell>
  )
}
