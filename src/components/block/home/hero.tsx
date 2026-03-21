import {
  IconArrowRight,
  IconBinary,
  IconChartLine,
  IconDatabase,
} from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'

import { Button } from '~/components/ui/button'
import { RainbowButton } from '~/components/ui/rainbow-button'
import { ShineBorder } from '~/components/ui/shine-border'
import { SparklesText } from '~/components/ui/sparkles-text'
import { ASSETS } from '~/lib/constants/assets'

export default function HeroSection() {
  return (
    <div className="py-16 mt-8 sm:h-screen flex justify-center items-center bg-linear-to-br from-indigo-100 via-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="relative h-48 w-48 flex items-center justify-center overflow-hidden rounded-lg bg-white md:shadow-xl">
                <ShineBorder
                  borderWidth={2}
                  duration={14}
                  shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']}
                />
                <img
                  src={ASSETS.BRAND_LOGO}
                  alt="House of Wizard"
                  className="h-44 w-44 object-contain z-10"
                  width={176}
                  height={176}
                />
              </div>
            </div>
            <SparklesText className="tracking-wide font-serif text-neutral-900 font-bold">
              House of Wizard
            </SparklesText>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform blockchain data into actionable insights. Learn how to
              analyze Web3 data and start your career in the decentralized
              future.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
            <Link
              to="/webinar/batch"
              className="inline-flex items-center justify-center"
            >
              <RainbowButton className="gap-2 w-full h-11 px-8 rounded-lg pt-1">
                <span className="font-serif font-semibold tracking-wider">
                  Join Private
                </span>
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </RainbowButton>
            </Link>

            <Button
              variant={'outline'}
              className="px-8 py-2 rounded-lg font-medium h-11 shadow-sm hover:shadow-xl transition ease-in-out duration-300 gap-2"
            >
              <span className="text-base font-serif font-semibold tracking-wider">
                View Courses
              </span>
            </Button>
          </div>

          <div className="flex sm:flex-row flex-col md:justify-center gap-8 pt-4 md:pt-6">
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
