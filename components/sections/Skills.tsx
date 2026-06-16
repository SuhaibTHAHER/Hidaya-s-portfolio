'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimateIn from '@/components/ui/AnimateIn'
import SectionHeader from '@/components/ui/SectionHeader'
import { skills } from '@/lib/data'

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
        <span className="text-xs text-gold-600 font-medium">{level}%</span>
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

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-cream-100 dark:bg-charcoal-900">
      <div className="container-luxury">
        <SectionHeader
          label="Skills"
          title="Craft Meets Technology"
          subtitle="A comprehensive skill set built across design thinking, digital tools, and project leadership."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          {/* Interior Design Skills */}
          <AnimateIn delay={0.1}>
            <div className="glass p-8 rounded-none">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">🏠</span>
                <div>
                  <h3 className="font-serif text-lg text-charcoal-800 dark:text-cream-100">Interior Design</h3>
                  <p className="text-xs text-charcoal-400 mt-0.5">Core Competencies</p>
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
                <span className="text-2xl">💻</span>
                <div>
                  <h3 className="font-serif text-lg text-charcoal-800 dark:text-cream-100">Software</h3>
                  <p className="text-xs text-charcoal-400 mt-0.5">Digital Toolset</p>
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
                <span className="text-2xl">💼</span>
                <div>
                  <h3 className="font-serif text-lg text-charcoal-800 dark:text-cream-100">Business</h3>
                  <p className="text-xs text-charcoal-400 mt-0.5">Professional Skills</p>
                </div>
              </div>
              <div className="space-y-5">
                {skills.business.map((skill, i) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.08} />
                ))}
              </div>

              {/* Software icons grid */}
              <div className="mt-10 pt-8 border-t border-cream-300 dark:border-charcoal-700">
                <p className="text-xs tracking-[0.2em] uppercase text-gold-600 mb-5">Design Software</p>
                <div className="grid grid-cols-4 gap-3">
                  {skills.software.map((skill) => (
                    <div
                      key={skill.name}
                      title={skill.name}
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
