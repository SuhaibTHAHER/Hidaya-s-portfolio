import type { QA } from '@/lib/content/pages'

/**
 * Questions and answers rendered as open, crawlable HTML (question as h3, direct answer first),
 * matching the FAQPage structured data on the same page.
 */
export default function FaqList({ items }: { items: QA[] }) {
  return (
    <div className="divide-y divide-cream-300 dark:divide-charcoal-800 border-y border-cream-300 dark:border-charcoal-800">
      {items.map((f) => (
        <div key={f.q} className="py-6">
          <h3 className="font-serif text-xl text-charcoal-900 dark:text-cream-100 mb-3">{f.q}</h3>
          <p className="text-charcoal-600 dark:text-charcoal-300 leading-[1.9]">{f.a}</p>
        </div>
      ))}
    </div>
  )
}
