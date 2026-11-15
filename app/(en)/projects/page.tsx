import ProjectsIndexPage, { projectsIndexMetadata } from '@/components/pages/ProjectsIndexPage'

export const metadata = projectsIndexMetadata('en')

export default function Page() {
  return <ProjectsIndexPage locale="en" />
}
