import { IconMenu2, IconX } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'

import { ASSETS } from '~/lib/constants/assets'

import { NavMenu } from './menu'
import Profile from './profile'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav className=" w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
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
            <div className="hidden md:flex items-center gap-8">
              {NavMenu.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Right Section */}
            <div className="hidden md:flex items-center gap-4">
              <Profile />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                {open ? (
                  <IconX className="h-6 w-6" />
                ) : (
                  <IconMenu2 className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden border-t border-gray-100">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {NavMenu.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
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
