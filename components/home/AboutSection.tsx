'use client'

import { motion } from 'framer-motion'
import { BadgeCheck, Brain, LineChart, MessageSquareText, ShieldCheck, Workflow } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import GradientText from '@/components/shared/GradientText'

const highlights = [
  { icon: MessageSquareText, text: 'Stakeholder-first discovery' },
  { icon: Workflow, text: 'Clean data workflows' },
  { icon: LineChart, text: 'Decision-ready outputs' },
]

const workStyle = [
  { icon: BadgeCheck, title: 'Credible claims', text: 'Public work is separated from confidential employer and client projects.' },
  { icon: Brain, title: 'Model with context', text: 'Predictive modeling is framed around retention, risk, forecasting, and measurable decisions.' },
  { icon: ShieldCheck, title: 'Confidential by design', text: 'No private employer, banking, healthcare, Upwork, or client data is exposed.' },
]

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-midnight-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Operating Model */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              {workStyle.map((item, index) => {
                const Icon = item.icon
                return (
                <motion.div
                  key={item.title}
                  className="bg-slate-dark/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-cyber-lime/10 border border-cyber-lime/20">
                      <Icon className="w-5 h-5 text-cyber-lime" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
                )
              })}
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
              A Practical <GradientText>Data Partner</GradientText>
            </h2>

            <div className="space-y-3 md:space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed mb-6 md:mb-8">
              <p>
                I work best where data science, business intelligence, and stakeholder communication
                meet. My background covers banking risk analytics, telecom commercial reporting,
                healthcare operations, sports and fitness analytics, consulting, and global freelance
                data analysis.
              </p>
              <p>
                The work is usually practical: automate a recurring process, explain a risk signal,
                build a dashboard leaders can use, forecast an operational outcome, or model churn so
                retention teams can act earlier.
              </p>
              <p>
                I am also building a public GenAI and ML engineering portfolio through AWS Bedrock
                labs, DataTalks.Club ML Zoomcamp work, and data engineering projects, while keeping
                confidential employer and client work protected.
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

            <p className="text-sm text-slate-500">
              Public portfolio claims are intentionally conservative. Metrics are published only
              when they can be shared safely and verified.
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

