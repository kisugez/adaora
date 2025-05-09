"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import type { ReactNode } from "react"

interface ParallaxScrollProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  speed?: number
  className?: string
}

export function ParallaxScroll({ children, direction = "up", speed = 0.5, className = "" }: ParallaxScrollProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const distance = speed * 100

  const yUp = useTransform(scrollYProgress, [0, 1], [`${distance}px`, "0px"])
  const yDown = useTransform(scrollYProgress, [0, 1], ["0px", `${distance}px`])
  const xLeft = useTransform(scrollYProgress, [0, 1], [`${distance}px`, "0px"])
  const xRight = useTransform(scrollYProgress, [0, 1], ["0px", `${distance}px`])

  // Calculate transform based on direction
  let transform = {}

  switch (direction) {
    case "up":
      transform = { y: yUp }
      break
    case "down":
      transform = { y: yDown }
      break
    case "left":
      transform = { x: xLeft }
      break
    case "right":
      transform = { x: xRight }
      break
  }

  return (
    <motion.div ref={ref} style={transform} className={className}>
      {children}
    </motion.div>
  )
}
