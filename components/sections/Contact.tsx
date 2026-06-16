'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink, Send, CheckCircle } from 'lucide-react'
import AnimateIn from '@/components/ui/AnimateIn'
import SectionHeader from '@/components/ui/SectionHeader'
import { personalInfo } from '@/lib/data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.open(mailto)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="section-padding bg-cream-50 dark:bg-charcoal-950">
      <div className="container-luxury">
        <SectionHeader
          label="Contact"
          title="Let's Create Together"
          subtitle="Whether you have a project in mind or simply want to explore possibilities, I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          {/* Contact Info */}
          <div>
            <AnimateIn delay={0.1}>
              <div className="space-y-6">
                <div className="p-6 border border-cream-300 dark:border-charcoal-700 group hover:border-gold-400 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold-100 dark:bg-charcoal-800 flex items-center justify-center text-gold-600">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-charcoal-400 mb-1">Email</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="font-medium text-charcoal-800 dark:text-cream-100 hover:text-gold-600 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 border border-cream-300 dark:border-charcoal-700 hover:border-gold-400 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold-100 dark:bg-charcoal-800 flex items-center justify-center text-gold-600">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-charcoal-400 mb-1">Phone</p>
                      <a
                        href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                        className="font-medium text-charcoal-800 dark:text-cream-100 hover:text-gold-600 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 border border-cream-300 dark:border-charcoal-700">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold-100 dark:bg-charcoal-800 flex items-center justify-center text-gold-600">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-charcoal-400 mb-1">Location</p>
                      <p className="font-medium text-charcoal-800 dark:text-cream-100">{personalInfo.location}</p>
                      <p className="text-xs text-charcoal-400 mt-0.5">Available for remote projects worldwide</p>
                    </div>
                  </div>
                </div>

                {/* Behance */}
                <div className="p-6 bg-charcoal-900 dark:bg-charcoal-900 border border-charcoal-800 group hover:border-gold-600 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-charcoal-400 mb-1">Behance Portfolio</p>
                      <p className="font-medium text-cream-100">View Design Work</p>
                    </div>
                    <a
                      href={personalInfo.behance}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gold-600 flex items-center justify-center text-white hover:bg-gold-500 transition-colors"
                      aria-label="Visit Behance profile"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Availability note */}
            <AnimateIn delay={0.4}>
              <div className="mt-8 p-5 border-l-2 border-gold-500 bg-gold-50 dark:bg-charcoal-900">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs tracking-[0.15em] uppercase text-emerald-600 dark:text-emerald-400 font-medium">Available</span>
                </div>
                <p className="text-sm text-charcoal-600 dark:text-charcoal-300">
                  Currently accepting new residential and commercial projects. Typical response within 24 hours.
                </p>
              </div>
            </AnimateIn>
          </div>

          {/* Contact Form */}
          <AnimateIn delay={0.2} direction="right">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs tracking-[0.15em] uppercase text-charcoal-500 dark:text-charcoal-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-cream-100 dark:bg-charcoal-900 border border-cream-300 dark:border-charcoal-700 text-charcoal-800 dark:text-cream-100 text-sm focus:border-gold-500 focus:outline-none transition-colors placeholder-charcoal-300 dark:placeholder-charcoal-600"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs tracking-[0.15em] uppercase text-charcoal-500 dark:text-charcoal-400 mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-cream-100 dark:bg-charcoal-900 border border-cream-300 dark:border-charcoal-700 text-charcoal-800 dark:text-cream-100 text-sm focus:border-gold-500 focus:outline-none transition-colors placeholder-charcoal-300 dark:placeholder-charcoal-600"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs tracking-[0.15em] uppercase text-charcoal-500 dark:text-charcoal-400 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-cream-100 dark:bg-charcoal-900 border border-cream-300 dark:border-charcoal-700 text-charcoal-800 dark:text-cream-100 text-sm focus:border-gold-500 focus:outline-none transition-colors placeholder-charcoal-300 dark:placeholder-charcoal-600"
                  placeholder="Project inquiry, collaboration..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs tracking-[0.15em] uppercase text-charcoal-500 dark:text-charcoal-400 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-cream-100 dark:bg-charcoal-900 border border-cream-300 dark:border-charcoal-700 text-charcoal-800 dark:text-cream-100 text-sm focus:border-gold-500 focus:outline-none transition-colors resize-none placeholder-charcoal-300 dark:placeholder-charcoal-600"
                  placeholder="Tell me about your project, space, and vision..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-gold rounded-none flex items-center justify-center gap-2 text-sm tracking-[0.15em] uppercase"
              >
                <span>{submitted ? 'Message Sent!' : 'Send Message'}</span>
                {submitted ? <CheckCircle size={16} /> : <Send size={16} />}
              </button>
            </form>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
