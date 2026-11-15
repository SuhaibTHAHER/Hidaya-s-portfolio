import { projects } from '@/lib/projects'
import { personalInfo, services, experience, education } from '@/lib/data'
import { DEFAULT_DESCRIPTION, absoluteUrl } from '@/lib/site'

// Optional plain-text summary for AI assistants (llmstxt.org). Generated from the same
// data as the pages, so it can never drift from what the site actually says.
export const dynamic = 'force-static'

export function GET() {
  const lines = [
    `# ${personalInfo.name} — ${personalInfo.title}`,
    '',
    `> ${DEFAULT_DESCRIPTION}`,
    '',
    '## About',
    `- Name: ${personalInfo.name}`,
    `- Role: ${personalInfo.title}`,
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
  ]
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
