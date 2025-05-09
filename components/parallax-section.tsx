"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import type { ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  bgImage?: string
  speed?: number
  overlay?: boolean
}

export function ParallaxSection({
  children,
  className = "",
  bgImage,
  speed = 0.5,
  overlay = false,
}: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 30}%`])

  return (
    <motion.section
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {bgImage && (
        <motion.div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: backgroundY,
          }}
        />
      )}
      {overlay && <div className="absolute inset-0 bg-black/30 z-0" />}
      <motion.div className="relative z-10" style={{ y: contentY }}>
        {children}
      </motion.div>
    </motion.section>
  )
}
