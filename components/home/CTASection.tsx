'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Copy, Check, Briefcase, Github } from 'lucide-react'
import { socialLinks } from '@/data'
import SectionWrapper from '@/components/shared/SectionWrapper'
import GradientText from '@/components/shared/GradientText'
import GlowButton from '@/components/shared/GlowButton'
import { useState } from 'react'

export default function CTASection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <SectionWrapper className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-midnight-blue via-data-blue/10 to-midnight-blue" />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Discuss a Data, Analytics, or <GradientText>AI Project</GradientText>
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I am open to senior data science, analytics lead, ML engineering, and focused freelance
          engagements where business context matters as much as technical delivery.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <GlowButton href={`mailto:${socialLinks.email}`} variant="primary" icon={<Mail size={18} className="sm:w-5 sm:h-5" />}>
            Email Mohamed
          </GlowButton>
          <GlowButton href={socialLinks.upwork} variant="secondary" icon={<Briefcase size={18} className="sm:w-5 sm:h-5" />}>
            Upwork Profile
          </GlowButton>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href={`mailto:${socialLinks.email}`}
            className="flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 bg-slate-dark/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-cyber-lime/50 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-lime" />
            <span className="text-sm sm:text-base text-slate-300">Email</span>
          </motion.a>

          <motion.a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 bg-slate-dark/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-cyber-lime/50 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-lime" />
            <span className="text-sm sm:text-base text-slate-300">LinkedIn</span>
          </motion.a>

          <motion.a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 bg-slate-dark/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-cyber-lime/50 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-lime" />
            <span className="text-sm sm:text-base text-slate-300">GitHub</span>
          </motion.a>

          <motion.button
            onClick={copyEmail}
            className="flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 bg-slate-dark/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-cyber-lime/50 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-lime" />
                <span className="text-sm sm:text-base text-cyber-lime">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-lime" />
                <span className="text-sm sm:text-base text-slate-300">Copy Email</span>
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Trust Elements */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-cyber-lime" />
            <span>Remote and hybrid friendly</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-cyber-lime" />
            <span>Available for senior data and ML roles</span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

