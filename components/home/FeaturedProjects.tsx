'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data'
import { ExternalLink, ArrowRight } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import GradientText from '@/components/shared/GradientText'
import Link from 'next/link'

export default function FeaturedProjects() {
  return (
    <SectionWrapper id="projects" className="bg-midnight-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Selected <GradientText>Use Cases</GradientText>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Public portfolio work and carefully described confidential business projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative h-full bg-slate-dark/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 md:p-8 overflow-hidden group-hover:border-cyber-lime/50 transition-all duration-300">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-lime/5 to-data-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-data-blue to-cyber-lime rounded-full text-xs font-semibold text-white mb-3 md:mb-4">
                    {project.category}
                  </span>
                  {project.status && (
                    <span className="ml-2 inline-block px-3 py-1 border border-slate-600 rounded-full text-xs font-medium text-slate-300 mb-3 md:mb-4">
                      {project.status}
                    </span>
                  )}

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-cyber-lime transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-400 mb-4 md:mb-6 leading-relaxed">{project.description}</p>

                  {/* Results */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                    {project.results.map((result, i) => (
                      <div
                        key={i}
                        className="bg-slate-800/50 border border-slate-700 rounded-lg p-2.5 md:p-3"
                      >
                        <div className="text-xl sm:text-2xl font-bold text-cyber-lime mb-1">
                          {result.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-slate-400 leading-tight">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-[10px] sm:text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Details Link */}
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyber-lime hover:gap-3 transition-all"
                    >
                      <span className="text-xs sm:text-sm font-semibold">Open Repository</span>
                      <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                    </a>
                  ) : (
                    <Link href="/projects" className="inline-flex items-center gap-2 text-cyber-lime hover:gap-3 transition-all">
                      <span className="text-xs sm:text-sm font-semibold">View Details</span>
                      <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-10 md:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/projects">
            <motion.button
              className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-data-blue to-cyber-lime rounded-lg text-white text-sm md:text-base font-semibold hover:shadow-lg hover:shadow-cyber-lime/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

