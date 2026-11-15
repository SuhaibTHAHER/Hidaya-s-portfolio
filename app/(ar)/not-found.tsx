import NotFoundView, { notFoundMetadata } from '@/components/pages/NotFoundView'

export const metadata = notFoundMetadata('ar')

export default function NotFound() {
  return <NotFoundView locale="ar" />
}
