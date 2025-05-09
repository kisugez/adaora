"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Define navigation items
  const navItems = [
    { name: "Products", path: "/products" },
    { name: "Education", path: "/education" },
    { name: "Community", path: "/community" },
    { name: "About Us", path: "/about" },
    { name: "Partners", path: "/partners" },
  ]

  // Find active nav item
  const activeNavItem = navItems.find((item) => pathname === item.path || pathname.startsWith(`${item.path}/`))

  // Handle scroll animation
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur transition-all duration-300 ${
        scrolled ? "bg-white/95 supports-[backdrop-filter]:bg-white/60 shadow-sm" : "bg-white"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-900">Adaora</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 relative">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium transition-colors hover:text-brown-700 ${
                pathname === item.path || pathname.startsWith(`${item.path}/`) ? "text-brown-700" : "text-gray-600"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Animated underline indicator */}
          {activeNavItem && (
            <motion.div
              className="absolute bottom-[-16px] h-1 bg-brown-600 rounded-t-md"
              initial={false}
              animate={{
                left: (navItems.findIndex((item) => item.path === activeNavItem.path) * 100) / navItems.length + "%",
                width: `${100 / navItems.length}%`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brown-700 text-[10px] font-medium text-white">
                0
              </span>
            </Button>
          </Link>

          <Button className="hidden md:flex bg-brown-700 hover:bg-brown-800">Subscribe</Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden border-t py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="container flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.path || pathname.startsWith(`${item.path}/`)
                    ? "text-brown-700"
                    : "text-gray-600 hover:text-brown-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full bg-brown-700 hover:bg-brown-800 mt-2">Subscribe</Button>
          </nav>
        </motion.div>
      )}
    </header>
  )
}
