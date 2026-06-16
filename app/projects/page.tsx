import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, MapPin, Clock, Ruler } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import BackToTop from '@/components/ui/BackToTop'
import { projects } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Complete portfolio of interior design projects — residential, commercial, and hospitality spaces.',
}

export default function ProjectsPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen bg-cream-50 dark:bg-charcoal-950">
        {/* Hero */}
        <div className="pt-32 pb-20 bg-charcoal-950 text-cream-50">
          <div className="container-luxury">
            <span className="section-label mb-4 block">Portfolio</span>
            <h1 className="font-serif text-5xl md:text-6xl font-medium mb-6">All Projects</h1>
            <p className="text-charcoal-400 max-w-xl leading-relaxed">
              Eight projects across residential, commercial, hospitality, and retail — each one a story of transformation.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="container-luxury py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group block">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/50 transition-all duration-500" />
                  <div className="absolute top-4 right-4 px-2 py-1 bg-charcoal-950/70 text-cream-200 text-xs tracking-widest">
                    {project.year}
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-2 py-1 bg-gold-600 text-white text-xs tracking-wider">
                      Featured
                    </div>
                  )}
                </div>
                <div className="py-5 border-b border-cream-300 dark:border-charcoal-800">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-serif text-xl text-charcoal-900 dark:text-cream-100 group-hover:text-gold-600 transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-sm text-charcoal-500 dark:text-charcoal-400 mt-1">{project.subtitle}</p>
                    </div>
                    <ArrowUpRight size={18} className="text-charcoal-300 group-hover:text-gold-600 transition-colors mt-1 flex-shrink-0" />
                  </div>
                  <div className="flex flex-wrap gap-4 mt-3 text-xs text-charcoal-400">
                    <span className="flex items-center gap-1">
                      <MapPin size={11} className="text-gold-500" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Ruler size={11} className="text-gold-500" />
                      {project.area}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} className="text-gold-500" />
                      {project.duration}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs border border-charcoal-200 dark:border-charcoal-700 text-charcoal-500 dark:text-charcoal-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
