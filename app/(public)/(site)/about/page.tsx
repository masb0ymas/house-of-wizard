import type { Metadata } from 'next'

import {
  IconArrowRight,
  IconBook,
  IconChartLine,
  IconMail,
  IconPresentation,
  IconScale,
  IconSchool,
  IconSparkles,
  IconTarget,
  IconTrophy,
  IconUsers,
} from '@tabler/icons-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { META } from '@/lib/constants/meta'

export const metadata: Metadata = {
  ...META,
  title: 'About | House of Wizard',
}

function IconChip({ icon: Icon, tone }: { icon: typeof IconTarget; tone: 'gold' | 'primary' }) {
  return (
    <span
      aria-hidden="true"
      className={
        tone === 'gold'
          ? 'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold-soft text-gold-foreground'
          : 'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary'
      }
    >
      <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
    </span>
  )
}

function DotRow({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 rounded-xl border border-border/50 bg-accent/45 px-4 py-3 leading-6 text-muted-foreground">
      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
      <span>{children}</span>
    </li>
  )
}

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-brand-canvas py-24 sm:py-28">
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[var(--glow-b)] blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[var(--glow-a)] blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold-soft px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-gold-foreground uppercase">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
            House of Wizard
          </span>
          <h1 className="max-w-3xl font-serif text-4xl leading-[1.08] font-semibold tracking-tight text-foreground sm:text-5xl">
            Elegant, rigorous education for{' '}
            <span className="text-gradient-brand">web3 data analysts</span>.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            We are a premium learning studio shaping the next generation of web3 data analysts.
            House of Wizard blends research-grade analytics, cohort mentorship, and community
            guidance so learners can turn on-chain signals into confident decisions.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button radius="full" className="h-11 gap-2 px-5 font-semibold" asChild>
              <Link href="/contact">
                Join the community
                <IconArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              radius="full"
              className="h-11 gap-2 px-5 font-semibold"
              asChild
            >
              <Link href="/privacy">Our privacy approach</Link>
            </Button>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl border border-border bg-card/80 p-6 shadow-xs sm:p-8">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/60 to-transparent"
              />
              <div className="flex items-center gap-3">
                <IconChip icon={IconTarget} tone="gold" />
                <h2 className="font-serif text-xl font-semibold tracking-tight text-foreground">
                  Our mission
                </h2>
              </div>
              <p className="mt-4 leading-7 text-muted-foreground">
                We help analysts master blockchain data with confidence. From token flows to
                protocol health, we train you to ask sharper questions, build trusted dashboards,
                and deliver insights that move teams forward.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card/80 p-6 shadow-xs sm:p-8">
              <div className="flex items-center gap-3">
                <IconChip icon={IconBook} tone="primary" />
                <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground">
                  What you learn
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                <DotRow>On-chain data modeling and analytics workflows.</DotRow>
                <DotRow>Protocol growth, retention, and cohort analysis.</DotRow>
                <DotRow>Research storytelling for product and community teams.</DotRow>
                <DotRow>Ethical use of data in emerging web3 ecosystems.</DotRow>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card/80 p-6 shadow-xs sm:p-8">
              <div className="flex items-center gap-3">
                <IconChip icon={IconPresentation} tone="primary" />
                <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground">
                  How we deliver
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                <DotRow>Mentor-led cohorts with live case walkthroughs.</DotRow>
                <DotRow>Research studio sessions for portfolio-ready insights.</DotRow>
                <DotRow>Community critiques and feedback loops.</DotRow>
                <DotRow>Tools and templates tailored for web3 analytics.</DotRow>
              </ul>
            </div>
          </div>

          <aside className="flex flex-col gap-6 lg:self-start">
            <div className="rounded-xl border border-border bg-card/80 p-6 shadow-xs">
              <div className="flex items-center gap-3">
                <IconChip icon={IconScale} tone="gold" />
                <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground">
                  Brand pillars
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5 text-sm leading-6 text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span>
                    <strong className="font-semibold text-foreground">Craftsmanship:</strong>{' '}
                    elegant analysis and meticulous data narratives.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span>
                    <strong className="font-semibold text-foreground">Integrity:</strong>{' '}
                    transparent methods and privacy-first learning.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span>
                    <strong className="font-semibold text-foreground">Community:</strong> a global
                    network of analysts, builders, and mentors.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card/80 p-6 shadow-xs">
              <div className="flex items-center gap-3">
                <IconChip icon={IconUsers} tone="primary" />
                <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground">
                  Community touchpoints
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                We connect learners through curated circles and meaningful rituals that deepen
                skills and trust.
              </p>
              <ul className="mt-4 space-y-2.5">
                <DotRow>Weekly research salons and data discussions.</DotRow>
                <DotRow>Peer review lounges and portfolio feedback.</DotRow>
                <DotRow>Private events with web3 data leaders.</DotRow>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-border bg-card/80 p-6 shadow-xs">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"
              />
              <p className="text-sm leading-6 text-muted-foreground">
                Ready to turn insight into impact? Join House of Wizard and shape the future of web3
                analytics with us.
              </p>
            </div>
          </aside>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card/80 p-6 shadow-xs transition hover:border-primary/30 sm:p-7">
            <IconChip icon={IconSchool} tone="primary" />
            <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Experience
            </p>
            <p className="mt-3 font-serif text-2xl font-semibold tracking-tight text-foreground">
              Cohort-led learning
            </p>
            <p className="mt-2 leading-7 text-muted-foreground">
              Small, high-touch cohorts focused on mastery and accountability.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card/80 p-6 shadow-xs transition hover:border-primary/30 sm:p-7">
            <IconChip icon={IconChartLine} tone="primary" />
            <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Focus
            </p>
            <p className="mt-3 font-serif text-2xl font-semibold tracking-tight text-foreground">
              Web3 intelligence
            </p>
            <p className="mt-2 leading-7 text-muted-foreground">
              We specialize in on-chain data, protocols, and ecosystem growth.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card/80 p-6 shadow-xs transition hover:border-primary/30 sm:p-7">
            <IconChip icon={IconTrophy} tone="gold" />
            <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Outcomes
            </p>
            <p className="mt-3 font-serif text-2xl font-semibold tracking-tight text-foreground">
              Insight-ready portfolios
            </p>
            <p className="mt-2 leading-7 text-muted-foreground">
              Graduate with case studies and dashboards that earn trust.
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-2xl border border-border bg-[var(--footer-bg)] p-8 text-white shadow-md sm:p-10">
          <div
            aria-hidden="true"
            className="absolute -top-24 right-0 h-56 w-56 rounded-full bg-[var(--glow-a)] blur-3xl"
          />
          <div className="relative flex flex-col gap-4">
            <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.3em] text-gold uppercase">
              <IconSparkles aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
              The invitation
            </p>
            <h2 className="max-w-2xl font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              Join a community where analytics meets craft.
            </h2>
            <p className="max-w-2xl leading-7 text-[var(--footer-fg)] opacity-80">
              Whether you are leveling up or leading analytics at a protocol, House of Wizard is a
              home for thoughtful, ethical data builders. We would love to meet you.
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <RainbowButton className="h-12 gap-2 rounded-xl px-7" asChild>
                <Link href="/contact">
                  <span className="font-serif font-semibold tracking-wider">
                    Apply for the next cohort
                  </span>
                  <IconArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </RainbowButton>
              <Button
                variant="outline"
                className="h-12 gap-2 rounded-xl border-white/30 bg-transparent px-7 font-serif font-semibold tracking-wider text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href="mailto:info@house-of-wizard.xyz">
                  <IconMail aria-hidden="true" className="h-4 w-4" />
                  Talk with the team
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
