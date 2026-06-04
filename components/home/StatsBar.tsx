'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BadgeCheck, BarChart3, Briefcase, Clock, Star, TrendingUp } from 'lucide-react'
import { proofStats } from '@/data'
import SectionWrapper from '@/components/shared/SectionWrapper'

const icons = [Briefcase, BadgeCheck, Star, TrendingUp, BarChart3, Clock]

export default function StatsBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <SectionWrapper
      id="stats"
      className="relative bg-slate-dark/30 backdrop-blur-md border-y border-slate-800/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 relative z-10" ref={ref}>
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5"
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
          {proofStats.map((stat, index) => {
            const Icon = icons[index] || Briefcase
            return (
              <motion.div
                key={index}
                className="group"
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
                  className="relative h-full bg-midnight-blue/70 border border-slate-700/70 rounded-xl p-4 sm:p-5 overflow-hidden transition-all duration-300 group-hover:border-cyber-lime/40"
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                >
                  <Icon className="w-5 h-5 text-cyber-lime mb-4" />
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium leading-snug">{stat.label}</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 mt-2 leading-snug">{stat.note}</div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
