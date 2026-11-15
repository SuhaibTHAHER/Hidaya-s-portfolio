'use client'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X, Download } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { personalInfo } from '@/lib/data'

// Real hrefs (not JS-only buttons): crawlable, work from every page, and open in new tabs.
const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Services', href: '/#services' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
]

// CSS transitions only (no framer-motion): /projects pages ship no animation library.
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  // Inner pages open on a dark hero: keep the header solid there so it stays readable.
  const solid = scrolled || pathname !== '/'

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mobile menu: close on Escape, lock background scroll, keep focus out of the page behind.
  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const background = Array.from(document.querySelectorAll('main, footer'))
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    background.forEach((el) => el.setAttribute('inert', ''))
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      background.forEach((el) => el.removeAttribute('inert'))
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 motion-safe:animate-nav-in',
          solid ? 'glass glass-solid shadow-sm py-3' : 'bg-transparent py-5'
        )}
      >
        <div className="container-luxury flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-xl font-semibold tracking-tight text-charcoal-800 dark:text-cream-100 group-hover:text-gold-600 transition-colors">
              Hidaya Thaher
            </span>
            <span className="text-xs tracking-[0.2em] uppercase text-gold-800 dark:text-gold-500 font-sans font-medium">
              Interior Designer
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover-line text-sm tracking-wider uppercase font-medium text-charcoal-600 dark:text-cream-300 hover:text-charcoal-900 dark:hover:text-cream-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            {mounted && (
              <button
                type="button"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-9 h-9 rounded-full flex items-center justify-center text-charcoal-600 dark:text-cream-300 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-cream-200 dark:hover:bg-charcoal-800 transition-all"
                aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              >
                {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
              </button>
            )}

            {/* CV Download (shown only once a real CV file is configured) */}
            {personalInfo.cvUrl && (
              <a
                href={personalInfo.cvUrl}
                download
                className="hidden md:flex items-center gap-2 btn-outline-gold text-xs tracking-wider uppercase rounded-none"
              >
                <Download size={13} aria-hidden="true" />
                <span>Download CV</span>
              </a>
            )}

            {/* Mobile Menu Toggle */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-[60] lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-charcoal-700 dark:text-cream-200 hover:text-gold-600 transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu: always mounted and slid off-screen, so it can animate in and out with CSS. */}
      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        {...(!mobileOpen ? { inert: '' as unknown as boolean } : {})}
        className={cn(
          'fixed inset-0 z-40 glass flex flex-col justify-center items-center gap-8 lg:hidden transition-all duration-300 ease-out',
          mobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        )}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms' }}
            className={cn(
              'font-serif text-3xl text-charcoal-800 dark:text-cream-100 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-300',
              mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            )}
          >
            {link.label}
          </Link>
        ))}
        {personalInfo.cvUrl && (
          <a
            href={personalInfo.cvUrl}
            download
            className="btn-gold rounded-none text-xs tracking-[0.2em] uppercase mt-4"
          >
            <span>Download CV</span>
          </a>
        )}
      </nav>
    </>
  )
}
