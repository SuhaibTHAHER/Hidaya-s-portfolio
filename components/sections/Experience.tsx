'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MapPin, Calendar, Award } from 'lucide-react'
import AnimateIn from '@/components/ui/AnimateIn'
import SectionHeader from '@/components/ui/SectionHeader'
import { experience } from '@/lib/data'

export default function Experience() {
  const [activeId, setActiveId] = useState<number>(experience[experience.length - 1].id)

  return (
    <section id="experience" className="section-padding bg-cream-100 dark:bg-charcoal-900">
      <div className="container-luxury">
        <SectionHeader
          label="Experience"
          title="Professional Journey"
          subtitle="From studio apprenticeship to independent practice — a track record of delivering beautiful, functional spaces."
        />

        <div className="mt-16 space-y-4">
          {experience.map((job, i) => (
            <AnimateIn key={job.id} delay={i * 0.1}>
              <div className="border border-cream-300 dark:border-charcoal-700 hover:border-gold-400 dark:hover:border-gold-700 transition-colors">
                {/* Header */}
                <button
                  onClick={() => setActiveId(activeId === job.id ? -1 : job.id)}
                  className="w-full flex items-start justify-between gap-4 p-6 md:p-8 text-left"
                  aria-expanded={activeId === job.id}
                >
                  <div className="flex gap-4 md:gap-6 items-start">
                    <div className="hidden md:flex w-12 h-12 bg-gold-100 dark:bg-charcoal-800 items-center justify-center text-gold-600 flex-shrink-0 mt-1">
                      <span className="font-serif font-bold text-lg">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-serif text-xl text-charcoal-900 dark:text-cream-100">{job.role}</h3>
                        <span className="px-2 py-0.5 text-xs border border-gold-400/40 text-gold-600 dark:text-gold-400">
                          {job.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-charcoal-500 dark:text-charcoal-400">
                        <span className="font-medium text-charcoal-700 dark:text-cream-200">{job.company}</span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-gold-500" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-gold-500" />
                          {job.period}
                        </span>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: activeId === job.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 mt-1"
                  >
                    <ChevronDown size={20} className="text-charcoal-400" />
                  </motion.div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence initial={false}>
                  {activeId === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 border-t border-cream-200 dark:border-charcoal-700 pt-6">
                        <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed mb-6">
                          {job.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Achievements */}
                          <div>
                            <h4 className="text-xs tracking-[0.2em] uppercase text-gold-600 mb-4 flex items-center gap-2">
                              <Award size={13} />
                              Key Achievements
                            </h4>
                            <ul className="space-y-3">
                              {job.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex gap-3 text-sm text-charcoal-600 dark:text-charcoal-300">
                                  <span className="text-gold-500 mt-0.5 flex-shrink-0">▸</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Skills Used */}
                          <div>
                            <h4 className="text-xs tracking-[0.2em] uppercase text-gold-600 mb-4">Skills Applied</h4>
                            <div className="flex flex-wrap gap-2">
                              {job.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="px-3 py-1.5 text-xs bg-cream-200 dark:bg-charcoal-800 text-charcoal-700 dark:text-charcoal-200 border border-cream-300 dark:border-charcoal-700"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
