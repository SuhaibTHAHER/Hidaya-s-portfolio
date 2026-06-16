import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Clock, Ruler, Calendar, Star, CheckCircle, AlertCircle, Lightbulb } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import BackToTop from '@/components/ui/BackToTop'
import { projects } from '@/lib/data'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: project.title,
    description: project.overview.substring(0, 160),
    openGraph: {
      title: project.title,
      description: project.subtitle,
      images: [{ url: project.coverImage }],
    },
  }
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const related = projects.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 3)
  const otherRelated = projects.filter((p) => p.slug !== project.slug && p.category !== project.category).slice(0, 3 - related.length)
  const relatedProjects = [...related, ...otherRelated].slice(0, 3)

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen bg-cream-50 dark:bg-charcoal-950">
        {/* Hero */}
        <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end pb-16">
            <div className="container-luxury">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-cream-300 hover:text-cream-100 transition-colors mb-8 text-sm"
              >
                <ArrowLeft size={16} />
                All Projects
              </Link>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs bg-gold-600/90 text-white tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream-50 mb-3">{project.title}</h1>
              <p className="text-cream-300 text-lg">{project.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Project Meta */}
        <div className="bg-charcoal-900 border-b border-charcoal-800">
          <div className="container-luxury py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: MapPin, label: 'Location', value: project.location },
                { icon: Ruler, label: 'Area', value: project.area },
                { icon: Clock, label: 'Duration', value: project.duration },
                { icon: Calendar, label: 'Year', value: project.year },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon size={16} className="text-gold-500 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-charcoal-400 tracking-wide uppercase">{label}</div>
                    <div className="text-sm text-cream-200 font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container-luxury py-20">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <section className="mb-16">
              <span className="section-label mb-3 block">Overview</span>
              <p className="text-charcoal-600 dark:text-charcoal-300 leading-[1.9] text-lg">{project.overview}</p>
            </section>

            <div className="divider-gold mb-16" />

            {/* Client Goals */}
            <section className="mb-16">
              <span className="section-label mb-3 block">Client Goals</span>
              <h2 className="font-serif text-3xl text-charcoal-900 dark:text-cream-100 mb-6">What the Client Needed</h2>
              <ul className="space-y-3">
                {project.clientGoals.map((goal, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle size={18} className="text-gold-600 mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal-600 dark:text-charcoal-300">{goal}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="divider-gold mb-16" />

            {/* Research & Concept */}
            <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <span className="section-label mb-3 block">Research</span>
                <h2 className="font-serif text-2xl text-charcoal-900 dark:text-cream-100 mb-4">The Groundwork</h2>
                <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed">{project.research}</p>
              </div>
              <div>
                <span className="section-label mb-3 block">Design Concept</span>
                <h2 className="font-serif text-2xl text-charcoal-900 dark:text-cream-100 mb-4">The Idea</h2>
                <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed">{project.concept}</p>
              </div>
            </section>

            <div className="divider-gold mb-16" />

            {/* Materials */}
            <section className="mb-16">
              <span className="section-label mb-3 block">Material Selection</span>
              <h2 className="font-serif text-3xl text-charcoal-900 dark:text-cream-100 mb-8">Palette & Materials</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.materials.map((mat, i) => (
                  <div key={i} className="p-5 border border-cream-300 dark:border-charcoal-700 hover:border-gold-400 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gold-100 dark:bg-charcoal-800 flex items-center justify-center text-gold-600 flex-shrink-0 text-sm font-medium">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <h4 className="font-medium text-charcoal-800 dark:text-cream-100">{mat.name}</h4>
                        <p className="text-sm text-charcoal-500 dark:text-charcoal-400 mt-0.5">{mat.use}</p>
                        <span className="text-xs text-gold-600 mt-1 block">{mat.note}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="divider-gold mb-16" />

            {/* Challenges & Solutions */}
            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <span className="section-label mb-3 block">Challenges</span>
                  <h2 className="font-serif text-2xl text-charcoal-900 dark:text-cream-100 mb-6">What We Faced</h2>
                  <ul className="space-y-4">
                    {project.challenges.map((c, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <AlertCircle size={16} className="text-charcoal-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-charcoal-600 dark:text-charcoal-300">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="section-label mb-3 block">Solutions</span>
                  <h2 className="font-serif text-2xl text-charcoal-900 dark:text-cream-100 mb-6">How We Solved It</h2>
                  <ul className="space-y-4">
                    {project.solutions.map((s, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <Lightbulb size={16} className="text-gold-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-charcoal-600 dark:text-charcoal-300">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <div className="divider-gold mb-16" />

            {/* Timeline */}
            <section className="mb-16">
              <span className="section-label mb-3 block">Project Timeline</span>
              <h2 className="font-serif text-3xl text-charcoal-900 dark:text-cream-100 mb-10">Design Process</h2>
              <div className="relative">
                <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-gold-500 to-transparent" />
                <div className="space-y-6">
                  {project.timeline.map((phase, i) => (
                    <div key={i} className="flex gap-6 pl-12 relative">
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full border-2 border-gold-500 bg-cream-50 dark:bg-charcoal-950 flex items-center justify-center text-xs font-medium text-gold-600">
                        {i + 1}
                      </div>
                      <div className="flex-1 pb-2">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h4 className="font-medium text-charcoal-800 dark:text-cream-100">{phase.phase}</h4>
                          <span className="text-xs px-2 py-0.5 bg-gold-100 dark:bg-charcoal-800 text-gold-700 dark:text-gold-400 border border-gold-200 dark:border-gold-800">
                            {phase.duration}
                          </span>
                        </div>
                        <p className="text-sm text-charcoal-500 dark:text-charcoal-400">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="divider-gold mb-16" />

            {/* Results */}
            <section className="mb-16">
              <span className="section-label mb-3 block">Results</span>
              <h2 className="font-serif text-3xl text-charcoal-900 dark:text-cream-100 mb-6">The Outcome</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.results.map((result, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-cream-100 dark:bg-charcoal-900 border border-cream-300 dark:border-charcoal-800">
                    <span className="text-gold-600 font-serif text-lg flex-shrink-0">✓</span>
                    <span className="text-sm text-charcoal-700 dark:text-charcoal-200">{result}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonial */}
            <section className="mb-16 p-10 bg-charcoal-900 dark:bg-charcoal-900">
              <div className="text-gold-500 font-serif text-6xl leading-none mb-4">&ldquo;</div>
              <div className="flex justify-center gap-1 mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} size={14} className="text-gold-500 fill-gold-500" />
                ))}
              </div>
              <blockquote className="font-serif text-xl text-cream-100 italic leading-relaxed mb-6 text-center">
                {project.testimonial.text}
              </blockquote>
              <div className="text-center">
                <div className="font-medium text-cream-100">{project.testimonial.author}</div>
                <div className="text-sm text-charcoal-400 mt-1">{project.testimonial.role}</div>
              </div>
            </section>

            {/* Gallery */}
            <section className="mb-16">
              <span className="section-label mb-3 block">Gallery</span>
              <h2 className="font-serif text-3xl text-charcoal-900 dark:text-cream-100 mb-8">Project Photography</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.slice(1).map((img, i) => (
                  <div key={i} className={`relative overflow-hidden ${i === 0 ? 'md:col-span-2 aspect-video' : 'aspect-[4/3]'}`}>
                    <Image
                      src={img}
                      alt={`${project.title} — view ${i + 2}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <section className="mt-20 pt-16 border-t border-cream-300 dark:border-charcoal-800">
              <span className="section-label mb-3 block">More Work</span>
              <h2 className="font-serif text-3xl text-charcoal-900 dark:text-cream-100 mb-10">Related Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((p) => (
                  <Link key={p.slug} href={`/projects/${p.slug}`} className="group block">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <Image
                        src={p.coverImage}
                        alt={p.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-600"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="py-3 border-b border-cream-300 dark:border-charcoal-800">
                      <h3 className="font-serif text-lg text-charcoal-800 dark:text-cream-100 group-hover:text-gold-600 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs text-charcoal-400 mt-1">{p.category} · {p.year}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
