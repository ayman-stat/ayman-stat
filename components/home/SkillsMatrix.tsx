'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data'
import { Code, Database, Cloud, BarChart3, Settings } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import GradientText from '@/components/shared/GradientText'
import Link from 'next/link'

const categoryIcons: Record<string, any> = {
  'Programming Languages': Code,
  'Data Science & ML': BarChart3,
  'Data Visualization': BarChart3,
  'Cloud & Big Data': Cloud,
  Databases: Database,
  'Tools & Frameworks': Settings,
}

export default function SkillsMatrix() {
  return (
    <SectionWrapper id="skills" className="bg-midnight-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Skills <GradientText>Matrix</GradientText>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Comprehensive expertise across the data science stack
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 md:mb-12">
          {skills.map((skillCategory, index) => {
            const Icon = categoryIcons[skillCategory.category] || Settings
            return (
              <motion.div
                key={skillCategory.category}
                className="bg-slate-dark/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5 sm:p-6 group hover:border-cyber-lime/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 bg-gradient-to-br from-data-blue to-cyber-lime rounded-lg mr-2 sm:mr-3">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{skillCategory.category}</h3>
                </div>

                {/* Progress Bar Representation */}
                <div className="mb-3 sm:mb-4">
                  <div className="h-1.5 sm:h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-data-blue to-cyber-lime"
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skillCategory.items.slice(0, 6).map((item, i) => (
                    <motion.span
                      key={i}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-slate-800/50 border border-slate-700 rounded-full text-xs sm:text-sm text-slate-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      whileHover={{ scale: 1.1, borderColor: '#00ff88', color: '#00ff88' }}
                    >
                      {item}
                    </motion.span>
                  ))}
                  {skillCategory.items.length > 6 && (
                    <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-slate-400">
                      +{skillCategory.items.length - 6} more
                    </span>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* View All Skills Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/skills">
            <motion.button
              className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-data-blue to-cyber-lime rounded-lg text-white text-sm md:text-base font-semibold hover:shadow-lg hover:shadow-cyber-lime/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Skills
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

