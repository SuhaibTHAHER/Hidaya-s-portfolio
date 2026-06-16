export default function Loading() {
  return (
    <div className="min-h-screen bg-cream-50 dark:bg-charcoal-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-cream-300 border-t-gold-600 rounded-full animate-spin" />
        <span className="text-xs tracking-[0.3em] uppercase text-charcoal-400">Loading</span>
      </div>
    </div>
  )
}
