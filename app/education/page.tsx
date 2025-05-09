import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BookOpen, Users, School, Download } from "lucide-react"

export default function EducationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cream-50 to-cream-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary-900">
                  Education & Awareness
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Breaking stigma and promoting menstrual health education across Kenya.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-primary-900 hover:bg-primary-800">
                  Browse Resources
                  <BookOpen className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-primary-900 text-primary-900 hover:bg-cream-100">
                  Join a Workshop
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Education Hero"
                width={400}
                height={400}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resource Tabs */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
              Educational Resources
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our comprehensive collection of menstrual health resources.
            </p>

            <Tabs defaultValue="articles" className="w-full mt-6">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="articles">Articles & Guides</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="downloads">Downloadable Resources</TabsTrigger>
              </TabsList>
              <TabsContent value="articles" className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Article Image"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg">Understanding Your Menstrual Cycle</h3>
                      <p className="text-sm text-gray-500 mt-2">
                        A comprehensive guide to tracking and understanding your monthly cycle.
                      </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Link href="/education/articles/menstrual-cycle">
                        <Button
                          variant="ghost"
                          className="p-0 text-primary-900 hover:text-primary-800 hover:bg-transparent"
                        >
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Article Image"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg">Debunking Menstrual Myths</h3>
                      <p className="text-sm text-gray-500 mt-2">
                        Separating fact from fiction about periods and menstrual health.
                      </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Link href="/education/articles/myths">
                        <Button
                          variant="ghost"
                          className="p-0 text-primary-900 hover:text-primary-800 hover:bg-transparent"
                        >
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Article Image"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg">Choosing the Right Products</h3>
                      <p className="text-sm text-gray-500 mt-2">
                        A guide to selecting the best menstrual products for your needs.
                      </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Link href="/education/articles/products-guide">
                        <Button
                          variant="ghost"
                          className="p-0 text-primary-900 hover:text-primary-800 hover:bg-transparent"
                        >
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="videos" className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="overflow-hidden">
                    <div className="aspect-video relative bg-gray-100 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Video Thumbnail"
                        width={500}
                        height={300}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full bg-white/80 p-3">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 5V19L19 12L8 5Z" fill="#121212" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg">How to Use Reusable Pads</h3>
                      <p className="text-sm text-gray-500 mt-2">
                        A step-by-step guide to using and caring for reusable menstrual pads.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="aspect-video relative bg-gray-100 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Video Thumbnail"
                        width={500}
                        height={300}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full bg-white/80 p-3">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 5V19L19 12L8 5Z" fill="#121212" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg">Managing Period Pain</h3>
                      <p className="text-sm text-gray-500 mt-2">
                        Practical tips and exercises to help manage menstrual cramps and discomfort.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="downloads" className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <Download className="h-10 w-10 text-primary-900" />
                        <div>
                          <h3 className="font-semibold text-lg">Menstrual Cycle Tracker</h3>
                          <p className="text-sm text-gray-500">Printable calendar to track your cycle</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button
                        variant="outline"
                        className="w-full border-primary-900 text-primary-900 hover:bg-cream-100"
                      >
                        Download PDF
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <Download className="h-10 w-10 text-primary-900" />
                        <div>
                          <h3 className="font-semibold text-lg">School Education Poster</h3>
                          <p className="text-sm text-gray-500">Informative poster for classrooms</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button
                        variant="outline"
                        className="w-full border-primary-900 text-primary-900 hover:bg-cream-100"
                      >
                        Download PDF
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <Download className="h-10 w-10 text-primary-900" />
                        <div>
                          <h3 className="font-semibold text-lg">Community Workshop Guide</h3>
                          <p className="text-sm text-gray-500">Resources for community educators</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button
                        variant="outline"
                        className="w-full border-primary-900 text-primary-900 hover:bg-cream-100"
                      >
                        Download PDF
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* School Programs */}
      <section className="w-full py-12 md:py-24 bg-cream-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="School Program"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
                  School Programs
                </h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                  We're bringing menstrual health education to schools across Kenya, empowering the next generation.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-cream-100 p-2 mt-1">
                    <School className="h-5 w-5 text-primary-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Classroom Workshops</h3>
                    <p className="text-sm text-gray-600">
                      Age-appropriate education sessions for students of all ages, breaking down stigma and providing
                      accurate information.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-cream-100 p-2 mt-1">
                    <Users className="h-5 w-5 text-primary-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Teacher Training</h3>
                    <p className="text-sm text-gray-600">
                      Equipping educators with the knowledge and resources to support students through their menstrual
                      health journey.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-cream-100 p-2 mt-1">
                    <BookOpen className="h-5 w-5 text-primary-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Educational Materials</h3>
                    <p className="text-sm text-gray-600">
                      Providing schools with posters, guides, and learning materials to reinforce menstrual health
                      education.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="bg-primary-900 hover:bg-primary-800 w-full sm:w-auto">
                Partner With Your School
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Workshops */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
                Community Workshops
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our upcoming events to learn more about menstrual health
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="bg-cream-100 text-primary-900 px-3 py-1 rounded-full text-sm font-medium w-fit">
                    May 28, 2023
                  </div>
                  <h3 className="font-semibold text-lg">Menstrual Hygiene Day Celebration</h3>
                  <p className="text-sm text-gray-500">
                    Join us for a day of education, celebration, and community building as we mark Menstrual Hygiene
                    Day.
                  </p>
                  <div className="text-sm text-gray-600">
                    <div>Location: Nairobi Community Center</div>
                    <div>Time: 10:00 AM - 4:00 PM</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-primary-900 hover:bg-primary-800">Register to Attend</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="bg-cream-100 text-primary-900 px-3 py-1 rounded-full text-sm font-medium w-fit">
                    June 15, 2023
                  </div>
                  <h3 className="font-semibold text-lg">Reusable Products Workshop</h3>
                  <p className="text-sm text-gray-500">
                    Learn how to use and care for reusable menstrual products in this hands-on workshop.
                  </p>
                  <div className="text-sm text-gray-600">
                    <div>Location: Mombasa Women's Center</div>
                    <div>Time: 2:00 PM - 5:00 PM</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-primary-900 hover:bg-primary-800">Register to Attend</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="bg-cream-100 text-primary-900 px-3 py-1 rounded-full text-sm font-medium w-fit">
                    July 8, 2023
                  </div>
                  <h3 className="font-semibold text-lg">Mother-Daughter Health Talk</h3>
                  <p className="text-sm text-gray-500">
                    A special session for mothers and daughters to learn and talk about menstrual health together.
                  </p>
                  <div className="text-sm text-gray-600">
                    <div>Location: Kisumu Family Center</div>
                    <div>Time: 11:00 AM - 1:00 PM</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-primary-900 hover:bg-primary-800">Register to Attend</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Become an Educator CTA */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-cream-50 to-cream-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
                Become an Educator
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Help us spread knowledge and break stigma in your community
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-primary-900 hover:bg-primary-800">
                Apply to Volunteer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-primary-900 text-primary-900 hover:bg-cream-100">
                Download Training Materials
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
