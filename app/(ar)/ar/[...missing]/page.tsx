import { notFound } from 'next/navigation'

// Any unmatched /ar URL renders the Arabic not-found page with a 404 status.
export default function CatchAll() {
  notFound()
}
