"use client"

import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface EducationCardProps {
  title: string
  description: string
  icon: ReactNode
  href: string
}

export function EducationCard({ title, description, icon, href }: EducationCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <CardContent className="p-6">
          <div className="mb-4 text-brown-700">{icon}</div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-500 mt-2">{description}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Link href={href} className="w-full">
            <Button
              variant="ghost"
              className="w-full justify-start p-0 text-brown-700 hover:text-brown-800 hover:bg-transparent"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
