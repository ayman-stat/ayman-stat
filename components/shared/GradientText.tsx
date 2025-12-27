'use client'

import { ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  className?: string
  gradient?: string
}

export default function GradientText({
  children,
  className = '',
  gradient = 'from-cyber-lime via-data-blue to-cyber-lime',
}: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}

