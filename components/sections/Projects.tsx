import ProjectsGrid, { type ProjectCard } from '@/components/sections/ProjectsGrid'
import { getProjects } from '@/lib/content'
import { getUI } from '@/lib/content/ui'
import { type Locale, localePath } from '@/lib/i18n'

// Server component: shows every project on the home page and trims each one to card fields
// before it reaches the client grid (keeps the client bundle small and single-language).
export default function Projects({ locale }: { locale: Locale }) {
  const cards: ProjectCard[] = getProjects(locale).map(({ slug, title, subtitle, category, categoryLabel, projectType, medium, tags, cover }) => ({
    slug, title, subtitle, category, categoryLabel, projectType, medium, tags,
    href: localePath(locale, `/projects/${slug}`),
    cover: { src: cover.src, alt: cover.alt },
  }))
  return <ProjectsGrid projects={cards} ui={getUI(locale)} allHref={localePath(locale, '/projects')} />
}
