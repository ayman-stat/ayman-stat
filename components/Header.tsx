'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Home, FolderOpen, Code, Briefcase, MessageCircle, Menu as MenuIcon, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { socialLinks } from '@/data'

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/experience', label: 'Experience', icon: Code },
  { href: '/projects', label: 'Projects', icon: FolderOpen },
  { href: '/skills', label: 'Skills', icon: Code },
  { href: '/#cv', label: 'CV', icon: Briefcase },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-midnight-blue/90 backdrop-blur-md border-b border-slate-800/50 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center justify-between">
        <Link href="/" aria-label="Mohamed Ayman home">
          <motion.div
            className="flex items-center gap-2 sm:gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/ma-logo.png"
              alt="Mohamed Ayman"
              width={48}
              height={48}
              priority
              className="h-10 w-10 rounded-lg object-cover shadow-lg shadow-cyber-lime/20 sm:h-12 sm:w-12"
            />
          </motion.div>
        </Link>

        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          {/* Navigation Links - Hidden on mobile, shown on desktop */}
          <nav className="hidden lg:flex items-center gap-3 md:gap-4">
            {navLinks.map(link => {
              const Icon = link.icon
              const isActive = pathname === link.href
              return (
                <Link key={link.href} href={link.href}>
                  <motion.div
                    className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'text-cyber-lime bg-cyber-lime/10'
                        : 'text-slate-300 hover:text-cyber-lime hover:bg-slate-800/50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* <Icon size={14} className="sm:w-4 sm:h-4" /> */}
                    <span className="text-xs sm:text-sm font-medium">{link.label}</span>
                  </motion.div>
                </Link>
              )
            })}
          </nav>

          {/* Contact Button - Hidden on mobile */}
          <motion.a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden hidden sm:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-cyber-lime to-emerald-400 shadow-lg shadow-cyber-lime/30">
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-lime to-data-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />

              {/* Content */}
              <div className="relative flex items-center gap-2 text-white font-semibold text-xs sm:text-sm z-10">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>WhatsApp</span>
              </div>

              {/* Shine animation */}
              <motion.div
                className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-cyber-lime hover:border-cyber-lime/50 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MenuIcon className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-16 left-0 right-0 z-50 lg:hidden"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mx-4 mt-2 rounded-xl bg-slate-800/95 backdrop-blur-xl border border-slate-700 shadow-2xl overflow-hidden">
                {/* Navigation Links */}
                <nav className="p-2">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon
                    const isActive = pathname === link.href
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                            isActive
                              ? 'bg-cyber-lime/20 text-cyber-lime border border-cyber-lime/30'
                              : 'text-slate-300 hover:text-cyber-lime hover:bg-slate-700/50'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{link.label}</span>
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* Divider */}
                <div className="h-px bg-slate-700 mx-2" />

                {/* Contact Button in Mobile Menu */}
                <div className="p-2">
                  <motion.a
                    href={socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="relative group overflow-hidden block"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                  >
                    <div className="relative px-4 py-3 rounded-lg bg-gradient-to-r from-cyber-lime to-emerald-400 shadow-lg shadow-cyber-lime/30">
                      <div className="relative flex items-center justify-center gap-2 text-white font-semibold text-sm z-10">
                        <MessageCircle className="w-5 h-5" />
                        <span>WhatsApp</span>
                      </div>
                      <motion.div
                        className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ['-200%', '200%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: 'easeInOut',
                        }}
                      />
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
