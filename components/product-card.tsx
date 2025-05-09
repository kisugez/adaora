"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"

interface ProductCardProps {
  name: string
  price: number
  description: string
  imageSrc: string
}

export function ProductCard({ name, price, description, imageSrc }: ProductCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <div className="aspect-square relative">
          <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
          <div className="mt-2 font-bold text-brown-700">KSh {price}</div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button className="w-full bg-brown-700 hover:bg-brown-800">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
