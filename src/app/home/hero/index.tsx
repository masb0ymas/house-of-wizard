import { IconArrowRight, IconBinary, IconChartLine, IconDatabase } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import { RainbowButton } from '~/components/ui/rainbow-button'
import ShineBorder from '~/components/ui/shine-border'
import SparklesText from '~/components/ui/sparkles-text'

export default function Hero() {
  return (
    <div className="pt-24 pb-16 mt-8 sm:h-screen flex justify-center items-center bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="flex flex-col justify-center items-center gap-4">
              <ShineBorder
                className="relative h-48 w-48 min-h-48 min-w-48 p-0 flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
              >
                <Image
                  src="/logo-how.png"
                  alt="House of Wizard"
                  className="h-48 w-48 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
                  width={192}
                  height={192}
                />
              </ShineBorder>
            </div>
            <SparklesText text="House of Wizard" className="tracking-wide" />

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform blockchain data into actionable insights. Learn how to analyze Web3 data and
              start your career in the decentralized future.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
            <Link href="/webinar/batch">
              <RainbowButton className="gap-2">
                <span className="font-serif font-semibold tracking-wider">Join Private</span>
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </RainbowButton>
            </Link>

            <Button
              variant={'outline'}
              className="px-8 py-2 font-medium h-11 shadow-sm hover:shadow-xl transition ease-in-out duration-300 gap-2"
              radius={'xl'}
            >
              <span className="text-base font-serif font-semibold tracking-wider">
                View Courses
              </span>
            </Button>
          </div>

          <div className="flex sm:flex-row flex-col md:justify-center gap-8 pt-12">
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
