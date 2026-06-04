'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data'
import { Calendar, MapPin, TrendingUp } from 'lucide-react'

export default function ExperiencePage() {
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
            Professional Experience
          </h1>
          <p className="text-slate-400 text-lg">
            Verified career path across sports, healthcare, banking, telecom, and freelance analytics.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-data-blue via-cyber-lime to-data-blue opacity-30"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyber-lime border-4 border-midnight-blue z-10" />

                <div
                  className={`ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-[55%]' : 'md:ml-[55%]'
                  }`}
                >
                  <motion.div
                    className="bg-slate-dark/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyber-lime/50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-cyber-lime mb-2">{exp.role}</h3>
                        <h4 className="text-xl text-white mb-2">{exp.company}</h4>
                      </div>
                      <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                        <div className="flex items-center text-slate-400 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-slate-400 text-sm">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
                        Scope & Impact
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-slate-400">
                            <span className="text-cyber-lime mr-2 mt-1">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
                        Technologies
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact Metrics */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-700">
                      {exp.impact.map((metric, i) => (
                        <div key={i} className="flex items-center">
                          <TrendingUp className="w-4 h-4 text-cyber-lime mr-2" />
                          <span className="text-sm">
                            <span className="text-cyber-lime font-bold">{metric.value}</span>
                            <span className="text-slate-400 ml-1">{metric.metric}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

