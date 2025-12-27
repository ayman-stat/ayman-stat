'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { testimonials } from '@/data'
import { Star, Quote } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import GradientText from '@/components/shared/GradientText'

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <SectionWrapper id="testimonials" className="bg-slate-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Client <GradientText>Testimonials</GradientText>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-slate-dark/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sm:p-8 md:p-12"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-cyber-lime mb-4 sm:mb-6 opacity-50" />
              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                &quot;{testimonials[currentIndex].quote}&quot;
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                <div>
                  <div className="font-semibold text-white mb-1 text-sm sm:text-base">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400">{testimonials[currentIndex].company}</div>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-cyber-lime w-8' : 'bg-slate-700 w-2'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

