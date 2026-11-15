import ProjectsGrid, { type ProjectCard } from '@/components/sections/ProjectsGrid'
import { projects } from '@/lib/projects'

// Server component: shows every project on the home page and trims each one to card fields
// before it reaches the client grid (keeps the client bundle small).
export default function Projects() {
  const cards: ProjectCard[] = projects.map(({ slug, title, subtitle, category, projectType, medium, tags, cover }) => ({
    slug, title, subtitle, category, projectType, medium, tags,
    cover: { src: cover.src, alt: cover.alt },
  }))
  return <ProjectsGrid projects={cards} />
}
