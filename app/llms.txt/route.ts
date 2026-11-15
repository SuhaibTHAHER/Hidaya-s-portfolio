import { projects } from '@/lib/projects'
import { personalInfo, services, experience, education } from '@/lib/data'
import { projectsAr } from '@/lib/projects.ar'
import { DESCRIPTIONS, absoluteUrl } from '@/lib/site'
import { localePath } from '@/lib/i18n'

// Optional plain-text summary for AI assistants (llmstxt.org). Generated from the same
// data as the pages, so it can never drift from what the site actually says.
export const dynamic = 'force-static'

export function GET() {
  const lines = [
    `# ${personalInfo.name} (${personalInfo.nameAr}) — ${personalInfo.title}`,
    '',
    `> ${DESCRIPTIONS.en}`,
    '',
    '## About',
    `- Name: ${personalInfo.name} — in Arabic: ${personalInfo.nameAlternates.join(' / ')}`,
    `- Role: ${personalInfo.title} (design and 3D visualization; no on-site construction)`,
    `- Based in: ${personalInfo.location}`,
    `- Languages: ${personalInfo.languages.map((l) => l.name).join(', ')}`,
    `- Education: ${education[0].degree}, ${education[0].institution} (${education[0].period.replace(/\s*—\s*/, '–')})`,
    `- Software: AutoCAD, 3ds Max, V-Ray, Adobe Photoshop, Adobe Illustrator`,
    `- Contact: ${personalInfo.email} · ${personalInfo.phone}`,
    '',
    '## Experience',
    ...experience.map((e) => `- ${e.role}, ${e.company} (${e.period.replace(/\s*—\s*/, '–')}): ${e.description}`),
    '',
    '## Services',
    ...services.map((s) => `- ${s.title}: ${s.description}`),
    '',
    '## Projects',
    'All projects below are interior design projects presented as 3D visualizations.',
    ...projects.map((p) => `- [${p.title}](${absoluteUrl(`/projects/${p.slug}`)}): ${p.subtitle}`),
    '',
    '## Pages',
    `- [Home](${absoluteUrl('/')}): profile, services, skills, education, experience and contact`,
    `- [All projects](${absoluteUrl('/projects')})`,
    '',
    '## بالعربية',
    `> ${DESCRIPTIONS.ar}`,
    '',
    `- [الصفحة الرئيسية](${absoluteUrl(localePath('ar', '/'))})`,
    `- [جميع المشاريع](${absoluteUrl(localePath('ar', '/projects'))})`,
    ...projects
      .filter((p) => projectsAr[p.slug])
      .map((p) => `- [${projectsAr[p.slug].title}](${absoluteUrl(localePath('ar', `/projects/${p.slug}`))}): ${projectsAr[p.slug].subtitle}`),
    '',
  ]
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
