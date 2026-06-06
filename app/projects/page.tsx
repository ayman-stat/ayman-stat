'use client'

import { motion } from 'framer-motion'
import { projects, socialLinks } from '@/data'
import { ExternalLink, CheckCircle2, Rocket } from 'lucide-react'

export default function ProjectsPage() {
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
            Use Case Library
          </h1>
          <p className="text-slate-400 text-lg">
            Selected public labs and sanitized business projects across analytics, BI, ML, and AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-slate-dark/60 backdrop-blur-sm border border-slate-700 rounded-xl p-6 sm:p-8 hover:border-cyber-lime/50 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-lime/5 to-data-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-data-blue to-cyber-lime rounded-full text-xs font-semibold text-white">
                        {project.category}
                      </span>
                      <span className="inline-block px-3 py-1 border border-slate-700 rounded-full text-xs font-medium text-slate-300">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyber-lime transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>
                {(project.demoUrl || project.url) && (
                  <div className="mb-6 flex flex-wrap gap-3">
                    {project.demoUrl && (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-cyber-lime px-4 py-2 text-sm font-semibold text-midnight-blue transition-colors hover:bg-white"
                        whileHover={{ x: 4 }}
                      >
                        <Rocket className="w-4 h-4" />
                        Launch live app
                      </motion.a>
                    )}
                    {project.url && (
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-cyber-lime/50 px-4 py-2 text-sm font-semibold text-cyber-lime transition-colors hover:border-white hover:text-white"
                        whileHover={{ x: 4 }}
                      >
                        Open repository
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                )}

                {/* Results */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
                    Key Results
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    {project.results.map((result, i) => (
                      <div
                        key={i}
                        className="min-w-0 bg-slate-800/60 border border-slate-700 rounded-lg p-3"
                      >
                        <div className="text-lg sm:text-xl font-bold text-cyber-lime mb-1 leading-tight break-words">
                          {result.value}
                        </div>
                        <div className="text-xs text-slate-400 leading-tight break-words">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
                    Project Details
                  </h5>
                  <ul className="space-y-2">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-slate-400 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyber-lime mr-2 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h5 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-slate-400 mb-4">
            Interested in seeing more projects? Check out my Upwork profile for additional case
            studies and client testimonials.
          </p>
          <motion.a
            href={socialLinks.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-data-blue to-cyber-lime rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyber-lime/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Upwork Profile
            <ExternalLink className="w-5 h-5 ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

