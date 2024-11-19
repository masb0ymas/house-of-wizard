import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react'
import Link from 'next/link'

const courseCategories = [
  { name: 'Blockchain Basics', href: '#' },
  { name: 'DeFi Analytics', href: '#' },
  { name: 'Smart Contracts', href: '#' },
  { name: 'NFT Data Analysis', href: '#' },
]

const quickLinks = [
  { name: 'About Us', href: '#' },
  { name: 'Career Paths', href: '#' },
  { name: 'Success Stories', href: '#' },
  { name: 'Blog', href: '#' },
]

const support = [
  { name: 'Help Center', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Contact Us', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo-how.png" alt="House of Wizard" className="h-10 w-10" />
              <span className="font-bold text-xl text-white">House of Wizard</span>
            </div>
            <p className="text-sm">
              Empowering the next generation of Web3 data analysts through comprehensive online
              education.
            </p>
            <div className="flex space-x-4">
              <a href="/" className="hover:text-indigo-500 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="/" className="hover:text-indigo-500 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="/" className="hover:text-indigo-500 transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="/" className="hover:text-indigo-500 transition">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Course Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Course Categories</h3>
            <ul className="space-y-2">
              {courseCategories.map((category) => (
                <li key={category.name}>
                  <a href={category.href} className="text-sm hover:text-indigo-500 transition">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-indigo-500 transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm hover:text-indigo-500 transition">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <Link
                  href="mailto:info@house-of-wizard.xyz"
                  className="text-sm hover:text-indigo-500 transition"
                >
                  <span>info@house-of-wizard.xyz</span>
                </Link>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <Link
                  href="https://t.me/HouseofWizard"
                  className="text-sm hover:text-indigo-500 transition"
                >
                  <span>https://t.me/HouseofWizard</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} House of Wizard. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="/terms-of-service" className="hover:text-indigo-500 transition">
                  Terms
                </a>
                <a href="/privacy-policy" className="hover:text-indigo-500 transition">
                  Privacy
                </a>
                <a href="/" className="hover:text-indigo-500 transition">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
