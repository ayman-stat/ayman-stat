'use client'

import { motion } from 'framer-motion'
import { Target, Lightbulb, TrendingUp, Heart } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import GradientText from '@/components/shared/GradientText'

const highlights = [
  { icon: Target, text: 'Strategic Problem Solver' },
  { icon: Lightbulb, text: 'Data Storyteller' },
  { icon: TrendingUp, text: 'Business Impact Focus' },
]

const interests = ['Chess', 'Tech Blogs', 'Data Visualization', 'Open Source']

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-midnight-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Image Gallery Placeholder */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="aspect-square bg-slate-dark/50 backdrop-blur-sm border border-slate-700 rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl md:text-4xl">📊</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              About <GradientText>Me</GradientText>
            </h2>

            <div className="space-y-3 md:space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed mb-6 md:mb-8">
              <p>
                With over 5 years of experience in data science, I&apos;ve dedicated my career to
                transforming complex data into actionable insights that drive multimillion-dollar
                business decisions.
              </p>
              <p>
                My journey started with a passion for solving problems through data. From building
                my first churn prediction model to leading teams of data scientists, I&apos;ve always
                focused on creating solutions that deliver measurable business impact.
              </p>
              <p>
                I believe in the power of data storytelling and making analytics accessible to
                everyone. Whether it&apos;s automating reporting processes or building production ML
                models, my goal is always the same: turn data into decisions.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-slate-dark/50 backdrop-blur-sm border border-slate-700 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, borderColor: '#00ff88' }}
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-cyber-lime flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-300">{highlight.text}</span>
                  </motion.div>
                )
              })}
            </div>

            {/* Interests */}
            <div className="flex flex-wrap items-center gap-2 mb-6 md:mb-8">
              <span className="text-slate-400 text-xs sm:text-sm">Interests:</span>
              {interests.map((interest, index) => (
                <motion.span
                  key={index}
                  className="px-2.5 md:px-3 py-1 bg-slate-dark/50 border border-slate-700 rounded-full text-xs sm:text-sm text-slate-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, borderColor: '#00ff88' }}
                >
                  {interest}
                </motion.span>
              ))}
            </div>

            {/* Fun Fact */}
            <motion.div
              className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-pink-500 flex-shrink-0 mt-0.5 md:mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1 md:mb-2 text-sm md:text-base">Fun Fact</h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    I once reduced a 4-hour Excel reporting process to 1 minute using Python
                    automation - that&apos;s a 99.6% time reduction! 🚀
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

