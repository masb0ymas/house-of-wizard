import { IconArrowRight, IconBinary, IconChartLine, IconDatabase } from '@tabler/icons-react'
import Link from 'next/link'

import HeroRadarChart from '@/components/block/site/hero-radar-chart'
import { Button } from '@/components/ui/button'

const disciplines = [
  { icon: IconDatabase, label: 'Blockchain data' },
  { icon: IconChartLine, label: 'DeFi analytics' },
  { icon: IconBinary, label: 'Smart contracts' },
]

const marketSignals = [
  { label: 'DEX volume', value: '+18.4%' },
  { label: 'Active wallets', value: '+7.2%' },
  { label: 'Bridge flows', value: '$42.8M' },
  { label: 'Protocol fees', value: '+12.6%' },
]

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-section-wash"
      />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold-soft px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-gold-foreground uppercase">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
            Web3 data analyst school
          </p>
          <h1 className="mt-7 font-serif text-4xl leading-[1.08] font-semibold tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem]">
            Read the chain.
            <span className="mt-1 block text-gradient-brand">Shape what comes next.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Learn to turn blockchain data into clear, useful insight—with practical training in
            on-chain analytics, DeFi, and smart contracts.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button className="h-12 w-full gap-2 rounded-xl px-6 font-semibold sm:w-auto" asChild>
              <Link href="/webinar/batch">
                Explore the cohort
                <IconArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="h-12 w-full rounded-xl px-6 font-medium sm:w-auto"
              asChild
            >
              <Link href="#learning-phase">View learning plans</Link>
            </Button>
          </div>
          <ul aria-label="Areas of study" className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {disciplines.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Icon aria-hidden="true" className="h-4 w-4 text-primary" strokeWidth={1.8} />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] overflow-hidden px-1.5 sm:overflow-visible sm:px-0 lg:ml-auto">
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-[2.25rem] bg-[radial-gradient(ellipse_at_center,var(--glow-a),transparent_68%)] blur-xl"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#19152b] p-6 text-white shadow-2xl shadow-primary/15 sm:p-8">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
            />
            <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-[10px] font-medium tracking-[0.2em] text-white/55 uppercase">
                Dune analytics
              </span>
              <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.16em] text-white/70 uppercase">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live market pulse
              </span>
            </div>

            <div
              role="img"
              aria-label="Radar chart comparing this week's on-chain activity against last week across DEX volume, active wallets, bridge flows, protocol fees, and TVL"
              className="relative"
            >
              <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pb-2">
                <span className="text-[10px] font-medium tracking-[0.18em] text-white/55 uppercase">
                  On-chain activity · Ethereum
                </span>
                <div className="flex items-center gap-4 text-[10px] whitespace-nowrap text-white/70">
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 shrink-0 rounded-[2px] bg-[oklch(0.702_0.183_293.541)]"
                    />
                    This week
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 shrink-0 rounded-[2px] bg-[oklch(0.828_0.189_84.429)]"
                    />
                    Last week
                  </span>
                </div>
              </div>
              <HeroRadarChart />
            </div>

            <div className="relative mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {marketSignals.map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-2.5 backdrop-blur-sm sm:px-3"
                >
                  <p className="text-[8px] tracking-[0.1em] whitespace-nowrap text-white/50 uppercase sm:text-[9px]">
                    {label}
                  </p>
                  <p className="mt-1.5 text-xs font-semibold tabular-nums text-white sm:text-sm">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative mt-5 grid grid-cols-3 border-t border-white/10 pt-4 text-center sm:pt-5">
              {['Data', 'DeFi', 'Contracts'].map((label, index) => (
                <div key={label} className={index > 0 ? 'border-l border-white/10' : undefined}>
                  <p className="text-[10px] font-medium tracking-[0.18em] text-white/75 uppercase">
                    {label}
                  </p>
                  <p className="mt-1 text-[10px] text-white/40">Learn by doing</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
