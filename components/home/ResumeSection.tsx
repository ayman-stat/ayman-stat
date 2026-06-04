'use client'

import { motion } from 'framer-motion'
import { Download, ExternalLink, FileText } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import GradientText from '@/components/shared/GradientText'

export default function ResumeSection() {
  return (
    <SectionWrapper id="cv" className="bg-midnight-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Embedded <GradientText>CV</GradientText>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto">
            A concise ATS-friendly CV aligned with the portfolio narrative.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.5fr] gap-6 md:gap-8 items-start">
          <motion.div
            className="bg-slate-dark/50 border border-slate-700 rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FileText className="w-8 h-8 text-cyber-lime mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">CV for recruiters and clients</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              The PDF version keeps the same positioning: senior data science, analytics leadership,
              machine learning, BI, and in-progress GenAI/cloud AI development.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyber-lime px-4 py-3 text-sm font-semibold text-midnight-blue"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-4 py-3 text-sm font-semibold text-slate-200 hover:border-cyber-lime"
              >
                <ExternalLink className="w-4 h-4" />
                Open in new tab
              </a>
            </div>
          </motion.div>

          <motion.div
            className="bg-slate-dark/50 border border-slate-700 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <iframe
              src="/resume.pdf#toolbar=0&navpanes=0"
              title="Mohamed Ayman CV"
              className="w-full h-[620px] bg-white"
            />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
