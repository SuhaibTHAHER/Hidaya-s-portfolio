'use client'
import { useEffect } from 'react'

export default function ScrollProgress() {
  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      document.documentElement.style.setProperty('--scroll-progress', `${pct}%`)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return <div className="scroll-progress" aria-hidden="true" />
}
