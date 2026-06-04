'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Link from 'next/link'

interface GlowButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  icon?: ReactNode
}

export default function GlowButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  icon,
}: GlowButtonProps) {
  const baseClasses = 'px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-data-blue to-cyber-lime text-white hover:shadow-lg hover:shadow-cyber-lime/50',
    secondary: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/50',
    outline: 'bg-slate-dark/50 border-2 border-cyber-lime text-cyber-lime hover:bg-cyber-lime/10',
  }

  const content = (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.div>
  )

  if (href) {
    if (href.startsWith('#')) {
      return (
        <a href={href} className="inline-block">
          {content}
        </a>
      )
    }
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a href={href} className="inline-block" target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    )
  }

  return <button type="button">{content}</button>
}

