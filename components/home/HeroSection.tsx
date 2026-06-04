'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import { hero, socialLinks } from '@/data'
import GlowButton from '@/components/shared/GlowButton'
import GradientText from '@/components/shared/GradientText'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
      <div className="absolute inset-0 bg-midnight-blue" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyber-lime/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 flex-1 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center flex-1">
          {/* Left Column - Text Content */}
          <div className="text-center mt-8 lg:mt-0 lg:text-left">
            {/* Name */}
            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-4 md:mb-5 leading-tight break-words max-w-[21rem] sm:max-w-none mx-auto lg:mx-0"
            >
              <GradientText>{hero.name}</GradientText>
            </motion.h1>

            {/* Role */}
            <motion.div
              className="text-lg sm:text-2xl md:text-3xl text-slate-200 font-semibold mb-4 leading-tight max-w-[20rem] sm:max-w-none mx-auto lg:mx-0"
            >
              {hero.roles.map((role, index) => (
                <span key={role} className="block md:inline">
                  {role}
                  {index < hero.roles.length - 1 && <span className="hidden md:inline"> | </span>}
                </span>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-cyber-lime mb-5 md:mb-6 max-w-[20rem] sm:max-w-2xl mx-auto lg:mx-0 font-medium"
            >
              {hero.tagline}
            </motion.p>

            {/* Bio */}
            <motion.p
              className="text-sm sm:text-base text-slate-300 mb-8 md:mb-10 max-w-[21rem] sm:max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {hero.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 md:gap-4 mb-8 md:mb-12 max-w-[18rem] sm:max-w-none mx-auto lg:mx-0"
            >
              <GlowButton
                href={hero.cta.primary.href}
                variant="primary"
                className="text-sm md:text-base px-5 md:px-6 py-2.5 md:py-3"
              >
                {hero.cta.primary.text}
              </GlowButton>
              <GlowButton
                href={hero.cta.secondary.href}
                variant="outline"
                className="text-sm md:text-base px-5 md:px-6 py-2.5 md:py-3"
              >
                {hero.cta.secondary.text}
              </GlowButton>
              <GlowButton
                href={hero.cta.connect.href}
                variant="secondary"
                icon={<MessageCircle size={18} className="md:w-5 md:h-5" />}
                className="text-sm md:text-base px-5 md:px-6 py-2.5 md:py-3"
              >
                {hero.cta.connect.text}
              </GlowButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-3 md:gap-4"
            >
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 bg-slate-dark/50 backdrop-blur-sm border border-slate-700 rounded-lg text-slate-300 hover:text-cyber-lime hover:border-cyber-lime transition-colors"
                whileHover={{ scale: 1.1, rotate: 0 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} className="md:w-6 md:h-6" />
              </motion.a>
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 bg-slate-dark/50 backdrop-blur-sm border border-slate-700 rounded-lg text-slate-300 hover:text-cyber-lime hover:border-cyber-lime transition-colors"
                whileHover={{ scale: 1.1, rotate: 0 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub Profile"
              >
                <Github size={20} className="md:w-6 md:h-6" />
              </motion.a>
              <motion.a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 bg-slate-dark/50 backdrop-blur-sm border border-slate-700 rounded-lg text-slate-300 hover:text-cyber-lime hover:border-cyber-lime transition-colors"
                whileHover={{ scale: 1.1, rotate: 0 }}
                whileTap={{ scale: 0.9 }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} className="md:w-6 md:h-6" />
              </motion.a>
              <motion.a
                href={`mailto:${socialLinks.email}`}
                className="p-2.5 md:p-3 bg-slate-dark/50 backdrop-blur-sm border border-slate-700 rounded-lg text-slate-300 hover:text-cyber-lime hover:border-cyber-lime transition-colors"
                whileHover={{ scale: 1.1, rotate: 0 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Send Email"
              >
                <Mail size={20} className="md:w-6 md:h-6" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Profile Image Placeholder */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative w-full max-w-sm md:max-w-md mx-auto">
              <div className="relative bg-slate-dark/70 border border-slate-700 rounded-2xl p-3 shadow-2xl shadow-black/20">
                <Image
                  src={hero.image}
                  alt="Mohamed Ayman professional portrait"
                  width={500}
                  height={500}
                  priority
                  className="w-full h-full rounded-xl object-cover"
                />
                <div className="absolute -bottom-4 left-6 right-6 rounded-xl border border-slate-700 bg-midnight-blue/95 p-4 shadow-xl">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-1">Portfolio focus</p>
                  <p className="text-sm text-slate-200">Data science, BI, ML engineering, and practical GenAI labs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - At the bottom of the section */}
        <motion.div
          className="flex justify-center mt-8 sm:mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-1.5 md:gap-2 text-slate-400 hover:text-cyber-lime transition-colors cursor-pointer group"
            onClick={() => {
              const statsSection = document.getElementById('stats')
              if (statsSection) {
                statsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            aria-label="Scroll to next section"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-xs md:text-sm font-medium group-hover:text-cyber-lime transition-colors">
              Scroll to explore
            </span>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowDown size={20} className="md:w-6 md:h-6 text-cyber-lime" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
