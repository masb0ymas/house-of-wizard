import type { Metadata } from 'next'

import { IconArrowRight, IconCalendarEvent, IconMail, IconShieldCheck } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'
import { META } from '@/lib/constants/meta'

export const metadata: Metadata = {
  ...META,
  title: 'Privacy Policy | House of Wizard',
}

const tableOfContents = [
  { id: 'information-we-collect', label: 'Information we collect' },
  { id: 'how-we-use', label: 'How we use your information' },
  { id: 'sharing', label: 'Sharing your information' },
  { id: 'rights', label: 'Your rights and choices' },
  { id: 'security', label: 'Security measures' },
  { id: 'third-party-links', label: 'Third-party links' },
  { id: 'retention', label: 'Retention of information' },
  { id: 'international-users', label: 'International users' },
  { id: 'updates', label: 'Updates to this policy' },
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

function SubHeading({ children }: { children: React.ReactNode }) {
  return <p className="mt-5 text-sm font-semibold tracking-wide text-foreground/80">{children}</p>
}

export default function PrivacyPage() {
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
            Privacy &amp; data stewardship
          </span>
          <h1 className="max-w-3xl font-serif text-4xl leading-[1.08] font-semibold tracking-tight text-foreground sm:text-5xl">
            Privacy <span className="text-gradient-brand">Policy</span>
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Built for web3 data analyst education. We protect the data you share while you learn,
            research, and collaborate inside House of Wizard programs.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <IconCalendarEvent aria-hidden="true" className="h-3.5 w-3.5 text-gold" />
              Effective {lastUpdated}
            </span>
            <a
              href="#information-we-collect"
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
                <strong>House of Wizard</strong> (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;) is committed to safeguarding your privacy. This policy describes how
                we collect, use, disclose, and protect information when you join our webinars and
                online courses focused on web3 data analysis.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card/80 shadow-xs">
              <div className="divide-y divide-border">
                <section
                  id="information-we-collect"
                  aria-labelledby="privacy-information-we-collect"
                  className="scroll-mt-28 p-6 sm:p-8"
                >
                  <SectionHeading
                    index={1}
                    id="privacy-information-we-collect"
                    title="Information We Collect"
                  />
                  <SubHeading>1.1 Personal Information</SubHeading>
                  <p className="mt-2 leading-7 text-muted-foreground">
                    We may collect the following information directly from you:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 marker:text-primary/60 text-muted-foreground">
                    <li>Name and email address</li>
                    <li>Phone number (if provided)</li>
                    <li>Billing information (for paid courses)</li>
                    <li>Organization or company name (if applicable)</li>
                    <li>Job title and specialization (if applicable)</li>
                  </ul>
                  <SubHeading>1.2 Automatically Collected Information</SubHeading>
                  <p className="mt-2 leading-7 text-muted-foreground">
                    When you access our webinars or courses, we may automatically collect:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 marker:text-primary/60 text-muted-foreground">
                    <li>IP address and approximate location</li>
                    <li>Device type and browser information</li>
                    <li>Course and webinar usage data (time spent, progress, completion status)</li>
                    <li>Cookies and session identifiers</li>
                  </ul>
                </section>

                <section
                  id="how-we-use"
                  aria-labelledby="privacy-how-we-use"
                  className="scroll-mt-28 p-6 sm:p-8"
                >
                  <SectionHeading
                    index={2}
                    id="privacy-how-we-use"
                    title="How We Use Your Information"
                  />
                  <p className="mt-4 leading-7 text-muted-foreground">
                    We use the collected information to:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 marker:text-primary/60 text-muted-foreground">
                    <li>Deliver, manage, and improve our learning programs.</li>
                    <li>Communicate updates, certificates, and relevant program opportunities.</li>
                    <li>Process payments, invoices, and refunds.</li>
                    <li>Monitor engagement and optimize learning experiences.</li>
                    <li>Comply with legal and regulatory obligations.</li>
                  </ul>
                </section>

                <section
                  id="sharing"
                  aria-labelledby="privacy-sharing"
                  className="scroll-mt-28 p-6 sm:p-8"
                >
                  <SectionHeading index={3} id="privacy-sharing" title="Sharing Your Information" />
                  <p className="mt-4 leading-7 text-muted-foreground">
                    We do not sell your personal information. We may share data only when necessary
                    with:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 marker:text-primary/60 text-muted-foreground">
                    <li>Service providers that support payments, hosting, or analytics.</li>
                    <li>
                      Legal authorities when required to comply with law or protect our rights.
                    </li>
                    <li>Trusted affiliates for co-branded education initiatives.</li>
                  </ul>
                </section>

                <section
                  id="rights"
                  aria-labelledby="privacy-rights"
                  className="scroll-mt-28 p-6 sm:p-8"
                >
                  <SectionHeading index={4} id="privacy-rights" title="Your Rights and Choices" />
                  <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 marker:text-primary/60 text-muted-foreground">
                    <li>Access &amp; update your information by contacting us.</li>
                    <li>Opt out of marketing communications via the unsubscribe link.</li>
                    <li>Disable cookies through your browser settings.</li>
                    <li>Request data deletion, subject to legal obligations.</li>
                  </ul>
                </section>

                <section
                  id="security"
                  aria-labelledby="privacy-security"
                  className="scroll-mt-28 p-6 sm:p-8"
                >
                  <SectionHeading index={5} id="privacy-security" title="Security Measures" />
                  <p className="mt-4 leading-7 text-muted-foreground">
                    We implement encryption, secure storage, and regular audits to protect your
                    information. While we use industry-standard safeguards, no online transmission
                    is 100% secure.
                  </p>
                </section>

                <section
                  id="third-party-links"
                  aria-labelledby="privacy-third-party-links"
                  className="scroll-mt-28 p-6 sm:p-8"
                >
                  <SectionHeading
                    index={6}
                    id="privacy-third-party-links"
                    title="Third-Party Links"
                  />
                  <p className="mt-4 leading-7 text-muted-foreground">
                    Our materials may contain links to third-party websites. We are not responsible
                    for the privacy practices of those external sites.
                  </p>
                </section>

                <section
                  id="retention"
                  aria-labelledby="privacy-retention"
                  className="scroll-mt-28 p-6 sm:p-8"
                >
                  <SectionHeading
                    index={7}
                    id="privacy-retention"
                    title="Retention of Information"
                  />
                  <p className="mt-4 leading-7 text-muted-foreground">
                    We retain your data only as long as necessary to deliver our services or comply
                    with legal requirements.
                  </p>
                </section>

                <section
                  id="international-users"
                  aria-labelledby="privacy-international-users"
                  className="scroll-mt-28 p-6 sm:p-8"
                >
                  <SectionHeading
                    index={8}
                    id="privacy-international-users"
                    title="International Users"
                  />
                  <p className="mt-4 leading-7 text-muted-foreground">
                    If you access our services from outside Indonesia, your data may be transferred
                    to and processed in Indonesia, where privacy laws may differ.
                  </p>
                </section>

                <section
                  id="updates"
                  aria-labelledby="privacy-updates"
                  className="scroll-mt-28 p-6 sm:p-8"
                >
                  <SectionHeading index={9} id="privacy-updates" title="Updates to This Policy" />
                  <p className="mt-4 leading-7 text-muted-foreground">
                    We may update this policy from time to time. Any changes will be posted with the
                    effective date noted above.
                  </p>
                  <div className="mt-6 flex items-start gap-3 rounded-xl border border-border/50 bg-accent/45 px-4 py-3.5 leading-6 text-muted-foreground">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <p>
                      By participating in our webinars or online courses, you agree to the terms of
                      this Privacy Policy.
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
                <IconShieldCheck className="h-4.5 w-4.5" strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold tracking-tight text-foreground">
                Our privacy commitments
              </h3>
              <ul className="mt-3 space-y-2.5 text-sm leading-6 text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span>
                    <strong className="font-semibold text-foreground">Transparency:</strong> clear
                    visibility into how we use learning data.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span>
                    <strong className="font-semibold text-foreground">Data stewardship:</strong>{' '}
                    only the information needed to support your growth.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span>
                    <strong className="font-semibold text-foreground">Security first:</strong>{' '}
                    encryption and audits aligned with industry standards.
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
                <IconMail className="h-4.5 w-4.5" strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold tracking-tight text-foreground">
                Contact us
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Questions about this policy or your data? Reach out anytime.
              </p>
              <Button radius="full" className="mt-4" asChild>
                <a href="mailto:info@house-of-wizard.xyz" target="_blank" rel="noopener noreferrer">
                  info@house-of-wizard.xyz
                </a>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
