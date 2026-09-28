import type { Metadata } from 'next'

import { IconArrowRight, IconClock, IconMail, IconSend, IconUsers } from '@tabler/icons-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { DIRECT_CONTACTS } from '@/data/mock-site'
import { META } from '@/lib/constants/meta'

export const metadata: Metadata = {
  ...META,
  title: 'Contact | House of Wizard',
}

const helpTopics = [
  'Cohort enrollment and analyst readiness assessments.',
  'Custom training for protocol or DAO analytics teams.',
  'Research collaborations and on-chain data strategy.',
  'Community partnerships and event invitations.',
]

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-brand-canvas py-24 sm:py-28">
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[var(--glow-b)] blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[var(--glow-a)] blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold-soft px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-gold-foreground uppercase">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
            Contact House of Wizard
          </span>
          <h1 className="max-w-3xl font-serif text-4xl leading-[1.08] font-semibold tracking-tight text-foreground sm:text-5xl">
            Let&apos;s build clarity from <span className="text-gradient-brand">web3 data</span>.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Whether you&apos;re exploring a cohort, need guidance on analytics, or want to
            collaborate with the House of Wizard team, we&apos;re ready to listen.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button radius="full" className="h-11 gap-2 px-5 font-semibold" asChild>
              <a href="mailto:info@house-of-wizard.xyz">
                <IconMail aria-hidden="true" className="h-4 w-4" />
                Email our team
              </a>
            </Button>
            <Button
              variant="outline"
              radius="full"
              className="h-11 gap-2 px-5 font-semibold"
              asChild
            >
              <Link href="/about">
                Learn about House of Wizard
                <IconArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl border border-border bg-card/80 p-6 shadow-xs sm:p-8">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/60 to-transparent"
              />
              <p className="text-xs font-semibold tracking-[0.2em] text-gold-foreground uppercase">
                Contact form
              </p>
              <h2 className="mt-2 font-serif text-xl font-semibold tracking-tight text-foreground">
                Send us a message
              </h2>
              <p className="mt-2 leading-7 text-muted-foreground">
                Share the details of your inquiry and we will respond within one business day.
              </p>
              <form className="mt-6 grid gap-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="font-semibold text-foreground/80">
                      Full name
                    </Label>
                    <Input id="name" name="name" variant="lg" placeholder="Your name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="font-semibold text-foreground/80">
                      Email address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      variant="lg"
                      placeholder="you@domain.com"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="role" className="font-semibold text-foreground/80">
                    Role or team
                  </Label>
                  <Input
                    id="role"
                    name="role"
                    variant="lg"
                    placeholder="Data analyst, founder, DAO"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message" className="font-semibold text-foreground/80">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    variant="lg"
                    rows={5}
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Button type="button" className="h-11 gap-2 rounded-full px-6 font-semibold">
                    <IconSend aria-hidden="true" className="h-4 w-4" />
                    Send message
                  </Button>
                  <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <IconClock aria-hidden="true" className="h-4 w-4 text-gold-foreground" />
                    We respond within one business day.
                  </p>
                </div>
              </form>
            </div>

            <div className="rounded-xl border border-border bg-card/80 p-6 shadow-xs sm:p-8">
              <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground">
                What we can help with
              </h3>
              <ul className="mt-4 space-y-2.5">
                {helpTopics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-start gap-3 rounded-xl border border-border/50 bg-accent/45 px-4 py-3 leading-6 text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="flex flex-col gap-6 lg:self-start">
            <div className="rounded-xl border border-border bg-card/80 p-6 shadow-xs">
              <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground">
                Direct channels
              </h3>
              <div className="mt-5 space-y-5">
                {DIRECT_CONTACTS.map(({ name, value, href, icon: Icon }) => (
                  <div key={name} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-accent/50 text-primary"
                    >
                      <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                        {name}
                      </p>
                      {href !== '#' ? (
                        <a
                          href={href}
                          className="mt-0.5 inline-block text-sm font-semibold text-foreground underline decoration-gold underline-offset-4 transition hover:text-primary"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm leading-6 text-foreground">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-border bg-card/80 p-6 shadow-xs">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"
              />
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary"
              >
                <IconUsers className="h-4.5 w-4.5" strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold tracking-tight text-foreground">
                Community pathway
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Join the House of Wizard community for peer reviews, research salons, and curated
                analyst discussions.
              </p>
              <Button variant="outline" radius="full" className="mt-4 font-semibold" asChild>
                <Link href="/about">
                  Explore the community
                  <IconArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="rounded-xl border border-border bg-card/80 p-6 shadow-xs">
              <p className="text-sm leading-6 text-muted-foreground">
                Your data is handled with care. Review our{' '}
                <Link
                  href="/privacy"
                  className="font-semibold text-foreground underline decoration-gold underline-offset-4 transition hover:text-foreground/80"
                >
                  privacy commitments
                </Link>
                .
              </p>
            </div>
          </aside>
        </section>
      </div>
    </div>
  )
}
