import type { Metadata } from 'next'

import { IconArrowRight, IconCalendarEvent, IconLifebuoy, IconSparkles } from '@tabler/icons-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { META } from '@/lib/constants/meta'

export const metadata: Metadata = {
  ...META,
  title: 'Terms of Service | House of Wizard',
}

const tableOfContents = [
  { id: 'definitions', label: 'Definitions' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'accounts', label: 'User accounts' },
  { id: 'payments', label: 'Payment & refunds' },
  { id: 'intellectual-property', label: 'Intellectual property' },
  { id: 'prohibited-conduct', label: 'Prohibited conduct' },
  { id: 'disclaimers', label: 'Disclaimers' },
  { id: 'liability', label: 'Limitation of liability' },
  { id: 'privacy', label: 'Privacy policy' },
  { id: 'termination', label: 'Termination' },
  { id: 'governing-law', label: 'Governing law' },
  { id: 'changes', label: 'Changes to terms' },
  { id: 'contact', label: 'Contact us' },
]

function SectionHeading({ index, id, title }: { index: number; id: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-primary/20 bg-primary/10 font-serif text-sm font-semibold text-primary"
      >
        {index}
      </span>
      <h2 id={id} className="font-serif text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
    </div>
  )
}

export default function TermPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="relative overflow-hidden bg-brand-canvas py-24 sm:py-28">
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[var(--glow-b)] blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[var(--glow-a)] blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold-soft px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-gold-foreground uppercase">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
            Terms &amp; learning standards
          </span>
          <h1 className="max-w-3xl font-serif text-4xl leading-[1.08] font-semibold tracking-tight text-foreground sm:text-5xl">
            Terms of <span className="text-gradient-brand">Service</span>
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Clear expectations that protect the integrity of our web3 data analyst community.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <IconCalendarEvent aria-hidden="true" className="h-3.5 w-3.5 text-gold" />
              Effective {lastUpdated}
            </span>
            <a
              href="#definitions"
              className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold text-primary transition hover:text-primary/80"
            >
              Jump to contents
              <IconArrowRight aria-hidden="true" className="h-3.5 w-3.5 rotate-90" />
            </a>
          </div>
        </header>

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[2.2fr_1fr]">
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl border border-border bg-card/80 p-6 shadow-xs sm:p-8">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/60 to-transparent"
              />
              <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                Effective date
              </p>
              <p className="mt-2 font-serif text-2xl font-semibold text-foreground">
                {lastUpdated}
              </p>
              <p className="mt-4 leading-7 text-muted-foreground">
                Welcome to <strong>House of Wizard</strong>. These Terms of Service
                (&quot;Terms&quot;) govern your use of our website, webinars, and online courses
                focused on data analysis and web3 intelligence. By accessing or using our services,
                you agree to comply with these Terms.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card/80 shadow-xs">
              <div className="divide-y divide-border">
                <section
                  id="definitions"
                  aria-labelledby="terms-definitions"
                  className="scroll-mt-28 p-6 sm:p-8"
                >
                  <SectionHeading index={1} id="terms-definitions" title="Definitions" />
                  <p className="mt-4 leading-7 text-muted-foreground">
                    &quot;We,&quot; &quot;us,&quot; and &quot;our&quot; refer to{' '}
                    <strong>House of Wizard</strong>. &quot;User,&quot; &quot;you,&quot; and
                    &quot;your&quot; refer to individuals accessing our services.
                    &quot;Services&quot; include the website, webinars, online courses, and
                    associated learning materials we provide.
                  </p>
                </section>

                <section
                  id="eligibility"
                  aria-labelledby="terms-eligibility"
                  className="scroll-mt-28 p-6 sm:p-8"
                >
                  <SectionHeading index={2} id="terms-eligibility" title="Eligibility" />
                  <p className="mt-4 leading-7 text-muted-foreground">
                    You must be at least 18 years old to use our services. If you are under 18,
                    parental or guardian consent is required.
                  </p>
                </section>

                <section
                  id="accounts"
                  aria-labelledby="terms-accounts"
                  className="scroll-mt-28 p-6 sm:p-8"
                >
                  <SectionHeading index={3} id="terms-accounts" title="User Accounts" />
                  <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 marker:text-primary/60 text-muted-foreground">
                    <li>
                      Some services require an account. You are responsible for keeping your login
                      credentials confidential.
                    </li>
                    <li>You must provide accurate and complete registration details.</li>
                  </ul>
                </section>

                <section
                  id="payments"
                  aria-labelledby="terms-payments"
                  className="scroll-mt-28 p-6 sm:p-8"
                >
                  <SectionHeading index={4} id="terms-payments" title="Payment and Refunds" />
                  <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 marker:text-primary/60 text-muted-foreground">
                    <li>
                      Payments for webinars, courses, and subscriptions are non-refundable unless
                      course-specific terms state otherwise.
                    </li>
                    <li>
                      Pricing may change, but adjustments do not affect payments already processed.
                    </li>
                  </ul>
                </section>

                <section
                  id="intellectual-property"
                  aria-labelledby="terms-intellectual-property"
                  className="scroll-mt-28 p-6 sm:p-8"
                >
                  <SectionHeading
                    index={5}
                    id="terms-intellectual-property"
                    title="Intellectual Property"
                  />
                  <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 marker:text-primary/60 text-muted-foreground">
                    <li>
                      All content, materials, and resources we provide are the intellectual property
                      of <strong>House of Wizard</strong> or its licensors.
                    </li>
                    <li>
                      You may not reproduce, distribute, or share materials without prior written
                      consent.
                    </li>
                  </ul>
                </section>

                <section
                  id="prohibited-conduct"
                  aria-labelledby="terms-prohibited-conduct"
                  className="scroll-mt-28 p-6 sm:p-8"
                >
                  <SectionHeading
                    index={6}
                    id="terms-prohibited-conduct"
                    title="Prohibited Conduct"
                  />
                  <p className="mt-4 leading-7 text-muted-foreground">You agree not to:</p>
                  <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 marker:text-primary/60 text-muted-foreground">
                    <li>Use our services for unlawful or unauthorized purposes.</li>
                    <li>Share your account access with others.</li>
                    <li>Copy, modify, or resell our materials without permission.</li>
                  </ul>
                </section>

                <section
                  id="disclaimers"
                  aria-labelledby="terms-disclaimers"
                  className="scroll-mt-28 p-6 sm:p-8"
                >
                  <SectionHeading index={7} id="terms-disclaimers" title="Disclaimers" />
                  <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 marker:text-primary/60 text-muted-foreground">
                    <li>
                      Our webinars and courses are for educational purposes only; we do not
                      guarantee specific outcomes.
                    </li>
                    <li>
                      We are not responsible for technical interruptions or platform issues beyond
                      our control.
                    </li>
                  </ul>
                </section>

                <section
                  id="liability"
                  aria-labelledby="terms-liability"
                  className="scroll-mt-28 p-6 sm:p-8"
                >
                  <SectionHeading index={8} id="terms-liability" title="Limitation of Liability" />
                  <p className="mt-4 leading-7 text-muted-foreground">
                    To the maximum extent permitted by law, we are not liable for indirect,
                    incidental, or consequential damages arising from the use of our services.
                  </p>
                </section>

                <section
                  id="privacy"
                  aria-labelledby="terms-privacy"
                  className="scroll-mt-28 p-6 sm:p-8"
                >
                  <SectionHeading index={9} id="terms-privacy" title="Privacy Policy" />
                  <p className="mt-4 leading-7 text-muted-foreground">
                    Our Privacy Policy explains how we protect your data. Review it{' '}
                    <Link
                      href="/privacy"
                      className="font-semibold text-foreground underline decoration-gold underline-offset-4 transition hover:text-foreground/80"
                    >
                      here
                    </Link>
                    .
                  </p>
                </section>

                <section
                  id="termination"
                  aria-labelledby="terms-termination"
                  className="scroll-mt-28 p-6 sm:p-8"
                >
                  <SectionHeading index={10} id="terms-termination" title="Termination" />
                  <p className="mt-4 leading-7 text-muted-foreground">
                    We may suspend or terminate access to our services if you violate these Terms.
                  </p>
                </section>

                <section
                  id="governing-law"
                  aria-labelledby="terms-governing-law"
                  className="scroll-mt-28 p-6 sm:p-8"
                >
                  <SectionHeading index={11} id="terms-governing-law" title="Governing Law" />
                  <p className="mt-4 leading-7 text-muted-foreground">
                    These Terms are governed by the laws of Indonesia. Any disputes will be resolved
                    exclusively in the courts of Indonesia.
                  </p>
                </section>

                <section
                  id="changes"
                  aria-labelledby="terms-changes"
                  className="scroll-mt-28 p-6 sm:p-8"
                >
                  <SectionHeading index={12} id="terms-changes" title="Changes to Terms" />
                  <p className="mt-4 leading-7 text-muted-foreground">
                    We may update these Terms from time to time. Continued use of our services after
                    updates constitutes acceptance of the revised Terms.
                  </p>
                </section>

                <section
                  id="contact"
                  aria-labelledby="terms-contact"
                  className="scroll-mt-28 p-6 sm:p-8"
                >
                  <SectionHeading index={13} id="terms-contact" title="Contact Us" />
                  <p className="mt-4 leading-7 text-muted-foreground">
                    If you have questions about these Terms, reach out via{' '}
                    <Link
                      href="/contact"
                      className="font-semibold text-foreground underline decoration-gold underline-offset-4 transition hover:text-foreground/80"
                    >
                      our contact page
                    </Link>
                    .
                  </p>
                  <div className="mt-6 flex items-start gap-3 rounded-xl border border-border/50 bg-accent/45 px-4 py-3.5 leading-6 text-muted-foreground">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <p>
                      By using our services, you acknowledge that you have read, understood, and
                      agreed to these Terms.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>

          <aside className="flex flex-col gap-6 lg:self-start">
            <nav
              aria-label="On this page"
              className="rounded-xl border border-border bg-card/80 p-6 shadow-xs"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                On this page
              </p>
              <ol className="mt-4 space-y-0.5">
                {tableOfContents.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="group flex items-baseline gap-2.5 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition hover:bg-accent/60 hover:text-foreground"
                    >
                      <span className="font-serif text-xs font-semibold text-gold tabular-nums">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="rounded-xl border border-border bg-card/80 p-6 shadow-xs">
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gold/30 bg-gold-soft text-gold-foreground"
              >
                <IconSparkles className="h-4.5 w-4.5" strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold tracking-tight text-foreground">
                Key highlights
              </h3>
              <ul className="mt-3 space-y-2.5 text-sm leading-6 text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span>
                    <strong className="font-semibold text-foreground">Responsible access:</strong>{' '}
                    18+ learners or guardian-approved participation.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span>
                    <strong className="font-semibold text-foreground">Educational focus:</strong>{' '}
                    our insights are guidance, not guarantees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span>
                    <strong className="font-semibold text-foreground">
                      Intellectual property:
                    </strong>{' '}
                    respect all course materials and resources.
                  </span>
                </li>
              </ul>
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
                <IconLifebuoy className="h-4.5 w-4.5" strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold tracking-tight text-foreground">
                Need help?
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                We are here to clarify any policy or learning requirement.
              </p>
              <Button radius="full" className="mt-4" asChild>
                <Link href="/contact">
                  Contact support
                  <IconArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
