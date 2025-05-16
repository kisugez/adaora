"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, ExternalLink, Globe, Heart, Users, Award } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { ParallaxSection } from "@/components/parallax-section"
import { ParallaxScroll } from "@/components/parallax-scroll"
import { ParallaxBackground } from "@/components/parallax-background"
import { motion } from "framer-motion"
import { PartnerCarousel } from "@/components/partner-carousel"
import { VerifiedPartnerBadge } from "@/components/verified-partner-badge"

export default function PartnersPage() {
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
                    Our <span className="text-brown-700">Partners</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Collaborating with organizations that share our vision for accessible feminine hygiene and women's
                    empowerment.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-brown-700 hover:bg-brown-800">
                    Become a Partner
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-brown-700 text-brown-700 hover:bg-cream-100">
                    View Partnership Benefits
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </ParallaxScroll>
            <ParallaxScroll direction="down" speed={0.2}>
              <div className="flex justify-center">
                <Image
                  src="/continuous-line-female-silhouette-woman-face-minimalistic-style-trendy-vector-illustration_507280-165.png?height=400&width=400"
                  alt="Partnership Handshake"
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

      {/* Partner Promotions */}
      <ParallaxBackground speed={0.1}>
        <AnimatedSection className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4">
              <ParallaxScroll direction="up" speed={0.2}>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
                  Partner <span className="text-brown-700">Promotions</span>
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Special offers and initiatives from our trusted partners
                </p>
              </ParallaxScroll>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="hover-lift"
                >
                  <Card className="overflow-hidden h-full">
                    <div className="h-40 bg-white flex items-center justify-center p-4 relative">
                      <Image
                        src="/9.webp?height=100&width=200"
                        alt="Partner Logo 1"
                        width={200}
                        height={100}
                        className="object-contain"
                      />
                      <VerifiedPartnerBadge className="absolute top-2 right-2" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg">EcoFemme Products</h3>
                      <p className="text-sm text-gray-500 mt-2">
                        Get 20% off all EcoFemme reusable pads when you use code ADAORA20 at checkout. Valid until June
                        30, 2023.
                      </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full bg-brown-700 hover:bg-brown-800">
                        Shop Now
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="hover-lift"
                >
                  <Card className="overflow-hidden h-full">
                    <div className="h-40 bg-white flex items-center justify-center p-4 relative">
                      <Image
                        src="/10.jpg?height=100&width=200"
                        alt="Partner Logo 2"
                        width={200}
                        height={100}
                        className="object-contain"
                      />
                      <VerifiedPartnerBadge className="absolute top-2 right-2" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg">HerHealth Kenya</h3>
                      <p className="text-sm text-gray-500 mt-2">
                        Buy one, give one: For every menstrual cup purchased, HerHealth Kenya will donate one to a woman
                        in need.
                      </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full bg-brown-700 hover:bg-brown-800">
                        Learn More
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="hover-lift"
                >
                  <Card className="overflow-hidden h-full">
                    <div className="h-40 bg-white flex items-center justify-center p-4 relative">
                      <Image
                        src="/safecycle.png?height=100&width=200"
                        alt="Partner Logo 3"
                        width={200}
                        height={100}
                        className="object-contain"
                      />
                      <VerifiedPartnerBadge className="absolute top-2 right-2" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg">SafeCycle</h3>
                      <p className="text-sm text-gray-500 mt-2">
                        Free educational workshop with every bulk order of SafeCycle products for schools and community
                        organizations.
                      </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full bg-brown-700 hover:bg-brown-800">
                        Contact Us
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </ParallaxBackground>

      {/* Ad Spotlight */}
      <ParallaxBackground speed={0.15} className="bg-cream-50">
        <AnimatedSection className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4">
              <ParallaxScroll direction="up" speed={0.2}>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
                  Ad <span className="text-brown-700">Spotlight</span>
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Featuring our partners' latest campaigns and initiatives
                </p>
              </ParallaxScroll>

              <div className="w-full mt-8">
                <PartnerCarousel />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </ParallaxBackground>

      {/* Verified Partners */}
      <ParallaxBackground speed={0.1}>
        <AnimatedSection className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4">
              <ParallaxScroll direction="up" speed={0.2}>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
                  Verified <span className="text-brown-700">Partners</span>
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Organizations that have met our standards for quality, ethics, and commitment to women's health
                </p>
              </ParallaxScroll>

              <Tabs defaultValue="manufacturers" className="w-full mt-6">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="manufacturers">Manufacturers</TabsTrigger>
                  <TabsTrigger value="ngos">NGOs & Nonprofits</TabsTrigger>
                  <TabsTrigger value="distributors">Distributors</TabsTrigger>
                </TabsList>
                <TabsContent value="manufacturers" className="w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <motion.div
                        key={`manufacturer-${i}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="hover-lift"
                      >
                        <Card className="overflow-hidden">
                          <div className="h-24 bg-white flex items-center justify-center p-4 relative">
                            <Image
                              src={`/placeholder.svg?height=60&width=120&text=Partner ${i}`}
                              alt={`Partner ${i}`}
                              width={120}
                              height={60}
                              className="object-contain"
                            />
                            <VerifiedPartnerBadge className="absolute top-2 right-2" size="sm" />
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-semibold text-sm">Partner Company {i}</h3>
                            <p className="text-xs text-gray-500 mt-1">Sustainable feminine hygiene products</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="ngos" className="w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <motion.div
                        key={`ngo-${i}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="hover-lift"
                      >
                        <Card className="overflow-hidden">
                          <div className="h-24 bg-white flex items-center justify-center p-4 relative">
                            <Image
                              src={`/placeholder.svg?height=60&width=120&text=NGO ${i}`}
                              alt={`NGO ${i}`}
                              width={120}
                              height={60}
                              className="object-contain"
                            />
                            <VerifiedPartnerBadge className="absolute top-2 right-2" size="sm" />
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-semibold text-sm">NGO Organization {i}</h3>
                            <p className="text-xs text-gray-500 mt-1">Women's health advocacy</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="distributors" className="w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={`distributor-${i}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="hover-lift"
                      >
                        <Card className="overflow-hidden">
                          <div className="h-24 bg-white flex items-center justify-center p-4 relative">
                            <Image
                              src={`/placeholder.svg?height=60&width=120&text=Distributor ${i}`}
                              alt={`Distributor ${i}`}
                              width={120}
                              height={60}
                              className="object-contain"
                            />
                            <VerifiedPartnerBadge className="absolute top-2 right-2" size="sm" />
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-semibold text-sm">Distribution Company {i}</h3>
                            <p className="text-xs text-gray-500 mt-1">Product distribution network</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </AnimatedSection>
      </ParallaxBackground>

      {/* Brand Stories */}
      <ParallaxBackground speed={0.15} className="bg-cream-50">
        <AnimatedSection className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4">
              <ParallaxScroll direction="up" speed={0.2}>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
                  Brand <span className="text-brown-700">Stories</span>
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn more about the organizations making a difference in women's health
                </p>
              </ParallaxScroll>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full">
                <ParallaxScroll direction="left" speed={0.3}>
                  <Card className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src="/TechnoServe_India.jpg?height=300&width=600"
                        alt="EcoFemme Story"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <VerifiedPartnerBadge size="sm" />
                        <span className="text-sm font-medium">Featured Partner</span>
                      </div>
                      <h3 className="font-semibold text-xl">EcoFemme: Sustainable Solutions for All</h3>
                      <p className="text-sm text-gray-600 mt-4">
                        Founded in 2010, EcoFemme has been at the forefront of creating sustainable, eco-friendly
                        menstrual products. Their mission aligns perfectly with ours: to ensure that every woman has
                        access to safe, affordable feminine hygiene products while minimizing environmental impact.
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        Through their innovative manufacturing processes and commitment to using organic materials,
                        they've created products that are both body-safe and planet-friendly. Their work in rural
                        communities has helped thousands of women gain access to reusable pads.
                      </p>
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-brown-700" />
                          <a
                            href="https://ecofemme.org/"
                            target="_blank" // Opens the link in a new tab or window
                            rel="noopener noreferrer" // Improves security by preventing access to the `window.opener` object
                            className="text-sm text-brown-700 hover:underline"
                          >
                            Visit Website
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-brown-700" />
                          <span className="text-sm text-gray-600">10,000+ women served</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ParallaxScroll>

                <ParallaxScroll direction="right" speed={0.3}>
                  <Card className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src="/1718928061107.jpeg?height=300&width=600"
                        alt="HerHealth Kenya Story"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <VerifiedPartnerBadge size="sm" />
                        <span className="text-sm font-medium">Featured Partner</span>
                      </div>
                      <h3 className="font-semibold text-xl">HerHealth Kenya: Local Solutions, Global Impact</h3>
                      <p className="text-sm text-gray-600 mt-4">
                        HerHealth Kenya is a women-led organization that manufactures affordable menstrual products
                        while providing employment opportunities for women in local communities. Their innovative
                        approach combines manufacturing with education and community outreach.
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        By sourcing materials locally and employing women from underserved communities, HerHealth Kenya
                        creates a sustainable cycle of economic empowerment. Their educational programs have reached
                        over 100 schools across Kenya, breaking stigma and providing accurate information about
                        menstrual health.
                      </p>
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-brown-700" />
                          <a
                            href="https://thepadproject.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-brown-700 hover:underline"
                          >
                            Visit Website
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-brown-700" />
                          <span className="text-sm text-gray-600">2022 Impact Award Winner</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ParallaxScroll>

                <ParallaxScroll direction="left" speed={0.3}>
                  <Card className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src="/brazil-team-1024x772.jpeg?height=300&width=600"
                        alt="SafeCycle Story"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <VerifiedPartnerBadge size="sm" />
                        <span className="text-sm font-medium">Featured Partner</span>
                      </div>
                      <h3 className="font-semibold text-xl">SafeCycle: Innovation for Accessibility</h3>
                      <p className="text-sm text-gray-600 mt-4">
                        SafeCycle has revolutionized the menstrual product market with their innovative, low-cost
                        disposable pads. By reimagining the manufacturing process and using locally sourced materials,
                        they've created products that are up to 40% more affordable than mainstream brands without
                        compromising on quality or comfort.
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        Their distribution network reaches even the most remote areas of Kenya, ensuring that women
                        everywhere have access to essential products. SafeCycle also invests in research and development
                        to continuously improve their products and reduce environmental impact.
                      </p>
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-brown-700" />
                          <a
                            href="https://safecyclepads.com/?srsltid=AfmBOorodh4-7xPmT7kOYVsFWQh1TCh9M8ICCgoyXvOPr0_kPZCdnckK"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-brown-700 hover:underline"
                          >
                            Visit Website
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Heart className="h-4 w-4 text-brown-700" />
                          <span className="text-sm text-gray-600">15 counties served</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ParallaxScroll>

                <ParallaxScroll direction="right" speed={0.3}>
                  <Card className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src="/EF-Learn-B-01.jpg?height=300&width=600"
                        alt="Women First NGO Story"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <VerifiedPartnerBadge size="sm" />
                        <span className="text-sm font-medium">Featured Partner</span>
                      </div>
                      <h3 className="font-semibold text-xl">Women First NGO: Education & Advocacy</h3>
                      <p className="text-sm text-gray-600 mt-4">
                        Women First is a nonprofit organization dedicated to menstrual health education and advocacy.
                        While they don't manufacture products themselves, their work in breaking stigma and providing
                        accurate information is invaluable to our mission.
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        Their comprehensive educational curriculum has been implemented in over 200 schools across
                        Kenya, reaching more than 50,000 girls. Women First also advocates for policy changes at the
                        government level, working to eliminate taxes on menstrual products and ensure that schools have
                        adequate facilities for menstrual hygiene management.
                      </p>
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-brown-700" />
                          <a
                            href="https://www.womenfirstfund.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-brown-700 hover:underline"
                          >
                            Visit Website
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-brown-700" />
                          <span className="text-sm text-gray-600">50,000+ girls educated</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ParallaxScroll>
              </div>

              <div className="w-full flex justify-center mt-8">
                <Button className="bg-brown-700 hover:bg-brown-800">
                  View All Partner Stories
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </ParallaxBackground>

      {/* Become a Partner CTA */}
      <ParallaxSection className="w-full py-12 md:py-24 bg-gradient-to-r from-cream-50 to-cream-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ParallaxScroll direction="left" speed={0.3}>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
                    Join Our <span className="text-brown-700">Network</span>
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                    Partner with Adaora to expand your reach and make a meaningful impact in women's health across
                    Kenya.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-cream-100 p-2 mt-1">
                      <Globe className="h-5 w-5 text-brown-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Expanded Reach</h3>
                      <p className="text-sm text-gray-600">
                        Access our network of distribution channels and community connections across Kenya.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-cream-100 p-2 mt-1">
                      <Users className="h-5 w-5 text-brown-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Collaborative Impact</h3>
                      <p className="text-sm text-gray-600">
                        Join forces with like-minded organizations to create greater change together than we could
                        separately.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-cream-100 p-2 mt-1">
                      <Award className="h-5 w-5 text-brown-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Verified Partner Status</h3>
                      <p className="text-sm text-gray-600">
                        Earn the trust of consumers with our Verified Partner badge, signifying quality and ethical
                        standards.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-brown-700 hover:bg-brown-800">
                    Apply to Become a Partner
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-brown-700 text-brown-700 hover:bg-cream-100">
                    Download Partnership Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </ParallaxScroll>
            <ParallaxScroll direction="right" speed={0.3}>
              <div className="flex justify-center">
                <Image
                  src="/Woman-Line-1.png?height=400&width=400"
                  alt="Partnership Network"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </ParallaxScroll>
          </div>
        </div>
      </ParallaxSection>
    </div>
  )
}
