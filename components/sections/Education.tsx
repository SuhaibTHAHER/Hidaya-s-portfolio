'use client'
import { motion } from 'framer-motion'
import AnimateIn from '@/components/ui/AnimateIn'
import SectionHeader from '@/components/ui/SectionHeader'
import { education } from '@/lib/data'

export default function Education() {
  return (
    <section id="education" className="section-padding bg-cream-50 dark:bg-charcoal-950">
      <div className="container-luxury">
        <SectionHeader
          label="Education"
          title="Academic Foundation"
          subtitle="A formal education completed with distinction — and the determination to finish in three years."
        />

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500 via-gold-300 to-transparent" />

            {education.map((item, i) => (
              <AnimateIn key={item.id} delay={i * 0.2} direction="left">
                <div className="relative flex gap-8 mb-12 last:mb-0">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-cream-50 dark:bg-charcoal-950 border-2 border-gold-500 flex items-center justify-center text-xl shadow-sm">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <div className="glass p-6 md:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-serif text-xl text-charcoal-900 dark:text-cream-100">{item.institution}</h3>
                          <p className="text-charcoal-500 dark:text-charcoal-400 mt-1">{item.degree}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className="inline-block px-3 py-1 text-xs tracking-wider bg-gold-100 dark:bg-charcoal-800 text-gold-700 dark:text-gold-400 border border-gold-300 dark:border-gold-800">
                            {item.period}
                          </span>
                          {item.distinction && (
                            <div className="mt-2">
                              <span className="inline-flex items-center gap-1 px-3 py-1 text-xs tracking-wide bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                                ⚡ {item.distinction}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      <p className="text-sm text-charcoal-500 dark:text-charcoal-400 leading-relaxed mb-4">
                        {item.note}
                      </p>

                      {item.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.highlights.map((h) => (
                            <span
                              key={h}
                              className="px-3 py-1 text-xs border border-gold-300/50 dark:border-gold-800/50 text-charcoal-600 dark:text-charcoal-300"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center gap-2 mt-4 text-xs text-charcoal-400">
                        <span>📍</span>
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
