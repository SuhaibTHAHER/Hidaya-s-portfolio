import ProjectDetailPage, { projectMetadata, projectSlugs } from '@/components/pages/ProjectDetailPage'

export const dynamicParams = false
export const generateStaticParams = projectSlugs
export const generateMetadata = ({ params }: { params: { slug: string } }) => projectMetadata('en', params.slug)

export default function Page({ params }: { params: { slug: string } }) {
  return <ProjectDetailPage locale="en" slug={params.slug} />
}
