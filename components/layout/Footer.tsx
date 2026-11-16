import Link from 'next/link'
import { Mail, Phone, MapPin, Heart } from 'lucide-react'
import type { SiteContent } from '@/lib/content'

export default function Footer({ content }: { content: SiteContent }) {
  const { ui, personal, href } = content
  const year = new Date().getFullYear()
  const home = href('/')
  const footerLinks = [
    { label: ui.nav.about, href: `${home}#about` },
    { label: ui.footer.allProjects, href: href('/projects') },
    { label: ui.servicePages.names['residential-interior-design'], href: href('/services/residential-interior-design') },
    { label: ui.servicePages.names['commercial-interior-design'], href: href('/services/commercial-interior-design') },
    { label: ui.servicePages.names['3d-visualization'], href: href('/services/3d-visualization') },
    { label: ui.servicePages.process, href: href('/process') },
    { label: ui.nav.experience, href: `${home}#experience` },
    { label: ui.nav.contact, href: `${home}#contact` },
  ]

  return (
    <footer className="bg-charcoal-950 text-cream-200 pt-16 pb-8">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-charcoal-800">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl text-cream-100 mb-2">{personal.name}</p>
            <p className="text-xs tracking-[0.2em] uppercase text-gold-500 mb-6">{ui.roleLocation}</p>
            <p className="text-sm text-charcoal-300 leading-relaxed max-w-xs">{ui.footer.tagline}</p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xs tracking-[0.2em] uppercase text-gold-500 mb-6 font-medium">{ui.footer.contact}</h2>
            <address className="not-italic">
              <ul className="space-y-4">
                <li>
                  <a href={`mailto:${personal.email}`} className="flex items-center gap-3 text-sm text-charcoal-300 hover:text-cream-100 transition-colors group">
                    <Mail size={15} aria-hidden="true" className="text-gold-600 group-hover:text-gold-400 shrink-0" />
                    {personal.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${personal.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-charcoal-300 hover:text-cream-100 transition-colors group">
                    <Phone size={15} aria-hidden="true" className="text-gold-600 group-hover:text-gold-400 shrink-0" />
                    <span dir="ltr">{personal.phone}</span>
                  </a>
                </li>
                <li>
                  <span className="flex items-center gap-3 text-sm text-charcoal-300">
                    <MapPin size={15} aria-hidden="true" className="text-gold-600 shrink-0" />
                    {personal.location}
                  </span>
                </li>
              </ul>
            </address>
          </div>

          {/* Navigation */}
          <nav aria-label={ui.nav.footer}>
            <h2 className="text-xs tracking-[0.2em] uppercase text-gold-500 mb-6 font-medium">{ui.footer.navigation}</h2>
            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-charcoal-300 hover:text-cream-100 transition-colors hover-line">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-charcoal-400">
            © {year} {personal.name}. {ui.footer.rights}
          </p>
          <p className="flex items-center gap-1 text-xs text-charcoal-400">
            <span>{ui.footer.madeWith}</span>
            <Heart role="img" aria-label={ui.footer.love} size={13} className="text-gold-500 fill-gold-500" />
            <span>{ui.footer.inPalestine}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
