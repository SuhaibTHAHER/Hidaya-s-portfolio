import ServicePage, { serviceMetadata, serviceStaticParams } from '@/components/pages/ServicePage'

export const dynamicParams = false
export const generateStaticParams = serviceStaticParams
export const generateMetadata = ({ params }: { params: { slug: string } }) => serviceMetadata('en', params.slug)

export default function Page({ params }: { params: { slug: string } }) {
  return <ServicePage locale="en" slug={params.slug} />
}
