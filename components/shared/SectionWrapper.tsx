'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function SectionWrapper({ children, className = '', id }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`py-16 sm:py-20 md:py-24 lg:py-32 ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
    >
      {children}
    </motion.section>
  )
}

