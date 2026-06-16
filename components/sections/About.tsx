'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimateIn from '@/components/ui/AnimateIn'
import SectionHeader from '@/components/ui/SectionHeader'
import { personalInfo, interests } from '@/lib/data'

export default function About() {
  const paragraphs = personalInfo.bio.split('\n\n').filter(Boolean)

  return (
    <section id="about" className="section-padding bg-cream-50 dark:bg-charcoal-950">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Image Side */}
          <AnimateIn direction="left">
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/about.jpg"
                  alt="Hidaya Thaher - Interior Designer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold-500/30" />
              <div className="absolute -top-4 -left-4 w-20 h-20 border border-gold-500/20" />

              {/* Languages card */}
              <div className="absolute top-6 -right-6 glass p-5 shadow-lg min-w-[160px]">
                <div className="text-xs tracking-[0.15em] uppercase text-gold-600 mb-3">Languages</div>
                {personalInfo.languages.map((lang) => (
                  <div key={lang.name} className="mb-3 last:mb-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium text-charcoal-700 dark:text-cream-200">{lang.name}</span>
                      <span className="text-xs text-charcoal-400">{lang.level === 'Native' ? 'Native' : 'Pro'}</span>
                    </div>
                    <div className="h-0.5 bg-cream-300 dark:bg-charcoal-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-gold-600 to-gold-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Content Side */}
          <div>
            <SectionHeader
              label="About"
              title="The Designer Behind the Work"
            />

            <div className="mt-10 space-y-5">
              {paragraphs.map((para, i) => (
                <AnimateIn key={i} delay={i * 0.1 + 0.2}>
                  <p className="text-charcoal-600 dark:text-charcoal-300 leading-[1.8] text-[0.95rem]">
                    {para}
                  </p>
                </AnimateIn>
              ))}
            </div>

            {/* Expertise Tags */}
            <AnimateIn delay={0.5}>
              <div className="mt-10">
                <h4 className="text-xs tracking-[0.2em] uppercase text-gold-600 mb-4 font-medium">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Residential Design', 'Commercial Design', 'Space Planning',
                    'Material Selection', 'Interior Styling', 'Human-Centered Design',
                    'Visual Storytelling', 'Lighting Design',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs border border-gold-500/30 text-charcoal-600 dark:text-charcoal-300 hover:border-gold-500 hover:text-gold-700 dark:hover:text-gold-400 transition-colors tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>

            {/* Interests */}
            <AnimateIn delay={0.6}>
              <div className="mt-8">
                <h4 className="text-xs tracking-[0.2em] uppercase text-gold-600 mb-4 font-medium">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 text-xs bg-cream-200 dark:bg-charcoal-800 text-charcoal-600 dark:text-charcoal-300 rounded-full"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>

            {/* CTA */}
            <AnimateIn delay={0.7}>
              <div className="mt-10 flex gap-4">
                <a href="/cv.pdf" download className="btn-gold rounded-none text-xs tracking-[0.15em] uppercase">
                  <span>Download CV</span>
                </a>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-outline-gold rounded-none text-xs tracking-[0.15em] uppercase"
                >
                  Get in Touch
                </button>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  )
}
