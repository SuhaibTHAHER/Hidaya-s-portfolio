import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream-50 dark:bg-charcoal-950 flex items-center justify-center">
      <div className="text-center">
        <div className="font-serif text-8xl text-gold-300 dark:text-gold-800 mb-6">404</div>
        <h1 className="font-serif text-3xl text-charcoal-800 dark:text-cream-100 mb-4">Page Not Found</h1>
        <p className="text-charcoal-500 dark:text-charcoal-400 mb-8 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to the portfolio.
        </p>
        <Link href="/" className="btn-gold rounded-none text-xs tracking-[0.2em] uppercase inline-block">
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  )
}
