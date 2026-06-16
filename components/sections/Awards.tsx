'use client'
import AnimateIn from '@/components/ui/AnimateIn'
import SectionHeader from '@/components/ui/SectionHeader'
import { awards } from '@/lib/data'

export default function Awards() {
  return (
    <section id="awards" className="section-padding bg-cream-100 dark:bg-charcoal-900">
      <div className="container-luxury">
        <SectionHeader
          label="Recognition"
          title="Awards & Certifications"
          subtitle="Industry recognition and professional certifications that validate expertise and commitment to excellence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {awards.map((award, i) => (
            <AnimateIn key={award.id} delay={i * 0.1}>
              <div className="group p-6 bg-cream-50 dark:bg-charcoal-950 border border-cream-300 dark:border-charcoal-800 hover:border-gold-400 dark:hover:border-gold-700 transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{award.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-0.5 bg-gold-100 dark:bg-charcoal-800 text-gold-700 dark:text-gold-400 border border-gold-200 dark:border-gold-800 tracking-wide">
                        {award.year}
                      </span>
                    </div>
                    <h3 className="font-serif text-base text-charcoal-800 dark:text-cream-100 mb-1 leading-snug">
                      {award.title}
                    </h3>
                    <p className="text-xs text-gold-600 dark:text-gold-500 mb-3 tracking-wide font-medium">
                      {award.organization}
                    </p>
                    <p className="text-sm text-charcoal-500 dark:text-charcoal-400 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
