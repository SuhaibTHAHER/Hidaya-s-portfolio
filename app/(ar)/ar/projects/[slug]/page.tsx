import ProjectDetailPage, { projectMetadata, projectSlugs } from '@/components/pages/ProjectDetailPage'

export const dynamicParams = false
export const generateStaticParams = projectSlugs
export const generateMetadata = ({ params }: { params: { slug: string } }) => projectMetadata('ar', params.slug)

export default function Page({ params }: { params: { slug: string } }) {
  return <ProjectDetailPage locale="ar" slug={params.slug} />
}
