import AnimateIn from './AnimateIn'

interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeader({ label, title, subtitle, center = false }: SectionHeaderProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      <AnimateIn delay={0}>
        <span className="section-label">{label}</span>
      </AnimateIn>
      <AnimateIn delay={0.1}>
        <h2 className={`font-serif text-4xl md:text-5xl font-medium text-charcoal-900 dark:text-cream-100 mt-3 mb-4 leading-tight ${center ? 'mx-auto' : ''}`}>
          {title}
        </h2>
      </AnimateIn>
      {subtitle && (
        <AnimateIn delay={0.2}>
          <p className={`text-charcoal-500 dark:text-charcoal-400 max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        </AnimateIn>
      )}
      <AnimateIn delay={0.25}>
        <div className={`divider-gold mt-6 ${center ? 'mx-auto w-16' : 'w-16'}`} />
      </AnimateIn>
    </div>
  )
}
