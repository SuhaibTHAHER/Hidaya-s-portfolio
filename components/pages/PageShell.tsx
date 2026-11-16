import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import BackToTop from '@/components/ui/BackToTop'
import type { SiteContent } from '@/lib/content'
import { localePath, otherLocale } from '@/lib/i18n'

/** Header, footer and page chrome shared by every page, in the page's language. */
export default function PageShell({
  content,
  path,
  children,
}: {
  content: SiteContent
  /** Language-neutral path of this page ('/', '/projects', ...), used for the language switch link. */
  path: string
  children: React.ReactNode
}) {
  const { ui, locale, personal } = content
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:start-2 focus:z-[70] focus:bg-gold-800 focus:text-white focus:px-4 focus:py-2 focus:text-sm"
      >
        {locale === 'ar' ? 'انتقل إلى المحتوى' : 'Skip to content'}
      </a>
      <ScrollProgress />
      <Navbar
        ui={ui}
        locale={locale}
        alternateHref={localePath(otherLocale(locale), path)}
        cvUrl={personal.cvUrl || undefined}
      />
      {children}
      <Footer content={content} />
      <BackToTop label={locale === 'ar' ? 'العودة إلى الأعلى' : 'Back to top'} />
    </>
  )
}
