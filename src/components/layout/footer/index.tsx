import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconMail,
} from '@tabler/icons-react'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'
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
  { name: 'Terms of Service', href: '/terms-of-service' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Contact Us', href: '#' },
]

const socialMedia = [
  // { name: 'facebook', icon: IconBrandFacebook, href: '/' },
  // { name: 'instagram', icon: IconBrandInstagram, href: '/' },
  { name: 'twitter', icon: IconBrandTwitter, href: 'https://x.com/House_of_Wizard' },
  { name: 'discord', icon: IconBrandDiscord, href: 'https://discord.gg/zbDrjC4art' },
  { name: 'youtube', icon: IconBrandYoutube, href: 'https://www.youtube.com/@gulalijawa5870' },
  { name: 'telegram', icon: IconBrandTelegram, href: 'https://t.me/HouseofWizard' },
  { name: 'mail', icon: IconMail, href: 'mailto:info@house-of-wizard.xyz' },
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
              {/* <Image
                src="/logo-how.png"
                alt="House of Wizard"
                className="h-10 w-10"
                width={40}
                height={40}
              /> */}
              <span className="font-bold font-serif tracking-wide text-xl text-white">
                House of Wizard
              </span>
            </div>
            <p className="text-sm">
              Empowering the next generation of Web3 data analysts through comprehensive online
              education.
            </p>
            <div className="flex space-x-4">
              {socialMedia.map((item) => (
                <Link key={item.name} href={item.href} className="hover:text-indigo-500 transition">
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Course Categories */}
          <div>
            <h3 className="text-lg font-semibold font-serif tracking-wide text-white mb-4">
              Course Categories
            </h3>
            <ul className="space-y-2">
              {courseCategories.map((category) => (
                <li key={category.name}>
                  <Link href={category.href} className="text-sm hover:text-indigo-500 transition">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-serif tracking-wide text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-indigo-500 transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold font-serif tracking-wide text-white mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-indigo-500 transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
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
                <Link href="/terms-of-service" className="hover:text-indigo-500 transition">
                  Terms
                </Link>
                <Link href="/privacy-policy" className="hover:text-indigo-500 transition">
                  Privacy
                </Link>
                <Link href="/" className="hover:text-indigo-500 transition">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
