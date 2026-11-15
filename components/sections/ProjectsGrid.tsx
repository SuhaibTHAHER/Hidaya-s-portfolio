'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Box } from 'lucide-react'
import AnimateIn from '@/components/ui/AnimateIn'
import SectionHeader from '@/components/ui/SectionHeader'
import type { LocalizedProject } from '@/lib/content'
import type { UI } from '@/lib/content/ui'

/** Only what a card needs, so the full project data never ships in the client bundle. */
export type ProjectCard = Pick<LocalizedProject, 'slug' | 'title' | 'subtitle' | 'category' | 'categoryLabel' | 'projectType' | 'medium' | 'tags'> & {
  href: string
  cover: Pick<LocalizedProject['cover'], 'src' | 'alt'>
}

export default function ProjectsGrid({ projects, ui, allHref }: { projects: ProjectCard[]; ui: UI; allHref: string }) {
  const t = ui.projects
  const [activeCategory, setActiveCategory] = useState('All')
  // Only categories that actually have projects, so no filter ever shows an empty grid.
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="section-padding bg-cream-50 dark:bg-charcoal-950">
      <div className="container-luxury">
        <SectionHeader
          label={t.label}
          title={t.title}
          subtitle={t.subtitle}
        />

        {/* Category Filter */}
        <AnimateIn delay={0.3}>
          <div className="flex flex-wrap gap-2 mt-10 mb-12" role="group" aria-label={t.filterLabel}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`px-5 py-2 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gold-700 text-white'
                    : 'border border-charcoal-200 dark:border-charcoal-700 text-charcoal-600 dark:text-charcoal-300 hover:border-gold-500 hover:text-gold-700'
                }`}
              >
                {cat === 'All' ? t.all : ui.categories[cat] ?? cat}
              </button>
            ))}
          </div>
        </AnimateIn>

        {/* Projects Grid */}
        <motion.ul layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.li
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link href={project.href} className="group block">
                  <div className="relative overflow-hidden aspect-[4/3] bg-cream-200 dark:bg-charcoal-900">
                    <Image
                      src={project.cover.src}
                      alt={project.cover.alt}
                      fill
                      className="object-cover project-img-zoom"
                      sizes="(max-width: 768px) calc((100vw - 3rem) * 1.34), (max-width: 1280px) 67vw, 512px"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/60 transition-all duration-500" />

                    {/* Hover content */}
                    <div aria-hidden="true" className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-4 group-hover:translate-y-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 text-xs bg-gold-700/90 text-white tracking-wide">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-cream-200 line-clamp-2">{project.subtitle}</p>
                      <div className="flex items-center gap-1 mt-4 text-gold-400 text-sm font-medium">
                        <span>{t.viewProject}</span>
                        <ArrowUpRight size={16} className="rtl:-scale-x-100" />
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 end-4 px-2 py-1 bg-charcoal-950/70 text-cream-200 text-xs tracking-widest">
                      {project.categoryLabel}
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="py-4 border-b border-cream-300 dark:border-charcoal-800">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-lg text-charcoal-900 dark:text-cream-100 group-hover:text-gold-700 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-charcoal-500 dark:text-charcoal-400 mt-1 tracking-wide">{project.projectType}</p>
                      </div>
                      <ArrowUpRight size={18} aria-hidden="true" className="text-charcoal-300 group-hover:text-gold-600 transition-colors mt-1 flex-shrink-0 rtl:-scale-x-100" />
                    </div>
                    <div className="flex flex-wrap gap-4 mt-3 text-xs text-charcoal-500 dark:text-charcoal-400">
                      <span className="flex items-center gap-1">
                        <Box size={11} aria-hidden="true" className="text-gold-600" />
                        {project.medium}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {/* View all */}
        <AnimateIn delay={0.4}>
          <div className="text-center mt-14">
            <Link href={allHref} className="btn-outline-gold rounded-none text-xs tracking-[0.2em] uppercase inline-block">
              {t.viewAll}
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
