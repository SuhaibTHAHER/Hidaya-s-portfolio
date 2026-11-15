import type { Locale } from '@/lib/i18n'
import { localePath } from '@/lib/i18n'
import { getUI } from '@/lib/content/ui'
import * as en from '@/lib/data'
import * as ar from '@/lib/data.ar'
import { projects as baseProjects, type Project, type ProjectImage } from '@/lib/projects'
import { projectsAr, type ProjectTranslation } from '@/lib/projects.ar'

/** All page content for one language, resolved on the server and passed down as props. */
export function getSiteContent(locale: Locale) {
  const d = locale === 'ar' ? ar : en
  return {
    locale,
    ui: getUI(locale),
    personal: d.personalInfo,
    stats: d.stats,
    skills: d.skills,
    experience: d.experience,
    education: d.education,
    services: d.services,
    expertise: d.expertise,
    interests: d.interests,
    href: (path: string) => localePath(locale, path),
  }
}
export type SiteContent = ReturnType<typeof getSiteContent>

export type LocalizedProject = Project & {
  /** The project title in the other language, shown as a secondary line. */
  otherTitle: string
  otherLang: Locale
  categoryLabel: string
}

/**
 * Projects in the requested language. Image files are shared; Arabic pages get Arabic alt text
 * and captions. Throws if an Arabic translation is missing, so an incomplete Arabic page can
 * never be built and published by accident.
 */
export function getProjects(locale: Locale): LocalizedProject[] {
  const ui = getUI(locale)
  return baseProjects.map((p) => {
    if (locale === 'en') {
      return { ...p, otherTitle: p.titleAr, otherLang: 'ar' as const, categoryLabel: ui.categories[p.category] ?? p.category }
    }
    // Local builds (ALLOW_UNTRANSLATED=1) and private Vercel preview deployments may render
    // English text where Arabic is still missing; a production build fails instead of publishing it.
    const allowFallback = process.env.ALLOW_UNTRANSLATED === '1' || process.env.VERCEL_ENV === 'preview'
    const t = projectsAr[p.slug] ?? (allowFallback ? fallbackTranslation(p) : undefined)
    if (!t) throw new Error(`Missing Arabic translation for project "${p.slug}" (lib/projects.ar.ts)`)
    const img = (i: ProjectImage): ProjectImage => {
      const ti = t.images[i.src] ?? (allowFallback ? { alt: i.alt, caption: i.caption } : undefined)
      if (!ti) throw new Error(`Missing Arabic alt/caption for ${i.src}`)
      return { ...i, alt: ti.alt, caption: ti.caption }
    }
    return {
      ...p,
      title: t.title,
      subtitle: t.subtitle,
      projectType: t.projectType,
      medium: ui.medium,
      overview: t.overview,
      highlights: t.highlights,
      materials: t.materials,
      palette: t.palette,
      tags: t.tags,
      cover: img(p.cover),
      images: p.images.map(img),
      otherTitle: p.title,
      otherLang: 'en' as const,
      categoryLabel: ui.categories[p.category] ?? p.category,
    }
  })
}

function fallbackTranslation(p: Project): ProjectTranslation {
  return {
    title: p.title, subtitle: p.subtitle, projectType: p.projectType, overview: p.overview,
    highlights: p.highlights, materials: p.materials, palette: p.palette, tags: p.tags, images: {},
  }
}
