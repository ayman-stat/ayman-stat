'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, TrendingUp, Target, Zap, DollarSign, Code } from 'lucide-react'
import { stats } from '@/data'
import CountUpNumber from '@/components/shared/CountUpNumber'
import SectionWrapper from '@/components/shared/SectionWrapper'

const statsData = [
  {
    icon: Briefcase,
    label: 'Projects on Upwork',
    value: 50,
    suffix: '+',
    gradient: 'from-data-blue via-cyan-400 to-cyber-lime',
    iconGradient: 'from-blue-400 to-cyan-300',
    glowColor: 'rgba(59, 130, 246, 0.3)',
  },
  {
    icon: DollarSign,
    label: 'Revenue Impact',
    value: 'Multimillion',
    gradient: 'from-cyber-lime via-emerald-400 to-data-blue',
    iconGradient: 'from-cyber-lime to-emerald-300',
    glowColor: 'rgba(0, 255, 136, 0.3)',
  },
  {
    icon: Target,
    label: 'Churn AUC Score',
    value: 93,
    suffix: '%',
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    iconGradient: 'from-purple-400 to-pink-300',
    glowColor: 'rgba(168, 85, 247, 0.3)',
  },
  {
    icon: Zap,
    label: 'Automation Efficiency',
    value: 70,
    suffix: '%',
    gradient: 'from-data-blue via-indigo-400 to-cyber-lime',
    iconGradient: 'from-indigo-400 to-cyan-300',
    glowColor: 'rgba(99, 102, 241, 0.3)',
  },
  {
    icon: Code,
    label: 'Dashboards Created',
    value: 20,
    suffix: '+',
    gradient: 'from-cyber-lime via-teal-400 to-data-blue',
    iconGradient: 'from-teal-400 to-cyan-300',
    glowColor: 'rgba(20, 184, 166, 0.3)',
  },
  {
    icon: TrendingUp,
    label: 'Major Companies',
    value: 5,
    gradient: 'from-purple-500 via-violet-500 to-pink-500',
    iconGradient: 'from-violet-400 to-purple-300',
    glowColor: 'rgba(139, 92, 246, 0.3)',
  },
]

export default function StatsBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <SectionWrapper
      id="stats"
      className="relative bg-gradient-to-b from-slate-dark/40 via-slate-dark/30 to-slate-dark/40 backdrop-blur-md border-y border-slate-800/50 overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-lime/5 via-transparent to-data-blue/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 relative z-10" ref={ref}>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {statsData.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className="text-center group"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: 'spring',
                      stiffness: 100,
                      damping: 15,
                    },
                  },
                }}
              >
                <motion.div
                  className="relative h-full bg-slate-dark/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-5 sm:p-6 md:p-7 overflow-hidden transition-all duration-500 group-hover:border-cyber-lime/40 group-hover:shadow-2xl group-hover:shadow-cyber-lime/10"
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Animated Gradient Background on Hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${stat.glowColor}, transparent)`,
                      filter: 'blur(40px)',
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* Top Glow Effect */}
                  <motion.div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-lime/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon Container with Enhanced Styling */}
                  <motion.div
                    className="relative inline-flex items-center justify-center mb-4 sm:mb-5"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Icon Glow Background */}
                    <motion.div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${stat.iconGradient} opacity-20 blur-xl`}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.3, 0.2],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    {/* Icon Container */}
                    <div
                      className={`relative p-3 sm:p-3.5 md:p-4 rounded-xl bg-gradient-to-br ${stat.iconGradient} shadow-lg`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white relative z-10" />
                    </div>
                  </motion.div>

                  {/* Value with Enhanced Typography */}
                  <motion.div
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 sm:mb-3 relative z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {typeof stat.value === 'number' ? (
                      <CountUpNumber
                        value={stat.value}
                        suffix={stat.suffix}
                        className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent drop-shadow-lg`}
                      />
                    ) : (
                      <span
                        className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl drop-shadow-lg`}
                      >
                        {stat.value}
                      </span>
                    )}
                  </motion.div>

                  {/* Label with Better Styling */}
                  <motion.div
                    className="text-xs sm:text-sm text-slate-300/80 leading-tight font-medium relative z-10 group-hover:text-slate-200 transition-colors duration-300"
                    whileHover={{ y: -2 }}
                  >
                    {stat.label}
                  </motion.div>

                  {/* Bottom Accent Line */}
                  <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-cyber-lime to-transparent group-hover:w-3/4 transition-all duration-500" />
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
