'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyber-lime to-data-blue bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-xl text-slate-400 mb-8">Page not found</p>
        <Link href="/">
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-data-blue to-cyber-lime rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyber-lime/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </motion.div>
        </Link>
      </motion.div>
    </div>
  )
}

