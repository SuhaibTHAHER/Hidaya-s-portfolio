'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useDir } from '@/components/providers/DirProvider'

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  /** 'left'/'right' are mirrored on RTL pages, so content always slides in from the inline start/end. */
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  once?: boolean
}

export default function AnimateIn({ children, className, delay = 0, direction = 'up', once = true }: AnimateInProps) {
  const [ref, inView] = useInView({ triggerOnce: once, threshold: 0.1 })
  const flip = useDir() === 'rtl' ? -1 : 1

  const variants = {
    up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -40 * flip }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 40 * flip }, visible: { opacity: 1, x: 0 } },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants[direction]}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
