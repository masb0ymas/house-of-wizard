import { IconArrowRight, IconBinary, IconChartLine, IconDatabase } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'

import { Button } from '~/components/ui/button'
import { RainbowButton } from '~/components/ui/rainbow-button'
import { ShineBorder } from '~/components/ui/shine-border'
import { SparklesText } from '~/components/ui/sparkles-text'
import { ASSETS } from '~/lib/constants/assets'

export default function HeroSection() {
  return (
    <div className="mt-8 flex items-center justify-center bg-linear-to-br from-indigo-100 via-white to-purple-100 py-16 sm:h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-lg bg-white md:shadow-xl">
                <ShineBorder
                  borderWidth={2}
                  duration={14}
                  shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']}
                />
                <img
                  src={ASSETS.BRAND_LOGO}
                  alt="House of Wizard"
                  className="z-10 h-44 w-44 object-contain"
                  width={176}
                  height={176}
                />
              </div>
            </div>
            <SparklesText className="font-serif font-bold tracking-wide text-neutral-900">
              House of Wizard
            </SparklesText>

            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Transform blockchain data into actionable insights. Learn how to analyze Web3 data and
              start your career in the decentralized future.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link to="/webinar/batch" className="inline-flex items-center justify-center">
              <RainbowButton className="h-11 w-full gap-2 rounded-lg px-8 pt-1">
                <span className="font-serif font-semibold tracking-wider">Join Private</span>
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </RainbowButton>
            </Link>

            <Button
              variant={'outline'}
              className="h-11 gap-2 rounded-lg px-8 py-2 font-medium shadow-sm transition duration-300 ease-in-out hover:shadow-xl"
            >
              <span className="font-serif text-base font-semibold tracking-wider">
                View Courses
              </span>
            </Button>
          </div>

          <div className="flex flex-col gap-8 pt-4 sm:flex-row md:justify-center md:pt-6">
            <div className="flex items-center gap-2">
              <IconDatabase className="h-6 w-6 text-indigo-600" />
              <span className="text-gray-600">Blockchain Data</span>
            </div>
            <div className="flex items-center gap-2">
              <IconChartLine className="h-6 w-6 text-indigo-600" />
              <span className="text-gray-600">DeFi Analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <IconBinary className="h-6 w-6 text-indigo-600" />
              <span className="text-gray-600">Smart Contract Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
