"use client"

import Image from "next/image"
import { ArrowRight, ShoppingBag, BookOpen, Users, MapPin, Calendar, CreditCard, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StatsSection } from "@/components/stats-section"
import { ProductCard } from "@/components/product-card"
import { PartnerSection } from "@/components/partner-section"
import { EducationCard } from "@/components/education-card"
import { ImpactTracker } from "@/components/impact-tracker"
import { AnimatedSection } from "@/components/animated-section"
import { ParallaxSection } from "@/components/parallax-section"
import { ParallaxScroll } from "@/components/parallax-scroll"
import { ParallaxBackground } from "@/components/parallax-background"
import { motion, useAnimation, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import Link from "next/link"

export default function Home() {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  // Animation controls for automatic motion
  const controls = useAnimation()

  useEffect(() => {
    // Start the animation when the component mounts
    controls.start({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6 },
    })
  }, [controls])

  return (
    <div className="flex flex-col min-h-screen" ref={scrollRef}>
      {/* Hero Section with Parallax */}
      <ParallaxSection className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cream-50 to-cream-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={controls} // Use animation controls
              style={{ opacity, scale }}
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary-900">
                  Empowering Dignity Through <span className="text-brown-700">Access to Feminine Hygiene</span>
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Providing effective, clean, affordable, and comfortable sustainable feminine hygiene products to women
                  with limited access.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {/* Link to Products Section */}
                <Link href="/products">
                  <Button className="bg-brown-700 hover:bg-brown-800">
                    Shop Affordable Pads
                    <ShoppingBag className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                {/* Link to Join Our Mission Section in About Us Page */}
                <Link href="/about#join-our-mission">
                  <Button variant="outline" className="border-brown-700 text-brown-700 hover:bg-cream-100">
                    Join the Movement
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            <ParallaxScroll direction="down" speed={0.2}>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="/Woman-Line-1.png"
                  alt="Adaora Hero Image"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                  priority
                />
              </motion.div>
            </ParallaxScroll>
          </div>
        </div>
      </ParallaxSection>

      {/* Quick Stats Section */}
      <ParallaxBackground>
        <AnimatedSection delay={0.1}>
          <StatsSection />
        </AnimatedSection>
      </ParallaxBackground>

      {/* Mission Snapshot */}
      <ParallaxBackground speed={0.1}>
        <AnimatedSection className="w-full py-12 md:py-24 bg-white" delay={0.2}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <ParallaxScroll direction="up" speed={0.3}>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
                    Our <span className="text-brown-700">Mission</span>
                  </h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Aligning with SDG 3: Good Health & Well-being, we're committed to ensuring every woman has access to
                    quality, affordable feminine hygiene products.
                  </p>
                </div>
              </ParallaxScroll>
            </div>
          </div>
        </AnimatedSection>
      </ParallaxBackground>

      {/* Product Marketplace */}
      <ParallaxBackground speed={0.15}>
        <AnimatedSection className="w-full py-12 md:py-24 bg-cream-50" delay={0.3}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4">
              <ParallaxScroll direction="up" speed={0.2}>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
                  Product <span className="text-brown-700">Marketplace</span>
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our selection of affordable, sustainable feminine hygiene products.
                </p>
              </ParallaxScroll>

              <Tabs defaultValue="reusable" className="w-full mt-6">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="reusable">Reusable Pads</TabsTrigger>
                  <TabsTrigger value="disposable">Low-cost Disposable</TabsTrigger>
                </TabsList>
                <TabsContent value="reusable" className="w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <ProductCard
                      name="Eco-Friendly Reusable Pad"
                      price={250}
                      description="Comfortable, washable pad that lasts up to 2 years"
                      imageSrc="/1.jpg?height=200&width=200"
                    />
                    <ProductCard
                      name="Cotton Comfort Pad"
                      price={300}
                      description="100% organic cotton, gentle on sensitive skin"
                      imageSrc="/2.webp?height=200&width=200"
                    />
                    <ProductCard
                      name="Night Protection Pad"
                      price={350}
                      description="Extra absorbent for overnight protection"
                      imageSrc="/8D long- PDP_FSA.jpg?height=200&width=200"
                    />
                    <ProductCard
                      name="Starter Kit"
                      price={800}
                      description="3 reusable pads with washing bag"
                      imageSrc="/4.jpg?height=200&width=200"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="disposable" className="w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <ProductCard
                      name="Basic Disposable Pads (10pk)"
                      price={50}
                      description="Affordable protection for everyday use"
                      imageSrc="/5.jpg?height=200&width=200"
                    />
                    <ProductCard
                      name="Ultra Thin Pads (8pk)"
                      price={60}
                      description="Discreet protection for active days"
                      imageSrc="/6.jpg?height=200&width=200"
                    />
                    <ProductCard
                      name="Night Protection (6pk)"
                      price={70}
                      description="Extra coverage for overnight use"
                      imageSrc="/7.webp?height=200&width=200"
                    />
                    <ProductCard
                      name="Monthly Supply Box"
                      price={200}
                      description="Complete monthly supply at discounted price"
                      imageSrc="/8.jpg?height=200&width=200"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </AnimatedSection>
      </ParallaxBackground>

      {/* Partner Promotions */}
      <ParallaxBackground speed={0.1}>
        <AnimatedSection delay={0.4}>
          <PartnerSection />
        </AnimatedSection>
      </ParallaxBackground>

      {/* Awareness & Education Hub */}
      <ParallaxBackground speed={0.2}>
        <AnimatedSection className="w-full py-12 md:py-24 bg-white" delay={0.5}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4">
              <ParallaxScroll direction="up" speed={0.3}>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
                  Awareness & <span className="text-brown-700">Education Hub</span>
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Resources to break stigma and promote menstrual health education.
                </p>
              </ParallaxScroll>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full">
                <EducationCard
                  title="Understanding Your Cycle"
                  description="Learn about the menstrual cycle and how to track it for better health."
                  icon={<BookOpen className="h-8 w-8 text-brown-700" />}
                  href="/education/cycle"
                />
                <EducationCard
                  title="Menstrual Health Myths"
                  description="Debunking common myths and misconceptions about periods."
                  icon={<Users className="h-8 w-8 text-brown-700" />}
                  href="/education/myths"
                />
                <EducationCard
                  title="School Programs"
                  description="How we're bringing menstrual education to schools across Kenya."
                  icon={<MapPin className="h-8 w-8 text-brown-700" />}
                  href="/education/schools"
                />
              </div>

              <div className="w-full mt-8">
                <Button variant="outline" className="border-brown-700 text-brown-700 hover:bg-cream-100">
                  View All Resources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </ParallaxBackground>

      {/* Community Map Preview */}
      <ParallaxBackground speed={0.15}>
        <AnimatedSection className="w-full py-12 md:py-24 bg-cream-50" delay={0.6}>
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <ParallaxScroll direction="left" speed={0.3}>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
                      Community <span className="text-brown-700">Access Map</span>
                    </h2>
                    <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                      Help us identify areas where women need better access to feminine hygiene products.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button className="bg-brown-700 hover:bg-brown-800">
                      Report Access Issue
                      <MapPin className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="border-brown-700 text-brown-700 hover:bg-cream-100">
                      View Access Map
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </ParallaxScroll>
              <ParallaxScroll direction="right" speed={0.3}>
                <div className="flex justify-center">
                  <Image
                    src="/map.png?height=400&width=600"
                    alt="Kenya Access Map"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </ParallaxScroll>
            </div>
          </div>
        </AnimatedSection>
      </ParallaxBackground>

      {/* Subscription Model */}
      <ParallaxBackground speed={0.1}>
        <AnimatedSection className="w-full py-12 md:py-24 bg-white" delay={0.7}>
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <ParallaxScroll direction="left" speed={0.2}>
                <div className="flex justify-center">
                  <Image
                    src="/12.png?height=400&width=400"
                    alt="Subscription Box"
                    width={1400}
                    height={1600}
                    className="rounded-lg object-cover"
                  />
                </div>
              </ParallaxScroll>
              <ParallaxScroll direction="right" speed={0.2}>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
                      Monthly <span className="text-brown-700">Subscription</span>
                    </h2>
                    <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                      Never worry about running out of supplies. Get monthly deliveries at discounted prices.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <Calendar className="h-10 w-10 text-brown-700" />
                          <div>
                            <h3 className="text-lg font-semibold">Choose Your Kit</h3>
                            <p className="text-sm text-gray-500">Select products and delivery frequency</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <CreditCard className="h-10 w-10 text-brown-700" />
                          <div>
                            <h3 className="text-lg font-semibold">Easy Payment</h3>
                            <p className="text-sm text-gray-500">M-Pesa, cash on delivery, or vouchers</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <Heart className="h-10 w-10 text-brown-700" />
                          <div>
                            <h3 className="text-lg font-semibold">Sponsor a Woman</h3>
                            <p className="text-sm text-gray-500">Help provide products to those in need</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <Button className="bg-brown-700 hover:bg-brown-800 w-full sm:w-auto">
                    Start Your Subscription
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </ParallaxScroll>
            </div>
          </div>
        </AnimatedSection>
      </ParallaxBackground>

      {/* Impact Tracker */}
      <ParallaxBackground speed={0.05}>
        <AnimatedSection delay={0.8}>
          <ImpactTracker />
        </AnimatedSection>
      </ParallaxBackground>
    </div>
  )
}
