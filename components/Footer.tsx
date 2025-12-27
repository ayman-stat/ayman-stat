'use client'

import { motion } from 'framer-motion'
import { Linkedin, Briefcase, Mail, Heart, MapPin, Clock, Phone } from 'lucide-react'
import { socialLinks, hero } from '@/data'
import Link from 'next/link'
import GradientText from '@/components/shared/GradientText'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-slate-800 bg-slate-dark/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              <GradientText>{hero.name}</GradientText>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4">{hero.tagline}</p>
            <div className="flex items-center gap-3 sm:gap-4">
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 bg-slate-dark/50 border border-slate-700 rounded-lg text-slate-400 hover:text-cyber-lime hover:border-cyber-lime transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                href={socialLinks.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 bg-slate-dark/50 border border-slate-700 rounded-lg text-slate-400 hover:text-cyber-lime hover:border-cyber-lime transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                title="Upwork"
                aria-label="Upwork Profile"
              >
                <Briefcase size={18} className="sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                href={`mailto:${socialLinks.email}`}
                className="p-1.5 sm:p-2 bg-slate-dark/50 border border-slate-700 rounded-lg text-slate-400 hover:text-cyber-lime hover:border-cyber-lime transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                title="Email"
                aria-label="Send Email"
              >
                <Mail size={18} className="sm:w-5 sm:h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Middle Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
              Quick Links
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/experience', label: 'Experience' },
                { href: '/projects', label: 'Projects' },
                { href: '/skills', label: 'Skills' },
              ].map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyber-lime transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="sm:col-span-2 md:col-span-1"
          >
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
              Contact Info
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2 text-slate-400">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-cyber-lime flex-shrink-0" />
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="hover:text-cyber-lime transition-colors break-all"
                >
                  {socialLinks.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-cyber-lime flex-shrink-0" />
                <span>Cairo, Egypt 🇪🇬</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-cyber-lime flex-shrink-0" />
                <a
                  href={`tel:${socialLinks.phone}`}
                  className="hover:text-cyber-lime transition-colors"
                >
                  {socialLinks.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-cyber-lime flex-shrink-0" />
                <span>Open for opportunities</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-6 sm:pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm text-center sm:text-left">
            <span>© {currentYear} Mohamed Ayman. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm">
            <span>Built with</span>
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-cyber-lime fill-cyber-lime" />
            <span>using Next.js, TypeScript & Framer Motion</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
