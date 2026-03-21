import { Link } from '@tanstack/react-router'

import { FooterMenu } from './menu'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
              <span className="font-serif text-xl font-bold tracking-wide text-white">
                House of Wizard
              </span>
            </div>
            <p className="text-sm">
              Empowering the next generation of Web3 data analysts through comprehensive online
              education.
            </p>
            <div className="flex space-x-4">
              {FooterMenu.socialMedia.map((item) => (
                <Link key={item.name} to={item.href} className="transition hover:text-indigo-500">
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Course Categories */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold tracking-wide text-white">
              Course Categories
            </h3>
            <ul className="space-y-2">
              {FooterMenu.courseCategories.map((category) => (
                <li key={category.name}>
                  <Link to={category.href} className="text-sm transition hover:text-indigo-500">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {FooterMenu.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm transition hover:text-indigo-500">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold tracking-wide text-white">
              Support
            </h3>
            <ul className="space-y-2">
              {FooterMenu.support.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm transition hover:text-indigo-500">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-neutral-400">
              © {new Date().getFullYear()} House of Wizard. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6 text-sm text-neutral-400">
                <Link to="/terms" className="transition hover:text-indigo-500">
                  Terms
                </Link>
                <Link to="/privacy" className="transition hover:text-indigo-500">
                  Privacy
                </Link>
                <Link to="/" className="transition hover:text-indigo-500">
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
