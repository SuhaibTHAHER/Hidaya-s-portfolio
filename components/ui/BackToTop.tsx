'use client'
import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

// CSS-only transitions (no framer-motion), so pages without other animations ship less JS.
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      // `!` modifiers: .btn-gold (declared after the Tailwind utilities) would otherwise
      // override position and padding and drop the button into the page flow.
      className={`!fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 w-11 h-11 !p-0 rounded-full btn-gold flex items-center justify-center shadow-lg transition-all duration-300 motion-safe:hover:scale-110 motion-safe:active:scale-90 ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
      }`}
    >
      <span><ChevronUp size={20} aria-hidden="true" /></span>
    </button>
  )
}
