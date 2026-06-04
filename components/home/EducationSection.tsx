'use client'

import { motion } from 'framer-motion'
import { certifications, education, inProgressLearning } from '@/data'
import { BookOpen, GraduationCap, Loader2 } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import GradientText from '@/components/shared/GradientText'

export default function EducationSection() {
  return (
    <SectionWrapper id="education" className="bg-slate-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Education & <GradientText>Development</GradientText>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto">
            Formal statistics background, completed analytics/ML/data engineering training, and current deep learning and GenAI study.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            className="bg-midnight-blue/70 border border-slate-700 rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <GraduationCap className="w-6 h-6 text-cyber-lime" />
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((item) => (
                <div key={item.title} className="border-l border-cyber-lime/40 pl-4">
                  <h4 className="text-white font-semibold">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.institution}</p>
                  <p className="text-xs text-slate-500 mt-1">
                    {item.period}
                    {item.status ? ` | ${item.status}` : ''}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-midnight-blue/70 border border-slate-700 rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <BookOpen className="w-6 h-6 text-cyber-lime" />
              <h3 className="text-xl font-bold text-white">Completed</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((item) => (
                <div key={item.id} className="rounded-lg border border-slate-700 bg-slate-dark/40 p-3">
                  <h4 className="text-sm text-white font-semibold">{item.title}</h4>
                  <p className="text-xs text-slate-400">{item.issuer} | {item.year}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-midnight-blue/70 border border-slate-700 rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <Loader2 className="w-6 h-6 text-cyber-lime" />
              <h3 className="text-xl font-bold text-white">In Progress</h3>
            </div>
            <div className="space-y-3">
              {inProgressLearning.map((item) => (
                <div key={item.id} className="rounded-lg border border-slate-700 bg-slate-dark/40 p-3">
                  <h4 className="text-sm text-white font-semibold">{item.title}</h4>
                  <p className="text-xs text-slate-400">{item.issuer} | {item.status}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
