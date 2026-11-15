import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const footerLinks = [
  { label: 'About', href: '/#about' },
  { label: 'All Projects', href: '/projects' },
  { label: 'Services', href: '/#services' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-950 text-cream-200 pt-16 pb-8">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-charcoal-800">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl text-cream-100 mb-2">{personalInfo.name}</p>
            <p className="text-xs tracking-[0.2em] uppercase text-gold-500 mb-6">Interior Designer · Nablus, Palestine</p>
            <p className="text-sm text-charcoal-300 leading-relaxed max-w-xs">
              Transforming spaces into timeless experiences through thoughtful, human-centered design.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xs tracking-[0.2em] uppercase text-gold-500 mb-6 font-medium">Contact</h2>
            <address className="not-italic">
              <ul className="space-y-4">
                <li>
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-sm text-charcoal-300 hover:text-cream-100 transition-colors group">
                    <Mail size={15} aria-hidden="true" className="text-gold-600 group-hover:text-gold-400 shrink-0" />
                    {personalInfo.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-charcoal-300 hover:text-cream-100 transition-colors group">
                    <Phone size={15} aria-hidden="true" className="text-gold-600 group-hover:text-gold-400 shrink-0" />
                    {personalInfo.phone}
                  </a>
                </li>
                <li>
                  <span className="flex items-center gap-3 text-sm text-charcoal-300">
                    <MapPin size={15} aria-hidden="true" className="text-gold-600 shrink-0" />
                    {personalInfo.location}
                  </span>
                </li>
              </ul>
            </address>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h2 className="text-xs tracking-[0.2em] uppercase text-gold-500 mb-6 font-medium">Navigation</h2>
            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item.label}>
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
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-charcoal-400">
            <span>Designed &amp; Built with</span>
            <span className="text-gold-600" aria-label="love">♥</span>
            <span>in Palestine</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
