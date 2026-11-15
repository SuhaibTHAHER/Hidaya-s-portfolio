'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'glass shadow-sm py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container-luxury flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex flex-col" aria-label="Hidaya Thaher, Interior Designer — home">
            <span className="font-serif text-xl font-semibold tracking-tight text-charcoal-800 dark:text-cream-100 group-hover:text-gold-600 transition-colors">
              Hidaya Thaher
            </span>
            <span className="text-xs tracking-[0.2em] uppercase text-gold-700 dark:text-gold-500 font-sans font-medium">
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
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-charcoal-700 dark:text-cream-200 hover:text-gold-600 transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed inset-0 z-40 glass flex flex-col justify-center items-center gap-8 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-3xl text-charcoal-800 dark:text-cream-100 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            {personalInfo.cvUrl && (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                href={personalInfo.cvUrl}
                download
                className="btn-gold rounded-none text-xs tracking-[0.2em] uppercase mt-4"
              >
                <span>Download CV</span>
              </motion.a>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
