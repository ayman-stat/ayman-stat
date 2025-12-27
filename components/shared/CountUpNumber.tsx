'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import React from 'react'

interface CountUpNumberProps {
  value: number | string
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export default function CountUpNumber({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
}: CountUpNumberProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  // If value is a string (like "50+"), just display it
  if (typeof value === 'string') {
    return (
      <span className={className}>
        {prefix}
        {value}
        {suffix}
      </span>
    )
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      {isInView && (
        <CountUpDisplay
          value={value}
          duration={duration}
        />
      )}
      {suffix}
    </motion.span>
  )
}

function CountUpDisplay({ value, duration }: { value: number; duration: number }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      setDisplayValue(Math.floor(progress * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [value, duration])

  return <>{displayValue}</>
}


