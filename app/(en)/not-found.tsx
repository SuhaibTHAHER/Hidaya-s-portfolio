import NotFoundView, { notFoundMetadata } from '@/components/pages/NotFoundView'

export const metadata = notFoundMetadata('en')

export default function NotFound() {
  return <NotFoundView locale="en" />
}
