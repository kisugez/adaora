"use client"

import { createContext, useContext, useRef, useEffect, type ReactNode } from "react"
import { useScroll } from "framer-motion"

interface SmoothScrollContextType {
  scrollYProgress: any
}

const SmoothScrollContext = createContext<SmoothScrollContextType | null>(null)

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    container: containerRef,
  })

  // Apply smooth scrolling effect
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let raf: number
    let lastScrollY = window.scrollY

    const smoothScroll = () => {
      const currentScrollY = window.scrollY
      const diff = currentScrollY - lastScrollY
      const speed = 0.1 // Adjust for smoother/faster scrolling

      if (Math.abs(diff) < 0.1) {
        lastScrollY = currentScrollY
        container.scrollTop = currentScrollY
      } else {
        lastScrollY += diff * speed
        container.scrollTop = lastScrollY
      }

      raf = requestAnimationFrame(smoothScroll)
    }

    window.addEventListener("scroll", () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(smoothScroll)
    })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", smoothScroll)
    }
  }, [])

  return (
    <SmoothScrollContext.Provider value={{ scrollYProgress }}>
      <div
        ref={containerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "auto",
          perspective: "1px",
          perspectiveOrigin: "0 0",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </SmoothScrollContext.Provider>
  )
}

export function useSmoothScroll() {
  const context = useContext(SmoothScrollContext)
  if (!context) {
    throw new Error("useSmoothScroll must be used within a SmoothScrollProvider")
  }
  return context
}
