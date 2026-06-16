'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-950 text-cream-200 pt-16 pb-8">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-charcoal-800">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-cream-100 mb-2">{personalInfo.name}</h3>
            <p className="text-xs tracking-[0.2em] uppercase text-gold-500 mb-6">Interior Designer</p>
            <p className="text-sm text-charcoal-400 leading-relaxed max-w-xs">
              Transforming spaces into timeless experiences through thoughtful, human-centered design.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold-500 mb-6 font-medium">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-sm text-charcoal-400 hover:text-cream-100 transition-colors group">
                  <Mail size={15} className="text-gold-600 group-hover:text-gold-400 shrink-0" />
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-charcoal-400 hover:text-cream-100 transition-colors group">
                  <Phone size={15} className="text-gold-600 group-hover:text-gold-400 shrink-0" />
                  {personalInfo.phone}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-sm text-charcoal-400">
                  <MapPin size={15} className="text-gold-600 shrink-0" />
                  {personalInfo.location}
                </span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold-500 mb-6 font-medium">Navigation</h4>
            <ul className="space-y-3">
              {['About', 'Projects', 'Services', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const el = document.querySelector(`#${item.toLowerCase()}`)
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-sm text-charcoal-400 hover:text-cream-100 transition-colors hover-line"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-charcoal-500">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-charcoal-500">
            <span>Designed & Built with</span>
            <span className="text-gold-600">♥</span>
            <span>in Palestine</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
