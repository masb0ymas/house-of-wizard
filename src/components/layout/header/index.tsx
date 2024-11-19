'use client'

import { Bell, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { RainbowButton } from '~/components/ui/rainbow-button'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menus = [
    {
      name: 'Webinar',
      link: '/webinar',
    },
    {
      name: 'Courses',
      link: '/',
    },
    {
      name: 'Resources',
      link: '/',
    },
    {
      name: 'Community',
      link: '/',
    },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo-how.png" alt="House of Wizard" className="h-10 w-10" />
            <span className="font-bold font-serif text-xl">House of Wizard</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {menus.map((item) => (
              <Link key={item.name} href={item.link} className="text-gray-600 hover:text-gray-900">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-4">
            {/* Notifications */}
            <button className="p-2 text-gray-600 hover:text-gray-900 relative">
              <Bell className="h-6 w-6" />
              <span className="absolute top-1 right-1 bg-red-500 rounded-full w-2 h-2"></span>
            </button>

            <div className="h-6 w-px bg-gray-200"></div>

            <Link href="/sign-in">
              <RainbowButton className="h-10 font-serif">
                <span>Get Access</span>
              </RainbowButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menus.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}

              <Link href="/sign-in">
                <RainbowButton className="h-10">
                  <span>Get Access</span>
                </RainbowButton>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
