"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function ImpactTracker() {
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
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
              Our <span className="text-brown-700">Impact</span>
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Together, we're making a difference in women's lives across Kenya
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <Card className="border-cream-200">
                <CardContent className="p-6 flex flex-col items-center justify-center space-y-2">
                  <div className="text-4xl font-bold text-brown-700">5,000+</div>
                  <p className="text-sm text-gray-600 text-center">Women served monthly</p>
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
              <Card className="border-cream-200">
                <CardContent className="p-6 flex flex-col items-center justify-center space-y-2">
                  <div className="text-4xl font-bold text-brown-700">25,000+</div>
                  <p className="text-sm text-gray-600 text-center">Products distributed</p>
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
              <Card className="border-cream-200">
                <CardContent className="p-6 flex flex-col items-center justify-center space-y-2">
                  <div className="text-4xl font-bold text-brown-700">50+</div>
                  <p className="text-sm text-gray-600 text-center">Schools reached</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <Card className="border-cream-200">
                <CardContent className="p-6 flex flex-col items-center justify-center space-y-2">
                  <div className="text-4xl font-bold text-brown-700">15+</div>
                  <p className="text-sm text-gray-600 text-center">Counties served</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
