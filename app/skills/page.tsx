'use client'

import { motion } from 'framer-motion'
import { skills, certifications } from '@/data'
import { Code, Database, Cloud, BarChart3, Settings, Award } from 'lucide-react'

const categoryIcons: Record<string, any> = {
  'Programming Languages': Code,
  'Data Science & ML': BarChart3,
  'Data Visualization': BarChart3,
  'Cloud & Big Data': Cloud,
  Databases: Database,
  'Tools & Frameworks': Settings,
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyber-lime to-data-blue bg-clip-text text-transparent">
            Technical Skills
          </h1>
          <p className="text-slate-400 text-lg">
            Comprehensive expertise across the data science stack
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skillCategory, index) => {
            const Icon = categoryIcons[skillCategory.category] || Settings
            return (
              <motion.div
                key={skillCategory.category}
                className="bg-slate-dark/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyber-lime/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-data-blue to-cyber-lime rounded-lg mr-3">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{skillCategory.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((item, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300 hover:border-cyber-lime/50 hover:text-cyber-lime transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Certifications Section */}
        <motion.div
          className="bg-slate-dark/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center mb-6">
            <div className="p-2 bg-gradient-to-br from-data-blue to-cyber-lime rounded-lg mr-3">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Certifications & Achievements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-cyber-lime/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <h4 className="text-base sm:text-lg font-semibold text-cyber-lime mb-1">
                  {cert.title}
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm mb-1">
                  {cert.issuer} • {cert.year}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-cyber-lime mb-2">5+</div>
            <div className="text-slate-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyber-lime mb-2">50+</div>
            <div className="text-slate-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyber-lime mb-2">93%</div>
            <div className="text-slate-400">Model Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyber-lime mb-2">70%</div>
            <div className="text-slate-400">Automation Rate</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

