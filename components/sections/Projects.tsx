'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, MapPin, Clock } from 'lucide-react'
import AnimateIn from '@/components/ui/AnimateIn'
import SectionHeader from '@/components/ui/SectionHeader'
import { projects } from '@/lib/data'

const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Retail']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="section-padding bg-cream-50 dark:bg-charcoal-950">
      <div className="container-luxury">
        <SectionHeader
          label="Portfolio"
          title="Selected Works"
          subtitle="A curated selection of residential, commercial, and hospitality projects that define the practice."
        />

        {/* Category Filter */}
        <AnimateIn delay={0.3}>
          <div className="flex flex-wrap gap-2 mt-10 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gold-600 text-white'
                    : 'border border-charcoal-200 dark:border-charcoal-700 text-charcoal-500 dark:text-charcoal-400 hover:border-gold-500 hover:text-gold-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimateIn>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link href={`/projects/${project.slug}`} className="group block">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover project-img-zoom"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/60 transition-all duration-500" />

                    {/* Hover content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-4 group-hover:translate-y-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 text-xs bg-gold-600/90 text-white tracking-wide">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-serif text-xl text-cream-50 mb-1">{project.title}</h3>
                      <p className="text-sm text-cream-300 line-clamp-2">{project.subtitle}</p>
                      <div className="flex items-center gap-1 mt-4 text-gold-400 text-sm font-medium">
                        <span>View Case Study</span>
                        <ArrowUpRight size={16} />
                      </div>
                    </div>

                    {/* Year badge */}
                    <div className="absolute top-4 right-4 px-2 py-1 bg-charcoal-950/70 text-cream-200 text-xs tracking-widest">
                      {project.year}
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="py-4 border-b border-cream-300 dark:border-charcoal-800">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-lg text-charcoal-900 dark:text-cream-100 group-hover:text-gold-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-charcoal-400 mt-1 tracking-wide">{project.category}</p>
                      </div>
                      <ArrowUpRight size={18} className="text-charcoal-300 group-hover:text-gold-600 transition-colors mt-1 flex-shrink-0" />
                    </div>
                    <div className="flex flex-wrap gap-4 mt-3 text-xs text-charcoal-400">
                      <span className="flex items-center gap-1">
                        <MapPin size={11} className="text-gold-500" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} className="text-gold-500" />
                        {project.duration}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all */}
        <AnimateIn delay={0.4}>
          <div className="text-center mt-14">
            <Link href="/projects" className="btn-outline-gold rounded-none text-xs tracking-[0.2em] uppercase inline-block">
              View All Projects
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
