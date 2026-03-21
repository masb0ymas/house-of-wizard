import { Link } from '@tanstack/react-router'

import { FooterMenu } from './menu'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
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
              Empowering the next generation of Web3 data analysts through
              comprehensive online education.
            </p>
            <div className="flex space-x-4">
              {FooterMenu.socialMedia.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="hover:text-indigo-500 transition"
                >
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
              {FooterMenu.courseCategories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.href}
                    className="text-sm hover:text-indigo-500 transition"
                  >
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
              {FooterMenu.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-indigo-500 transition"
                  >
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
              {FooterMenu.support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm hover:text-indigo-500 transition"
                  >
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-neutral-400">
              © {new Date().getFullYear()} House of Wizard. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6 text-sm text-neutral-400">
                <Link to="/terms" className="hover:text-indigo-500 transition">
                  Terms
                </Link>
                <Link
                  to="/privacy"
                  className="hover:text-indigo-500 transition"
                >
                  Privacy
                </Link>
                <Link to="/" className="hover:text-indigo-500 transition">
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
