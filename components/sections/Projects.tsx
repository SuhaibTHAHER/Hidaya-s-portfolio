import ProjectsGrid, { type ProjectCard } from '@/components/sections/ProjectsGrid'
import { projects } from '@/lib/projects'

// Server component: shows the featured projects and trims them to card fields before they
// reach the client grid. The complete list lives on /projects.
export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const cards: ProjectCard[] = (featured.length ? featured : projects).slice(0, 6).map(({ slug, title, subtitle, category, projectType, medium, tags, cover }) => ({
    slug, title, subtitle, category, projectType, medium, tags,
    cover: { src: cover.src, alt: cover.alt },
  }))
  return <ProjectsGrid projects={cards} />
}
