import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, MapPin, MessageSquare, Users, Calendar } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cream-50 to-cream-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary-900">
                  Community Access Map
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Help us identify areas where women need better access to feminine hygiene products.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-primary-900 hover:bg-primary-800">
                  Report Access Issue
                  <MapPin className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-primary-900 text-primary-900 hover:bg-cream-100">
                  View Access Map
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/c9cb95119574227.60c35e74ec33a (1).png?height=400&width=600"
                alt="Kenya Access Map"
                width={600}
                height={400}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Report Access Issue Form */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
                  Report an Access Issue
                </h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                  Help us identify areas where women struggle to access affordable feminine hygiene products.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="grid gap-2">
                    <label
                      htmlFor="location"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Location
                    </label>
                    <Input id="location" placeholder="City, Town, or Village" />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="county"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      County
                    </label>
                    <Input id="county" placeholder="County" />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="issue"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Describe the Issue
                    </label>
                    <Textarea
                      id="issue"
                      placeholder="Please describe the access challenges in this area..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="contact"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Contact Information (Optional)
                    </label>
                    <Input id="contact" placeholder="Email or Phone Number" />
                  </div>
                  <Button className="bg-primary-900 hover:bg-primary-800 w-full sm:w-auto">
                    Submit Report
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-cream-100 p-2 mt-1">
                      <MapPin className="h-5 w-5 text-primary-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Why Report?</h3>
                      <p className="text-sm text-gray-600 mt-2">
                        Your reports help us identify areas of greatest need, allowing us to direct resources and
                        partnerships where they'll have the most impact. Together, we can ensure no woman goes without
                        essential hygiene products.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-cream-100 p-2 mt-1">
                      <Users className="h-5 w-5 text-primary-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Community Impact</h3>
                      <p className="text-sm text-gray-600 mt-2">
                        When you report an access issue, you're helping not just one person, but potentially an entire
                        community. Your input directly influences where we establish distribution points, partner with
                        local shops, and conduct educational workshops.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Forum Preview */}
      <section className="w-full py-12 md:py-24 bg-cream-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
                Community Forum
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join the conversation and connect with others in our community
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary-900" />
                    <span className="font-medium">Discussion</span>
                  </div>
                  <h3 className="font-semibold text-lg">Reusable Products: Tips and Experiences</h3>
                  <p className="text-sm text-gray-500">
                    Share your experiences with reusable menstrual products and learn from others.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>32 replies</span>
                    <span>•</span>
                    <span>Last post 2 hours ago</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full border-primary-900 text-primary-900 hover:bg-cream-100">
                  Join Discussion
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary-900" />
                    <span className="font-medium">Discussion</span>
                  </div>
                  <h3 className="font-semibold text-lg">Managing Period Pain Naturally</h3>
                  <p className="text-sm text-gray-500">
                    Natural remedies and techniques for managing menstrual cramps and discomfort.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>47 replies</span>
                    <span>•</span>
                    <span>Last post 1 day ago</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full border-primary-900 text-primary-900 hover:bg-cream-100">
                  Join Discussion
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary-900" />
                    <span className="font-medium">Discussion</span>
                  </div>
                  <h3 className="font-semibold text-lg">Talking to Your Daughter About Periods</h3>
                  <p className="text-sm text-gray-500">
                    Advice for parents on how to have open, supportive conversations about menstruation.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>28 replies</span>
                    <span>•</span>
                    <span>Last post 3 days ago</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full border-primary-900 text-primary-900 hover:bg-cream-100">
                  Join Discussion
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center mt-8">
            <Button className="bg-primary-900 hover:bg-primary-800">
              View All Discussions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
              Upcoming Events
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join us at these community events and workshops
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary-900" />
                    <div className="bg-cream-100 text-primary-900 px-3 py-1 rounded-full text-sm font-medium">
                      May 28, 2023
                    </div>
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
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary-900" />
                    <div className="bg-cream-100 text-primary-900 px-3 py-1 rounded-full text-sm font-medium">
                      June 15, 2023
                    </div>
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
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="border-primary-900 text-primary-900 hover:bg-cream-100">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-cream-50 to-cream-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900">
                  Become a Volunteer
                </h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                  Join our team of dedicated volunteers helping to make a difference in women's lives across Kenya.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-primary-900 hover:bg-primary-800">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-primary-900 text-primary-900 hover:bg-cream-100">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/feminine-face-line-art-minimalist-line-drawing-woman-face-beauty-fashion-logo-vector.png?height=400&width=400"
                alt="Volunteers"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
