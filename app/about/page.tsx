"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Heart, Users, Target, Award } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { ParallaxSection } from "@/components/parallax-section"
import { ParallaxScroll } from "@/components/parallax-scroll"
import { ParallaxBackground } from "@/components/parallax-background"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <ParallaxSection className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cream-50 to-cream-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ParallaxScroll direction="up" speed={0.3}>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary-900">
                    About <span className="text-brown-700">Adaora</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Our mission is to provide effective, clean, affordable, and comfortable sustainable feminine hygiene
                    products to women with limited access.
                  </p>
                </div>
              </div>
            </ParallaxScroll>
            <ParallaxScroll direction="down" speed={0.2}>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Adaora Team"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </ParallaxScroll>
          </div>
        </div>
      </ParallaxSection>

      {/* Our Story */}
      <ParallaxBackground speed={0.1}>
        <AnimatedSection className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <ParallaxScroll direction="up" speed={0.2}>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
                    Our <span className="text-brown-700">Story</span>
                  </h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Adaora was founded with a simple yet powerful vision: to ensure that every woman in Kenya has access
                    to quality, affordable feminine hygiene products.
                  </p>
                </div>
              </ParallaxScroll>
              <ParallaxScroll direction="up" speed={0.3}>
                <div className="mx-auto max-w-3xl space-y-4 text-left">
                  <p className="text-gray-600">
                    Despite the removal of taxes on pads in 2017, over 65% of women in Kenya still cannot afford
                    sanitary products. At approximately 80 KSh per pad or 2,800 KSh per month, these essential items
                    remain out of reach for many, especially those from low-income households.
                  </p>
                  <p className="text-gray-600">
                    The consequences are far-reaching: 65% of girls miss school during their periods due to lack of
                    menstrual products, and women miss work, resulting in lost income. This not only affects individual
                    lives but also has broader economic implications.
                  </p>
                  <p className="text-gray-600">
                    Adaora was born from the need to address this critical gap. Our name, pronounced ad-a-o-ra,
                    represents our commitment to dignity, health, and empowerment for all women.
                  </p>
                </div>
              </ParallaxScroll>
            </div>
          </div>
        </AnimatedSection>
      </ParallaxBackground>

      {/* Our Values */}
      <ParallaxBackground speed={0.15}>
        <AnimatedSection className="w-full py-12 md:py-24 bg-cream-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <ParallaxScroll direction="up" speed={0.2}>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
                    Our <span className="text-brown-700">Values</span>
                  </h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    The principles that guide everything we do
                  </p>
                </div>
              </ParallaxScroll>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card className="border-cream-200">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <Heart className="h-12 w-12 text-brown-700" />
                    <h3 className="text-xl font-semibold">Compassion</h3>
                    <p className="text-sm text-gray-600">
                      We approach our work with empathy and understanding, recognizing the dignity of every woman we
                      serve.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card className="border-cream-200">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <Users className="h-12 w-12 text-brown-700" />
                    <h3 className="text-xl font-semibold">Inclusivity</h3>
                    <p className="text-sm text-gray-600">
                      We ensure our products and services are accessible to all women, regardless of their background or
                      circumstances.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card className="border-cream-200">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <Target className="h-12 w-12 text-brown-700" />
                    <h3 className="text-xl font-semibold">Sustainability</h3>
                    <p className="text-sm text-gray-600">
                      We prioritize environmentally friendly products and practices that benefit both people and the
                      planet.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card className="border-cream-200">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <Award className="h-12 w-12 text-brown-700" />
                    <h3 className="text-xl font-semibold">Quality</h3>
                    <p className="text-sm text-gray-600">
                      We never compromise on the quality of our products, ensuring they meet the highest standards of
                      comfort and safety.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </ParallaxBackground>

      {/* Team Section */}
      <ParallaxBackground speed={0.1}>
        <AnimatedSection className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <ParallaxScroll direction="up" speed={0.2}>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
                    Meet Our <span className="text-brown-700">Team</span>
                  </h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    The passionate individuals behind Adaora
                  </p>
                </div>
              </ParallaxScroll>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <ParallaxScroll direction="up" speed={0.3}>
                <div className="flex flex-col items-center space-y-2">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Team Member"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">Neema Wangui</h3>
                  <p className="text-sm text-brown-700">Founder & CEO</p>
                </div>
              </ParallaxScroll>

              <ParallaxScroll direction="up" speed={0.4}>
                <div className="flex flex-col items-center space-y-2">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Team Member"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">Erick Kisuge</h3>
                  <p className="text-sm text-brown-700">Operations Director</p>
                </div>
              </ParallaxScroll>

              <ParallaxScroll direction="up" speed={0.5}>
                <div className="flex flex-col items-center space-y-2">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Team Member"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">Clemm</h3>
                  <p className="text-sm text-brown-700">Community Outreach</p>
                </div>
              </ParallaxScroll>

              <ParallaxScroll direction="up" speed={0.6}>
                <div className="flex flex-col items-center space-y-2">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Team Member"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">David Kamau</h3>
                  <p className="text-sm text-brown-700">Partnerships Manager</p>
                </div>
              </ParallaxScroll>
            </div>
          </div>
        </AnimatedSection>
      </ParallaxBackground>

      {/* Join Us CTA */}
      <ParallaxSection className="w-full py-12 md:py-24 bg-gradient-to-r from-cream-50 to-cream-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <ParallaxScroll direction="up" speed={0.3}>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
                  Join Our <span className="text-brown-700">Mission</span>
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Together, we can make a difference in the lives of women across Kenya
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                <Button className="bg-brown-700 hover:bg-brown-800">
                  Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-brown-700 text-brown-700 hover:bg-cream-100">
                  Volunteer With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </ParallaxScroll>
          </div>
        </div>
      </ParallaxSection>
    </div>
  )
}
