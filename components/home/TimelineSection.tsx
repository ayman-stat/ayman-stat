'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { timeline } from '@/data'
import SectionWrapper from '@/components/shared/SectionWrapper'
import GradientText from '@/components/shared/GradientText'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function TimelineSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <SectionWrapper id="timeline" className="bg-slate-dark/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Career <GradientText>Timeline</GradientText>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            A journey of growth, impact, and continuous learning
          </p>
        </motion.div>

        {/* Scroll Container */}
        <div className="relative">
          {/* Scroll Buttons - Desktop Only */}
          <div className="hidden md:block">
            <motion.button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2.5 md:p-3 bg-slate-dark/80 backdrop-blur-sm border border-slate-700 rounded-full text-cyber-lime hover:bg-cyber-lime/10 hover:border-cyber-lime transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} className="md:w-6 md:h-6" />
            </motion.button>
            <motion.button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2.5 md:p-3 bg-slate-dark/80 backdrop-blur-sm border border-slate-700 rounded-full text-cyber-lime hover:bg-cyber-lime/10 hover:border-cyber-lime transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} className="md:w-6 md:h-6" />
            </motion.button>
          </div>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar pb-6 md:pb-8 scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-72 sm:w-80 md:w-96"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="relative h-full bg-slate-dark/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-5 sm:p-6 md:p-8 group hover:border-cyber-lime/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-lime/5 to-data-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    {/* Year Badge */}
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-data-blue to-cyber-lime rounded-full mb-4 sm:mb-6">
                      <span className="text-xl sm:text-2xl">{item.icon}</span>
                      <span className="text-lg sm:text-xl font-bold text-white">{item.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-cyber-lime transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-4 sm:mb-6">{item.description}</p>

                    {/* Decorative Line */}
                    <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-cyber-lime to-data-blue rounded-full" />
                  </div>

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-cyber-lime via-data-blue to-cyber-lime rounded-2xl opacity-0 group-hover:opacity-20 blur-xl -z-10"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {timeline.map((_, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full bg-slate-700"
                whileHover={{ scale: 1.5, backgroundColor: '#00ff88' }}
              />
            ))}
          </div>
        </div>

        {/* Scroll Hint - Mobile */}
        <motion.div
          className="md:hidden text-center mt-4 sm:mt-6 text-slate-400 text-xs sm:text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span>← Swipe to explore →</span>
        </motion.div>
      </div>

    </SectionWrapper>
  )
}

