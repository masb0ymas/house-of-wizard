import { IconArrowRight, IconSparkles } from '@tabler/icons-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { RainbowButton } from '@/components/ui/rainbow-button'

export default function CallToAction() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-section-wash" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold-soft px-4 py-1 text-xs font-semibold tracking-wider text-gold-foreground uppercase">
              <IconSparkles aria-hidden="true" className="h-4 w-4" />
              Your next move
            </div>
            <h2 className="font-serif text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-5xl">
              Become a Web3 data analyst with
              <span className="text-gradient-brand block font-bold">House of Wizard</span>
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Unlock the skills to interpret on-chain activity, DeFi flows, and token movements.
              Learn with real datasets, mentor feedback, and a career roadmap built for modern Web3
              analysts.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <RainbowButton className="h-12 gap-2 rounded-xl px-7" asChild>
                <Link href="/webinar/batch">
                  <span className="font-serif font-semibold tracking-wider">Join the Cohort</span>
                  <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </RainbowButton>
              <Button
                variant="outline"
                className="h-12 rounded-xl px-7 font-serif font-semibold tracking-wider"
                asChild
              >
                <Link href="/webinar">Explore Courses</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              {[
                'Live cohort sessions',
                'Portfolio-ready dashboards',
                'Web3 analyst mentorship',
              ].map((item) => (
                <span key={item} className="rounded-full border border-border bg-card/70 px-3 py-1">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-border/80 bg-card/80 p-6 shadow-xl shadow-primary/5 backdrop-blur sm:p-7">
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                    What you will master
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-foreground">
                    Learn the analyst stack end to end.
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    'On-chain data sourcing + SQL queries on real protocols.',
                    'DeFi metrics, token velocity, and TVL trend analysis.',
                    'Narrative building for investor-ready reports.',
                    'Weekly feedback from House of Wizard mentors.',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-border/50 bg-accent/45 px-4 py-3 leading-6"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm leading-6 text-muted-foreground">
                  Spots are limited. Secure your place and start building a Web3 data career with
                  House of Wizard.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
