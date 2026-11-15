'use client'
import { motion } from 'framer-motion'
import { ArrowDown, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { personalInfo, stats } from '@/lib/data'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream-50 dark:bg-charcoal-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gold accent line left */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-2 md:left-4 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold-500 to-transparent origin-top"
      />

      <div className="container-luxury w-full pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] text-charcoal-900 dark:text-cream-100 mb-6">
              <span
                className="section-label mb-4 block font-sans leading-normal motion-safe:animate-hero-up"
                style={{ animationDelay: '0.05s' }}
              >
                {personalInfo.name} · {personalInfo.title} · {personalInfo.location}
              </span>{' '}
              <span className="block motion-safe:animate-hero-up" style={{ animationDelay: '0.12s' }}>
                Crafting Spaces <br />
                <span className="italic text-gold-gradient">That Breathe</span>
              </span>
            </h1>

            <p
              className="text-lg text-charcoal-500 dark:text-charcoal-400 max-w-xl leading-relaxed mb-10 motion-safe:animate-hero-up"
              style={{ animationDelay: '0.25s' }}
            >
              I design interiors that tell stories — spaces where architecture,
              material, and light work together to create experiences worth remembering.
            </p>

            <div className="flex flex-wrap gap-4 motion-safe:animate-hero-up" style={{ animationDelay: '0.4s' }}>
              <a href="#projects" className="btn-gold rounded-none group">
                <span className="flex items-center gap-2 text-sm tracking-[0.1em] uppercase">
                  View Portfolio
                  <ExternalLink size={15} aria-hidden="true" />
                </span>
              </a>
              <a href="#contact" className="btn-outline-gold rounded-none">
                <span className="text-sm tracking-[0.1em] uppercase">Let&apos;s Talk</span>
              </a>
            </div>

            {/* Stats mini (same figures as the Stats section) */}
            <dl
              className="flex gap-10 mt-14 pt-10 border-t border-cream-300 dark:border-charcoal-800 motion-safe:animate-hero-up"
              style={{ animationDelay: '0.55s' }}
            >
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="text-xs tracking-widest uppercase text-charcoal-500 dark:text-charcoal-400 mt-1">{stat.short}</dt>
                  <dd className="font-serif text-2xl font-medium text-charcoal-900 dark:text-cream-100">
                    {stat.value}{stat.suffix}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Portrait */}
          <div className="order-1 lg:order-2 relative motion-safe:animate-hero-in">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-full">
              {/* Gold border frame */}
              <div aria-hidden="true" className="absolute -inset-3 border border-gold-500/30 z-10 pointer-events-none" />
              <div aria-hidden="true" className="absolute -inset-6 border border-gold-500/10 z-10 pointer-events-none" />

              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={personalInfo.portrait.src}
                  alt={personalInfo.portrait.alt}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Overlay card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="absolute z-20 bottom-6 left-3 sm:-left-6 glass p-4 shadow-xl"
              >
                <p className="text-xs tracking-[0.15em] uppercase text-gold-800 dark:text-gold-500 mb-1">Currently</p>
                <p className="font-serif text-sm text-charcoal-800 dark:text-cream-100">Available for Projects</p>
                <p className="flex items-center gap-2 mt-2">
                  <span aria-hidden="true" className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-charcoal-500 dark:text-charcoal-400">Open for collaboration</span>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-charcoal-500 hover:text-gold-600 transition-colors"
        aria-label="Scroll to projects"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.span aria-hidden="true" animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  )
}
