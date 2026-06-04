'use client'

import { motion } from 'framer-motion'
import { expertiseAreas } from '@/data'
import { Brain, Cloud, DatabaseZap, LineChart, Network, Sigma } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import GradientText from '@/components/shared/GradientText'

const icons = [Sigma, LineChart, Brain, Cloud, DatabaseZap, Network]

export default function ExpertiseCards() {
  return (
    <SectionWrapper id="expertise" className="bg-slate-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Real <GradientText>Use Cases</GradientText>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            The portfolio is organized around work buyers and hiring managers can recognize.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {expertiseAreas.map((expertise, index) => {
            const Icon = icons[index] || LineChart
            return (
            <motion.div
              key={expertise.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                className="relative h-full bg-slate-dark/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 md:p-8 overflow-hidden"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${expertise.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl border border-cyber-lime/20 bg-cyber-lime/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-cyber-lime" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-cyber-lime transition-colors">
                    {expertise.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-400 mb-4 md:mb-6 leading-relaxed">{expertise.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {expertise.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-2.5 md:px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-[10px] sm:text-xs text-slate-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        whileHover={{ scale: 1.1, borderColor: '#10b981' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Achievement */}
                  <div className="pt-4 md:pt-6 border-t border-slate-700">
                    <span className="text-xs sm:text-sm text-slate-300">{expertise.achievement}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}

