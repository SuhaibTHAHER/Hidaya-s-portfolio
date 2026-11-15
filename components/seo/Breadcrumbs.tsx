import Link from 'next/link'

type Crumb = { name: string; href?: string }

/** Visible breadcrumb trail; the matching BreadcrumbList JSON-LD lives in lib/site.ts. */
export default function Breadcrumbs({ items, className = '' }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={`text-xs tracking-wide ${className}`}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-gold-500 transition-colors">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-cream-200">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
