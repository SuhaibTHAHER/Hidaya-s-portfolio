import { notFound } from 'next/navigation'

// Any unmatched English URL renders this group's styled not-found page with a 404 status.
export default function CatchAll() {
  notFound()
}
