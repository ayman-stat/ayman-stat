'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Home, FolderOpen, Code, ChevronDown, Briefcase, Menu as MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/experience', label: 'Experience', icon: Code },
  { href: '/projects', label: 'Projects', icon: FolderOpen },
  { href: '/skills', label: 'Skills', icon: Code },
]

const languages = [
  {
    code: 'ar',
    name: 'العربية',
    flag: 'https://flagcdn.com/w40/sa.png',
    flagAlt: 'Saudi Arabia Flag',
  },
  {
    code: 'en',
    name: 'English',
    flag: 'https://flagcdn.com/w40/gb.png',
    flagAlt: 'United Kingdom Flag',
  },
]

export default function Header() {
  const pathname = usePathname()
  const [selectedLanguage, setSelectedLanguage] = useState(languages[1]) // Default to English
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-midnight-blue/90 backdrop-blur-md border-b border-slate-800/50 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center justify-between">
        <Link href="/">
          <motion.div
            className="flex items-center gap-2 sm:gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* MA Logo Box */}
            <div className="relative p-2 sm:p-2.5 bg-gradient-to-br from-cyber-lime via-data-blue to-purple-500 rounded-lg shadow-lg shadow-cyber-lime/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-lime/20 to-data-blue/20 rounded-lg blur-sm" />
              <span className="relative text-base sm:text-lg font-extrabold text-white tracking-tight">
                MA
              </span>
            </div>
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

          {/* Hire Me Button - Hidden on mobile */}
          <motion.a
            href="https://wa.me/201060060292?text=Freelance"
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
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Hire Me</span>
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

          {/* Language Dropdown */}
          {/* <Menu as="div" className="relative">
            <Menu.Button
              as={motion.button}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-cyber-lime hover:border-cyber-lime/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-5 h-4 rounded overflow-hidden">
                <Image
                  src={selectedLanguage.flag}
                  alt={selectedLanguage.flagAlt}
                  width={20}
                  height={16}
                  className="object-cover"
                />
              </div>
              <span className="text-xs sm:text-sm font-medium hidden sm:inline">
                {selectedLanguage.name}
              </span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-lg bg-slate-800/95 backdrop-blur-md border border-slate-700 shadow-xl z-50">
                <div className="p-1">
                  {languages.map(language => (
                    <Menu.Item key={language.code}>
                      {({ active }: { active: boolean }) => (
                        <button
                          onClick={() => setSelectedLanguage(language)}
                          className={`${
                            active ? 'bg-cyber-lime/10 text-cyber-lime' : 'text-slate-300'
                          } ${
                            selectedLanguage.code === language.code
                              ? 'bg-cyber-lime/20 text-cyber-lime'
                              : ''
                          } group flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors`}
                        >
                          <div className="relative w-6 h-5 rounded overflow-hidden flex-shrink-0">
                            <Image
                              src={language.flag}
                              alt={language.flagAlt}
                              width={24}
                              height={20}
                              className="object-cover"
                            />
                          </div>
                          <span className="font-medium">{language.name}</span>
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu> */}
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

                {/* Hire Me Button in Mobile Menu */}
                <div className="p-2">
                  <motion.a
                    href="https://wa.me/201060060292?text=Freelance"
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
                        <Briefcase className="w-5 h-5" />
                        <span>Hire Me</span>
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
