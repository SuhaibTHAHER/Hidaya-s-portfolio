'use client'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import AnimateIn from '@/components/ui/AnimateIn'
import { stats } from '@/lib/data'

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section className="py-20 bg-charcoal-900 dark:bg-charcoal-950">
      <div className="container-luxury" ref={ref}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.1}>
              <div className="text-center group">
                {/* Real figure in the HTML for crawlers and screen readers; the count-up is visual only. */}
                <p className="sr-only">{stat.value}{stat.suffix} {stat.label}</p>
                <div aria-hidden="true" className="font-serif text-5xl md:text-6xl font-medium text-cream-50 mb-2">
                  {inView ? (
                    <CountUp end={stat.value} duration={2.5} delay={i * 0.2} />
                  ) : (
                    <span>0</span>
                  )}
                  <span className="text-gold-500">{stat.suffix}</span>
                </div>
                <div aria-hidden="true" className="divider-gold w-8 mx-auto my-3" />
                <div aria-hidden="true" className="text-xs tracking-[0.2em] uppercase text-charcoal-300 font-medium">
                  {stat.label}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
