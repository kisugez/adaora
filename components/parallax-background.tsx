"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import type { ReactNode } from "react"

interface ParallaxBackgroundProps {
  children: ReactNode
  className?: string
  speed?: number
}

export function ParallaxBackground({ children, className = "", speed = 0.2 }: ParallaxBackgroundProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(121, 85, 72, 0.05) 0%, rgba(255, 250, 235, 0.1) 100%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
