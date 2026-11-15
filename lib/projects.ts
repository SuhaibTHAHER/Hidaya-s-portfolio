export type ProjectImage = {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

export type ProjectCategory = 'Residential' | 'Commercial' | 'Hospitality' | 'Retail'

export type Project = {
  slug: string
  title: string
  /** Original Arabic project name, shown with lang="ar" dir="rtl". */
  titleAr: string
  subtitle: string
  category: ProjectCategory
  projectType: string
  medium: string
  overview: string
  highlights: string[]
  materials: { name: string; use: string }[]
  palette: string[]
  tags: string[]
  featured: boolean
  cover: ProjectImage
  images: ProjectImage[]
}

export const projects: Project[] = []
