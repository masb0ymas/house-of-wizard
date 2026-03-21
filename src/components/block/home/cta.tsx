import { IconArrowRight, IconSparkles } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'

import { Button } from '~/components/ui/button'
import { RainbowButton } from '~/components/ui/rainbow-button'

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.18),transparent_50%)]" />
      <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="absolute -bottom-28 left-0 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600">
              <IconSparkles className="h-4 w-4" />
              Opportunity
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-neutral-900 leading-tight">
              Become a Web3 Data Analyst with
              <span className="block text-indigo-700 font-bold">
                House of Wizard
              </span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-xl">
              Unlock the skills to interpret on-chain activity, DeFi flows, and
              token movements. Learn with real datasets, mentor feedback, and a
              career roadmap built for modern Web3 analysts.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/webinar/batch" className="inline-flex">
                <RainbowButton className="h-11 px-6 rounded-lg gap-2 pt-1">
                  <span className="font-serif font-semibold tracking-wider">
                    Join the Cohort
                  </span>
                  <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </RainbowButton>
              </Link>
              <Link to="/webinar" className="inline-flex">
                <Button
                  variant="outline"
                  className="h-11 px-6 rounded-lg font-serif font-semibold tracking-wider"
                >
                  Explore Courses
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-neutral-600">
              {[
                'Live cohort sessions',
                'Portfolio-ready dashboards',
                'Web3 analyst mentorship',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-neutral-200 bg-white/80 px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-xl backdrop-blur">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-indigo-600">
                    What you will master
                  </p>
                  <h3 className="text-2xl font-serif text-neutral-900">
                    Learn the analyst stack end to end.
                  </h3>
                </div>
                <ul className="space-y-4 text-sm text-neutral-600">
                  {[
                    'On-chain data sourcing + SQL queries on real protocols.',
                    'DeFi metrics, token velocity, and TVL trend analysis.',
                    'Narrative building for investor-ready reports.',
                    'Weekly feedback from House of Wizard mentors.',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-white/70 px-4 py-3"
                    >
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-2xl bg-indigo-50 px-4 py-3 text-sm text-indigo-700">
                  Spots are limited. Secure your place and start building a Web3
                  data career with House of Wizard.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
