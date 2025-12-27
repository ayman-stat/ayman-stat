'use client'

import { motion } from 'framer-motion'
import { Download, ArrowDown, Linkedin, Mail } from 'lucide-react'
import { hero, socialLinks } from '@/data'
import GlowButton from '@/components/shared/GlowButton'
import GradientText from '@/components/shared/GradientText'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex(prev => (prev + 1) % hero.roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight-blue via-slate-dark to-midnight-blue" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.1),transparent_50%)]" />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyber-lime rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 flex-1 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center flex-1">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-8 lg:mt-0 lg:text-left"
          >
            {/* Badges */}
            {/* <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3 mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {hero.badges.map((badge, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1.5 md:px-4 md:py-2 bg-slate-dark/50 backdrop-blur-sm border border-slate-700 rounded-full text-xs md:text-sm text-slate-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: '#00ff88' }}
                >
                  {badge.icon} {badge.label}
                </motion.span>
              ))}
            </motion.div> */}

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-3 md:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <GradientText>{hero.name}</GradientText>
            </motion.h1>

            {/* Dynamic Role */}
            <motion.div
              className="h-14 sm:h-16 md:h-20 mb-3 md:mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {hero.roles.map((role, index) => (
                <motion.p
                  key={role}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-300 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: currentRoleIndex === index ? 1 : 0,
                    y: currentRoleIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{ position: index === currentRoleIndex ? 'relative' : 'absolute' }}
                >
                  {role}
                </motion.p>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-slate-400 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {hero.tagline}
            </motion.p>

            {/* Bio */}
            <motion.p
              className="text-sm sm:text-base text-slate-400 mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {hero.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
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
                icon={<Download size={18} className="md:w-5 md:h-5" />}
                className="text-sm md:text-base px-5 md:px-6 py-2.5 md:py-3"
              >
                {hero.cta.secondary.text}
              </GlowButton>
              <GlowButton
                href={hero.cta.connect.href}
                variant="secondary"
                className="text-sm md:text-base px-5 md:px-6 py-2.5 md:py-3"
              >
                {hero.cta.connect.text}
              </GlowButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-3 md:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
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
                href={`mailto:${socialLinks.email}`}
                className="p-2.5 md:p-3 bg-slate-dark/50 backdrop-blur-sm border border-slate-700 rounded-lg text-slate-300 hover:text-cyber-lime hover:border-cyber-lime transition-colors"
                whileHover={{ scale: 1.1, rotate: 0 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Send Email"
              >
                <Mail size={20} className="md:w-6 md:h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image Placeholder */}
          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-sm md:max-w-md mx-auto">
              {/* Glowing Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyber-lime via-data-blue to-cyber-lime opacity-75 blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.75, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />

              {/* Image Container */}
              <div className="relative bg-slate-dark/50 backdrop-blur-lg border-2 border-cyber-lime/50 rounded-2xl  aspect-auto flex flex-col items-center justify-center">
              <Image src="/logo.jpg" alt="nn" width={500} height={500} className='w-full h-full rounded-2xl' />
              </div>
            </div>
          </motion.div>
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
