import ProjectsIndexPage, { projectsIndexMetadata } from '@/components/pages/ProjectsIndexPage'

export const metadata = projectsIndexMetadata('ar')

export default function Page() {
  return <ProjectsIndexPage locale="ar" />
}
