'use client'

import { motion } from 'framer-motion'
import { testimonials, upworkSnapshot } from '@/data'
import { ExternalLink, Star } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import GradientText from '@/components/shared/GradientText'

export default function TestimonialsCarousel() {
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
            Upwork <GradientText>Client Proof</GradientText>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto">
            Real public reviews and profile signals from freelance analytics work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.65fr] gap-6 md:gap-8">
          <motion.div
            className="bg-midnight-blue/70 border border-slate-700 rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-2">{upworkSnapshot.title}</h3>
            <p className="text-sm text-slate-400 mb-5">
              Public profile indicators are useful because they are externally visible and client-driven.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 mb-6">
              {upworkSnapshot.stats.map((item) => (
                <div key={item} className="rounded-lg border border-slate-700 bg-slate-dark/50 px-4 py-3 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
            <a
              href={upworkSnapshot.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyber-lime text-sm font-semibold"
            >
              View Upwork profile
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-midnight-blue/70 border border-slate-700 rounded-2xl p-5 md:p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                  &quot;{item.quote}&quot;
                </p>
                <div className="text-xs text-slate-500">{item.project}</div>
                <div className="text-sm font-semibold text-white mt-1">{item.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
