import { IconArrowLeft } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '~/components/ui/button'
import { RainbowButton } from '~/components/ui/rainbow-button'

export default function NotFoundPage() {
  return (
    <main className="h-screen flex flex-col gap-4 justify-center items-center bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold font-serif">404</h1>
        <h4 className="text-base sm:text-4xl font-serif text-gray-600 dark:text-gray-300">Page Not Found</h4>
      </div>
      <p className="text-base sm:text-lg font-serif text-gray-600 dark:text-gray-300">
        The page you are looking for does not exist
      </p>
      <Link href={'/'}>
        <RainbowButton className="font-semibold font-serif gap-2">
          <IconArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </RainbowButton>
      </Link>
    </main>
  )
}
