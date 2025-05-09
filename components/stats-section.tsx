"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function StatsSection() {
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
    <section className="w-full py-12 md:py-16 bg-cream-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
              The <span className="text-brown-700">Reality</span>
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Understanding the challenges women face in Kenya
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <Card className="border-cream-200">
                <CardContent className="p-6 flex flex-col items-center justify-center space-y-2">
                  <div className="text-4xl font-bold text-brown-700">65%</div>
                  <p className="text-sm text-gray-600 text-center">of women in Kenya cannot afford sanitary products</p>
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
                  <div className="text-4xl font-bold text-brown-700">2,800</div>
                  <p className="text-sm text-gray-600 text-center">
                    KSh per month for sanitary products (80 KSh per pad)
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
              <Card className="border-cream-200">
                <CardContent className="p-6 flex flex-col items-center justify-center space-y-2">
                  <div className="text-4xl font-bold text-brown-700">65%</div>
                  <p className="text-sm text-gray-600 text-center">
                    of girls miss school during their periods due to lack of products
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
