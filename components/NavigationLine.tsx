'use client'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'

const pages = [
  { path: '/', label: 'Home', progress: 0 },
  { path: '/experience', label: 'Experience', progress: 33 },
  { path: '/projects', label: 'Projects', progress: 66 },
  { path: '/skills', label: 'Skills', progress: 100 },
]

export default function NavigationLine() {
  const pathname = usePathname()

  const currentPageIndex = pages.findIndex(page => page.path === pathname)
  const currentProgress = currentPageIndex >= 0 ? pages[currentPageIndex].progress : 0

  return (
    <div className="fixed top-16 sm:top-20 left-0 right-0 z-40 px-3 sm:px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Navigation dots */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          {pages.map((page, index) => {
            const isActive = pathname === page.path
            const isPast = currentPageIndex > index

            return (
              <Link
                key={page.path}
                href={page.path}
                className="relative z-10"
                aria-label={`Navigate to ${page.label}`}
              >
                <motion.div
                  className="flex flex-col items-center cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full border-2 transition-colors relative ${
                      isActive
                        ? 'bg-cyber-lime border-cyber-lime'
                        : isPast
                        ? 'bg-data-blue border-data-blue'
                        : 'bg-transparent border-slate-400'
                    }`}
                    animate={{
                      scale: isActive ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: isActive ? Infinity : 0,
                    }}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-cyber-lime"
                        animate={{
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        style={{
                          boxShadow: '0 0 8px #00ff88, 0 0 16px #00ff88',
                        }}
                      />
                    )}
                  </motion.div>
                  <span
                    className={`text-[9px] sm:text-[10px] md:text-xs mt-1 sm:mt-1.5 md:mt-2 transition-colors font-medium hidden sm:block ${
                      isActive ? 'text-cyber-lime' : isPast ? 'text-data-blue' : 'text-slate-400'
                    }`}
                  >
                    {page.label}
                  </span>
                </motion.div>
              </Link>
            )
          })}
        </div>

        {/* Progress line */}
        <div className="relative h-0.5 sm:h-1 bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-data-blue via-cyber-lime to-cyber-lime"
            initial={{ width: '0%' }}
            animate={{ width: `${currentProgress}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{
              boxShadow: '0 0 8px #00ff88, 0 0 16px #00ff88',
            }}
          />
        </div>
      </div>
    </div>
  )
}
