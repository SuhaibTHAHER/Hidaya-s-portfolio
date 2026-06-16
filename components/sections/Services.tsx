'use client'
import { motion } from 'framer-motion'
import { type LucideIcon, Home, Building2, Grid3X3, Box, Layers, MessageCircle, Armchair, Hammer, Lightbulb, Sparkles } from 'lucide-react'
import AnimateIn from '@/components/ui/AnimateIn'
import SectionHeader from '@/components/ui/SectionHeader'
import { services } from '@/lib/data'

const iconMap: Record<string, LucideIcon> = {
  Home, Building2, Grid: Grid3X3, Box, Layers, MessageCircle, Armchair, Hammer, Lightbulb, Sparkles,
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-cream-100 dark:bg-charcoal-900">
      <div className="container-luxury">
        <SectionHeader
          label="Services"
          title="What I Offer"
          subtitle="End-to-end design services for clients who believe their environment shapes their life."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-16">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Home
            return (
              <AnimateIn key={service.id} delay={i * 0.05}>
                <motion.div
                  className="group relative p-6 bg-cream-50 dark:bg-charcoal-950 border border-cream-300 dark:border-charcoal-800 hover:border-gold-400 dark:hover:border-gold-700 transition-all duration-400 cursor-default h-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-gold-100 dark:bg-charcoal-800 text-gold-600 mb-5 group-hover:bg-gold-600 group-hover:text-white transition-all duration-300">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-serif text-base text-charcoal-800 dark:text-cream-100 mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-charcoal-500 dark:text-charcoal-400 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-charcoal-400 dark:text-charcoal-500">
                        <span className="w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {/* Gold bottom accent on hover */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-500" />
                </motion.div>
              </AnimateIn>
            )
          })}
        </div>

        <AnimateIn delay={0.5}>
          <div className="text-center mt-14">
            <p className="text-charcoal-500 dark:text-charcoal-400 mb-6">
              Ready to transform your space?
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold rounded-none text-xs tracking-[0.2em] uppercase"
            >
              <span>Start a Project</span>
            </button>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
