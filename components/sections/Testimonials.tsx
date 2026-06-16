'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import AnimateIn from '@/components/ui/AnimateIn'
import SectionHeader from '@/components/ui/SectionHeader'
import { testimonials } from '@/lib/data'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section className="section-padding bg-cream-50 dark:bg-charcoal-950">
      <div className="container-luxury">
        <SectionHeader
          label="Testimonials"
          title="Client Stories"
          subtitle="The measure of great design is the experience it creates long after the project is complete."
          center
        />

        <div className="mt-16 max-w-4xl mx-auto">
          {/* Featured testimonial */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="glass p-10 md:p-14 text-center"
              >
                {/* Quote mark */}
                <div className="font-serif text-8xl text-gold-300 dark:text-gold-800 leading-none mb-4 select-none">&ldquo;</div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array(t.rating).fill(0).map((_, i) => (
                    <Star key={i} size={16} className="text-gold-500 fill-gold-500" />
                  ))}
                </div>

                <blockquote className="font-serif text-lg md:text-xl text-charcoal-700 dark:text-cream-200 leading-relaxed mb-8 italic">
                  {t.text}
                </blockquote>

                <div className="divider-gold w-12 mx-auto mb-6" />

                <div>
                  <div className="font-medium text-charcoal-900 dark:text-cream-100">{t.name}</div>
                  <div className="text-sm text-charcoal-500 dark:text-charcoal-400 mt-1">{t.role}</div>
                  <div className="text-xs text-gold-600 mt-1 tracking-wide">{t.project}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 border border-charcoal-200 dark:border-charcoal-700 flex items-center justify-center hover:border-gold-500 hover:text-gold-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === current ? 'w-6 h-2 bg-gold-600' : 'w-2 h-2 bg-charcoal-200 dark:bg-charcoal-700'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 border border-charcoal-200 dark:border-charcoal-700 flex items-center justify-center hover:border-gold-500 hover:text-gold-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* All testimonials mini grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-14">
            {testimonials.map((t, i) => (
              <AnimateIn key={t.id} delay={i * 0.08}>
                <button
                  onClick={() => setCurrent(i)}
                  className={`text-left p-4 border transition-all duration-300 w-full ${
                    i === current
                      ? 'border-gold-500 bg-gold-50 dark:bg-gold-900/10'
                      : 'border-cream-300 dark:border-charcoal-800 hover:border-gold-400'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gold-600 flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-xs font-medium text-charcoal-800 dark:text-cream-200">{t.name}</div>
                      <div className="text-xs text-charcoal-400">{t.role}</div>
                    </div>
                  </div>
                  <p className="text-xs text-charcoal-500 dark:text-charcoal-400 line-clamp-2 leading-relaxed">
                    {t.text}
                  </p>
                </button>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
