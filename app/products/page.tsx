"use client"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { ArrowUpDown } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { ParallaxBackground } from "@/components/parallax-background"
import { ParallaxScroll } from "@/components/parallax-scroll"
import { motion } from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ProductsPage() {
  return (
    <ParallaxBackground>
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <AnimatedSection>
          <div className="flex flex-col gap-4">
            <ParallaxScroll direction="up" speed={0.2}>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
                <span className="text-brown-700">Products</span>
              </h1>
              <p className="text-gray-600 md:text-xl">
                Browse our selection of affordable, sustainable feminine hygiene products.
              </p>
            </ParallaxScroll>
          </div>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Filters Sidebar */}
          <ParallaxScroll direction="left" speed={0.2}>
            <div className="w-full md:w-64 space-y-6">
              <div>
                <h3 className="font-medium mb-4">Product Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="type-reusable" />
                    <Label htmlFor="type-reusable">Reusable Pads</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="type-disposable" />
                    <Label htmlFor="type-disposable">Disposable Pads</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="type-menstrual-cups" />
                    <Label htmlFor="type-menstrual-cups">Menstrual Cups</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="type-period-panties" />
                    <Label htmlFor="type-period-panties">Period Panties</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="type-accessories" />
                    <Label htmlFor="type-accessories">Accessories</Label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-4">Price Range</h3>
                <div className="space-y-4">
                  <Slider defaultValue={[500]} max={2000} step={100} />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">KSh 0</span>
                    <span className="text-sm">KSh 2,000</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-4">Flow Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="flow-light" />
                    <Label htmlFor="flow-light">Light</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="flow-medium" />
                    <Label htmlFor="flow-medium">Medium</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="flow-heavy" />
                    <Label htmlFor="flow-heavy">Heavy</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="flow-overnight" />
                    <Label htmlFor="flow-overnight">Overnight</Label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-4">Material</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="material-cotton" />
                    <Label htmlFor="material-cotton">Cotton</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="material-bamboo" />
                    <Label htmlFor="material-bamboo">Bamboo</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="material-organic" />
                    <Label htmlFor="material-organic">Organic</Label>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-brown-700 hover:bg-brown-800">Apply Filters</Button>
            </div>
          </ParallaxScroll>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-xl font-semibold">All Products (12)</h2>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="ml-auto">
                    <ArrowUpDown className="w-4 h-4 mr-2" />
                    Sort by
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[200px]" align="end">
                  <DropdownMenuRadioGroup value="featured">
                    <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="low">Price: Low to High</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="high">Price: High to Low</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <ProductCard
                name="Eco-Friendly Reusable Pad"
                price={250}
                description="Comfortable, washable pad that lasts up to 2 years"
                imageSrc="/placeholder.svg?height=200&width=200"
              />
              <ProductCard
                name="Cotton Comfort Pad"
                price={300}
                description="100% organic cotton, gentle on sensitive skin"
                imageSrc="/placeholder.svg?height=200&width=200"
              />
              <ProductCard
                name="Night Protection Pad"
                price={350}
                description="Extra absorbent for overnight protection"
                imageSrc="/placeholder.svg?height=200&width=200"
              />
              <ProductCard
                name="Starter Kit"
                price={800}
                description="3 reusable pads with washing bag"
                imageSrc="/placeholder.svg?height=200&width=200"
              />
              <ProductCard
                name="Basic Disposable Pads (10pk)"
                price={50}
                description="Affordable protection for everyday use"
                imageSrc="/placeholder.svg?height=200&width=200"
              />
              <ProductCard
                name="Ultra Thin Pads (8pk)"
                price={60}
                description="Discreet protection for active days"
                imageSrc="/placeholder.svg?height=200&width=200"
              />
              <ProductCard
                name="Night Protection (6pk)"
                price={70}
                description="Extra coverage for overnight use"
                imageSrc="/placeholder.svg?height=200&width=200"
              />
              <ProductCard
                name="Monthly Supply Box"
                price={200}
                description="Complete monthly supply at discounted price"
                imageSrc="/placeholder.svg?height=200&width=200"
              />
              <ProductCard
                name="Menstrual Cup"
                price={500}
                description="Reusable for up to 10 years, eco-friendly alternative"
                imageSrc="/placeholder.svg?height=200&width=200"
              />
            </motion.div>

            <ParallaxScroll direction="up" speed={0.1}>
              <div className="flex justify-center mt-8">
                <Button variant="outline" className="mx-2">
                  Previous
                </Button>
                <Button variant="outline" className="mx-2 bg-cream-100">
                  1
                </Button>
                <Button variant="outline" className="mx-2">
                  2
                </Button>
                <Button variant="outline" className="mx-2">
                  3
                </Button>
                <Button variant="outline" className="mx-2">
                  Next
                </Button>
              </div>
            </ParallaxScroll>
          </div>
        </div>
      </div>
    </ParallaxBackground>
  )
}
