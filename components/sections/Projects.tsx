import ProjectsGrid, { type ProjectCard } from '@/components/sections/ProjectsGrid'
import { projects } from '@/lib/projects'

// Server component: trims the project data to card fields before it reaches the client grid.
export default function Projects() {
  const cards: ProjectCard[] = projects.map(({ slug, title, subtitle, category, projectType, medium, tags, cover }) => ({
    slug, title, subtitle, category, projectType, medium, tags,
    cover: { src: cover.src, alt: cover.alt },
  }))
  return <ProjectsGrid projects={cards} />
}
