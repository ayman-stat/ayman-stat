'use client'

import { motion } from 'framer-motion'
import { blogPosts } from '@/data'
import { Clock, ArrowRight } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import GradientText from '@/components/shared/GradientText'

export default function BlogPreview() {
  return (
    <SectionWrapper id="blog" className="bg-midnight-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Latest <GradientText>Insights</GradientText>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Articles and case studies from my data science journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="group relative bg-slate-dark/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyber-lime/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Thumbnail Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-data-blue/20 to-cyber-lime/20 flex items-center justify-center">
                <div className="text-3xl sm:text-4xl">📝</div>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-cyber-lime transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-slate-500 text-xs sm:text-sm">
                    <Clock size={14} className="sm:w-4 sm:h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <motion.button
                    className="flex items-center gap-1.5 sm:gap-2 text-cyber-lime text-xs sm:text-sm font-semibold"
                    whileHover={{ gap: 3 }}
                  >
                    Read More
                    <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                  </motion.button>
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
          <motion.button
            className="px-6 py-3 md:px-8 md:py-4 bg-slate-dark/50 border border-slate-700 rounded-lg text-white text-sm md:text-base font-semibold hover:border-cyber-lime/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Articles (Coming Soon)
          </motion.button>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

