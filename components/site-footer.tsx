import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-white py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-900">Adaora</span>
            </Link>
            <p className="text-sm text-gray-500 mt-2">Empowering Dignity Through Access to Feminine Hygiene</p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-gray-500 hover:text-primary-900">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary-900">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary-900">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="font-medium">Quick Links</div>
            <nav className="flex flex-col gap-2">
              <Link href="/products" className="text-sm text-gray-500 hover:text-primary-900">
                Products
              </Link>
              <Link href="/education" className="text-sm text-gray-500 hover:text-primary-900">
                Education
              </Link>
              <Link href="/community" className="text-sm text-gray-500 hover:text-primary-900">
                Community
              </Link>
              <Link href="/about" className="text-sm text-gray-500 hover:text-primary-900">
                About Us
              </Link>
              <Link href="/partners" className="text-sm text-gray-500 hover:text-primary-900">
                Partners
              </Link>
            </nav>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="font-medium">Support</div>
            <nav className="flex flex-col gap-2">
              <Link href="/faq" className="text-sm text-gray-500 hover:text-primary-900">
                FAQ
              </Link>
              <Link href="/contact" className="text-sm text-gray-500 hover:text-primary-900">
                Contact Us
              </Link>
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-primary-900">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-primary-900">
                Terms of Service
              </Link>
            </nav>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="font-medium">Subscribe to Our Newsletter</div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500">Stay updated with our latest products and initiatives.</p>
              <div className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-[220px]" />
                <Button className="bg-primary-900 hover:bg-primary-800">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} Adaora. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Image
                src="/placeholder.svg?height=30&width=80"
                alt="NGO Partner"
                width={80}
                height={30}
                className="object-contain"
              />
              <Image
                src="/placeholder.svg?height=30&width=80"
                alt="Government Partner"
                width={80}
                height={30}
                className="object-contain"
              />
              <Image
                src="/placeholder.svg?height=30&width=80"
                alt="Corporate Partner"
                width={80}
                height={30}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
