import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Layers, Box, Images, Tag, CheckCircle } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import BackToTop from '@/components/ui/BackToTop'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { projects } from '@/lib/projects'
import { pageMetadata, projectGraph } from '@/lib/site'

interface Props {
  params: { slug: string }
}

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return { title: 'Project Not Found', robots: { index: false } }
  // Add "Interior Design" to the title when the project name lacks it and it still fits in ~60 chars.
  const long = `${project.title} – Interior Design`
  const useLong = !/interior|design/i.test(project.title) && long.length + ' | Hidaya Thaher'.length <= 60
  return pageMetadata({
    title: useLong ? long : project.title,
    // A complete sentence (never a truncated overview) that names the designer.
    description: `${project.subtitle}. 3D-rendered interior design concept by Hidaya Thaher.`,
    path: `/projects/${project.slug}`,
    type: 'article',
    image: {
      url: project.cover.src,
      width: project.cover.width,
      height: project.cover.height,
      alt: project.cover.alt,
    },
  })
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const sameCategory = projects.filter((p) => p.slug !== project.slug && p.category === project.category)
  const others = projects.filter((p) => p.slug !== project.slug && p.category !== project.category)
  const relatedProjects = [...sameCategory, ...others].slice(0, 3)
  const gallery = project.images.filter((img) => img.src !== project.cover.src)

  return (
    <>
      <JsonLd data={projectGraph(project)} />
      <ScrollProgress />
      <Navbar />
      <main id="main" className="min-h-screen bg-cream-50 dark:bg-charcoal-950">
        <article>
          {/* Hero */}
          <header className="relative h-[70vh] min-h-[500px] overflow-hidden bg-charcoal-900">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end pb-16">
              <div className="container-luxury">
                <Breadcrumbs
                  items={[{ name: 'Home', href: '/' }, { name: 'Projects', href: '/projects' }, { name: project.title }]}
                  className="mb-6 text-cream-300"
                />
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs bg-gold-700/90 text-white tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream-50 mb-3">{project.title}</h1>
                <p lang="ar" dir="rtl" className="text-cream-200 text-xl mb-3 text-left">
                  {project.titleAr}
                </p>
                <p className="text-cream-300 text-lg">{project.subtitle}</p>
              </div>
            </div>
          </header>

          {/* Project facts */}
          <div className="bg-charcoal-900 border-b border-charcoal-800">
            <dl className="container-luxury py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Tag, label: 'Category', value: project.category },
                { icon: Layers, label: 'Project Type', value: project.projectType },
                { icon: Box, label: 'Presentation', value: project.medium },
                { icon: Images, label: 'Views', value: `${project.images.length} renderings` },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label}>
                  <dt className="flex items-center gap-3 text-xs text-charcoal-300 tracking-wide uppercase">
                    <Icon size={16} aria-hidden="true" className="text-gold-500 flex-shrink-0" />
                    {label}
                  </dt>
                  <dd className="pl-7 text-sm text-cream-200 font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="container-luxury py-20">
            <div className="max-w-4xl mx-auto">
              {/* Overview */}
              <section className="mb-16" aria-labelledby="overview">
                <h2 id="overview" className="section-label mb-3 block">Overview</h2>
                <p className="text-charcoal-600 dark:text-charcoal-300 leading-[1.9] text-lg">{project.overview}</p>
              </section>

              <div className="divider-gold mb-16" />

              {/* Design highlights */}
              <section className="mb-16" aria-labelledby="highlights">
                <span className="section-label mb-3 block">Design</span>
                <h2 id="highlights" className="font-serif text-3xl text-charcoal-900 dark:text-cream-100 mb-6">
                  Design Highlights
                </h2>
                <ul className="space-y-3">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3 items-start">
                      <CheckCircle size={18} aria-hidden="true" className="text-gold-600 mt-0.5 flex-shrink-0" />
                      <span className="text-charcoal-600 dark:text-charcoal-300">{h}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="divider-gold mb-16" />

              {/* Materials & palette */}
              <section className="mb-16" aria-labelledby="materials">
                <span className="section-label mb-3 block">Material Selection</span>
                <h2 id="materials" className="font-serif text-3xl text-charcoal-900 dark:text-cream-100 mb-8">
                  Palette &amp; Materials
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.materials.map((mat, i) => (
                    <div key={mat.name} className="p-5 border border-cream-300 dark:border-charcoal-700 hover:border-gold-400 transition-colors">
                      <div className="flex items-start gap-3">
                        <div aria-hidden="true" className="w-8 h-8 bg-gold-100 dark:bg-charcoal-800 flex items-center justify-center text-gold-800 dark:text-gold-400 flex-shrink-0 text-sm font-medium">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        <div>
                          <h3 className="font-medium text-charcoal-800 dark:text-cream-100">{mat.name}</h3>
                          <p className="text-sm text-charcoal-500 dark:text-charcoal-400 mt-0.5">{mat.use}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {project.palette.length > 0 && (
                  <p className="mt-6 text-sm text-charcoal-500 dark:text-charcoal-400">
                    <span className="font-medium text-charcoal-700 dark:text-cream-200">Color palette: </span>
                    {project.palette.join(', ')}
                  </p>
                )}
              </section>

              {/* Gallery */}
              {gallery.length > 0 && (
                <section className="mb-16" aria-labelledby="gallery">
                  <span className="section-label mb-3 block">Gallery</span>
                  <h2 id="gallery" className="font-serif text-3xl text-charcoal-900 dark:text-cream-100 mb-8">
                    {project.title} Renderings
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {gallery.map((img, i) => (
                      <figure key={img.src} className={i === 0 && gallery.length % 2 === 1 ? 'md:col-span-2' : ''}>
                        <div className="relative overflow-hidden bg-cream-200 dark:bg-charcoal-900">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            width={img.width}
                            height={img.height}
                            className="w-full h-auto hover:scale-105 transition-transform duration-700"
                            sizes={i === 0 && gallery.length % 2 === 1 ? '(max-width: 960px) calc(100vw - 3rem), 896px' : '(max-width: 768px) calc(100vw - 3rem), 448px'}
                          />
                        </div>
                        <figcaption className="mt-2 text-xs text-charcoal-500 dark:text-charcoal-400 tracking-wide">
                          {img.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              )}

              {/* Call to action */}
              <section className="mb-4 p-10 bg-charcoal-900 text-center">
                <h2 className="font-serif text-2xl text-cream-100 mb-3">Planning a similar space?</h2>
                <p className="text-charcoal-300 mb-6 max-w-lg mx-auto">
                  Hidaya designs residential and commercial interiors in Nablus and remotely, from space planning to
                  photorealistic 3D visualization.
                </p>
                <Link href="/#contact" className="btn-gold rounded-none text-xs tracking-[0.2em] uppercase inline-block">
                  <span>Contact Hidaya</span>
                </Link>
              </section>
            </div>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
              <section className="mt-20 pt-16 border-t border-cream-300 dark:border-charcoal-800" aria-labelledby="related">
                <span className="section-label mb-3 block">More Work</span>
                <h2 id="related" className="font-serif text-3xl text-charcoal-900 dark:text-cream-100 mb-10">
                  Related Projects
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedProjects.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/projects/${p.slug}`} className="group block">
                        <div className="relative overflow-hidden aspect-[4/3] bg-cream-200 dark:bg-charcoal-900">
                          <Image
                            src={p.cover.src}
                            alt={p.cover.alt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) calc(100vw - 3rem), 384px"
                          />
                        </div>
                        <div className="py-3 border-b border-cream-300 dark:border-charcoal-800">
                          <h3 className="font-serif text-lg text-charcoal-800 dark:text-cream-100 group-hover:text-gold-700 transition-colors">
                            {p.title}
                          </h3>
                          <p className="text-xs text-charcoal-500 dark:text-charcoal-400 mt-1">{p.category} · {p.projectType}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-gold-800 dark:text-gold-400 hover:underline">
                    <ArrowLeft size={14} aria-hidden="true" />
                    All interior design projects
                  </Link>
                </div>
              </section>
            )}
          </div>
        </article>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
