"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export function PartnerSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <section className="w-full py-12 md:py-24 bg-cream-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
            Partner <span className="text-brown-700">Promotions</span>
          </h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We partner with brands that share our vision for affordable, accessible feminine hygiene.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full">
            {/* Partner Cards */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <Card className="overflow-hidden">
                <div className="h-40 bg-white flex items-center justify-center p-4">
                  <Image
                    src="/9.webp"
                    alt="Partner Logo 1"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium">Verified Partner</span>
                  </div>
                  <h3 className="font-semibold text-lg">EcoFemme Products</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Sustainable, eco-friendly products at special discounted rates for Adaora customers.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <Card className="overflow-hidden">
                <div className="h-40 bg-white flex items-center justify-center p-4">
                  <Image
                    src="/10.jpg"
                    alt="Partner Logo 2"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium">Verified Partner</span>
                  </div>
                  <h3 className="font-semibold text-lg">HerHealth Kenya</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Local manufacturer providing quality products while supporting Kenyan communities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <Card className="overflow-hidden">
                <div className="h-40 bg-white flex items-center justify-center p-4">
                  <Image
                    src="/safecycle.png"
                    alt="Partner Logo 3"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium">Verified Partner</span>
                  </div>
                  <h3 className="font-semibold text-lg">SafeCycle</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Innovative menstrual products with a focus on health and comfort at affordable prices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="w-full mt-8 flex justify-center">
            <Link href="/about#join-our-mission">
            <Button variant="outline" className="border-brown-700 text-brown-700 hover:bg-cream-100">
              Become a Partner
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
