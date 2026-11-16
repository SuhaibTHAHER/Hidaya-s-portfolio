'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimateIn from '@/components/ui/AnimateIn'
import SectionHeader from '@/components/ui/SectionHeader'
import type { SiteContent } from '@/lib/content'

interface SkillBarProps {
  name: string
  level: number
  delay: number
}

function SkillBar({ name, level, delay }: SkillBarProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-charcoal-700 dark:text-cream-200">{name}</span>
      </div>
      <div className="h-0.5 bg-cream-300 dark:bg-charcoal-700 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-gold-600 to-gold-400"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

const softwareIcons: Record<string, string> = {
  'AutoCAD': '📐',
  'SketchUp': '🏗️',
  '3ds Max': '🎨',
  'V-Ray': '✨',
  'Lumion': '🌄',
  'Adobe Photoshop': '🖼️',
  'Adobe Illustrator': '✒️',
  'Adobe InDesign': '📄',
}

export default function Skills({ ui, skills }: Pick<SiteContent, 'ui' | 'skills'>) {
  return (
    <section id="skills" className="section-padding bg-cream-100 dark:bg-charcoal-900">
      <div className="container-luxury">
        <SectionHeader
          label={ui.skills.label}
          title={ui.skills.title}
          subtitle={ui.skills.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          {/* Interior Design Skills */}
          <AnimateIn delay={0.1}>
            <div className="glass p-8 rounded-none">
              <div className="flex items-center gap-3 mb-8">
                <span aria-hidden="true" className="text-2xl">🏠</span>
                <div>
                  <h3 className="font-serif text-lg text-charcoal-800 dark:text-cream-100">{ui.skills.design}</h3>
                  <p className="text-xs text-charcoal-500 dark:text-charcoal-400 mt-0.5">{ui.skills.designSub}</p>
                </div>
              </div>
              <div className="space-y-5">
                {skills.design.map((skill, i) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.06} />
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Software Skills */}
          <AnimateIn delay={0.2}>
            <div className="glass p-8 rounded-none">
              <div className="flex items-center gap-3 mb-8">
                <span aria-hidden="true" className="text-2xl">💻</span>
                <div>
                  <h3 className="font-serif text-lg text-charcoal-800 dark:text-cream-100">{ui.skills.software}</h3>
                  <p className="text-xs text-charcoal-500 dark:text-charcoal-400 mt-0.5">{ui.skills.softwareSub}</p>
                </div>
              </div>
              <div className="space-y-5">
                {skills.software.map((skill, i) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.07} />
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Business Skills */}
          <AnimateIn delay={0.3}>
            <div className="glass p-8 rounded-none">
              <div className="flex items-center gap-3 mb-8">
                <span aria-hidden="true" className="text-2xl">💼</span>
                <div>
                  <h3 className="font-serif text-lg text-charcoal-800 dark:text-cream-100">{ui.skills.business}</h3>
                  <p className="text-xs text-charcoal-500 dark:text-charcoal-400 mt-0.5">{ui.skills.businessSub}</p>
                </div>
              </div>
              <div className="space-y-5">
                {skills.business.map((skill, i) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.08} />
                ))}
              </div>

              {/* Software icons grid */}
              <div className="mt-10 pt-8 border-t border-cream-300 dark:border-charcoal-700">
                <p className="text-xs tracking-[0.2em] uppercase text-gold-800 dark:text-gold-500 mb-5">{ui.skills.designSoftware}</p>
                <div className="grid grid-cols-4 gap-3">
                  {skills.software.map((skill) => (
                    <div
                      key={skill.name}
                      title={skill.name}
                      role="img"
                      aria-label={skill.name}
                      className="aspect-square flex items-center justify-center text-xl bg-cream-100 dark:bg-charcoal-800 hover:bg-gold-100 dark:hover:bg-charcoal-700 transition-colors cursor-default"
                    >
                      {softwareIcons[skill.name] || '🔧'}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
