import { IconMenu2, IconX } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'

import { ASSETS } from '~/lib/constants/assets'

import { NavMenu } from './menu'
import Profile from './profile'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 right-0 left-0 z-50 transition-all duration-300">
      <nav className="z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src={ASSETS.BRAND_LOGO}
                alt="House of Wizard"
                className="h-12 w-12"
                width={80}
                height={80}
              />
              {/* <span className="font-bold font-serif tracking-wide text-xl">
                House of Wizard
              </span> */}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {NavMenu.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="font-medium text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Right Section */}
            <div className="hidden items-center gap-4 md:flex">
              <Profile />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                {open ? <IconX className="h-6 w-6" /> : <IconMenu2 className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="border-t border-gray-100 md:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {NavMenu.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="pt-2">
                  <Profile isMobile />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
