/**
 * Arabic versions of the 14 projects (titles, descriptions, materials, alt text and captions).
 * Keyed by project slug; image entries keyed by image src. Describes only what the 3D
 * renderings show — no clients, dates, locations, budgets or results.
 */
export type ProjectTranslation = {
  title: string
  subtitle: string
  projectType: string
  overview: string
  highlights: string[]
  materials: { name: string; use: string }[]
  palette: string[]
  tags: string[]
  images: Record<string, { alt: string; caption: string }>
}

export const projectsAr: Record<string, ProjectTranslation> = {}
