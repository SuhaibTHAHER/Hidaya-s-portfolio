'use client'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { personalInfo } from '@/lib/data'

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream-50 dark:bg-charcoal-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gold accent line left */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-8 md:left-16 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold-500 to-transparent origin-top"
      />

      <div className="container-luxury w-full pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="section-label mb-4 block">Interior Designer · Nablus, Palestine</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] text-charcoal-900 dark:text-cream-100 mb-6"
            >
              Crafting Spaces <br />
              <span className="italic text-gold-gradient">That Breathe</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg text-charcoal-500 dark:text-charcoal-400 max-w-xl leading-relaxed mb-10"
            >
              I design interiors that tell stories — spaces where architecture,
              material, and light work together to create experiences worth remembering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-4"
            >
              <button onClick={scrollToProjects} className="btn-gold rounded-none group">
                <span className="flex items-center gap-2 text-sm tracking-[0.1em] uppercase">
                  View Portfolio
                  <ExternalLink size={15} />
                </span>
              </button>
              <button onClick={scrollToContact} className="btn-outline-gold rounded-none">
                <span className="text-sm tracking-[0.1em] uppercase">Let&apos;s Talk</span>
              </button>
            </motion.div>

            {/* Stats mini */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="flex gap-10 mt-14 pt-10 border-t border-cream-300 dark:border-charcoal-800"
            >
              {[
                { value: '30+', label: 'Projects' },
                { value: '25+', label: 'Clients' },
                { value: '3 yrs', label: 'Experience' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-2xl font-medium text-charcoal-900 dark:text-cream-100">{stat.value}</div>
                  <div className="text-xs tracking-widest uppercase text-charcoal-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-full overflow-hidden">
              {/* Gold border frame */}
              <div className="absolute -inset-3 border border-gold-500/30 z-10 pointer-events-none" />
              <div className="absolute -inset-6 border border-gold-500/10 z-10 pointer-events-none" />

              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
                alt="Luxury interior design by Hidaya Thaher"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Overlay card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="absolute bottom-6 -left-6 glass p-4 shadow-xl"
              >
                <div className="text-xs tracking-[0.15em] uppercase text-gold-600 mb-1">Currently</div>
                <div className="font-serif text-sm text-charcoal-800 dark:text-cream-100">Available for Projects</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-charcoal-500 dark:text-charcoal-400">Open for collaboration</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-charcoal-400 hover:text-gold-600 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  )
}
