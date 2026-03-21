import { createFileRoute, Link } from '@tanstack/react-router'

import { Separator } from '~/components/ui/separator'

export const Route = createFileRoute('/(site)/terms/')({
  component: RouteComponent,
})

function RouteComponent() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50 py-24 sm:py-28">
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Terms &amp; Learning Standards
            </span>
            <h1 className="text-4xl font-semibold font-serif tracking-normal leading-tight text-slate-900 sm:text-5xl">
              Terms of Service
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              Clear expectations that protect the integrity of our web3 data
              analyst community.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[2.2fr_1fr]">
            <div className="space-y-6">
              <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Effective Date
                </p>
                <p className="mt-2 text-2xl font-semibold font-serif text-slate-900">
                  {lastUpdated}
                </p>
                <p className="mt-4 text-slate-600">
                  Welcome to <strong>House of Wizard</strong>. These Terms of
                  Service (&quot;Terms&quot;) govern your use of our website,
                  webinars, and online courses focused on data analysis and web3
                  intelligence. By accessing or using our services, you agree to
                  comply with these Terms.
                </p>
              </div>

              <section className="space-y-6">
                <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                  <h4 className="text-xl font-semibold font-serif tracking-wide text-slate-900">
                    1. Definitions
                  </h4>
                  <p className="mt-3 text-slate-600">
                    &quot;We,&quot; &quot;us,&quot; and &quot;our&quot; refer to{' '}
                    <strong>House of Wizard</strong>. &quot;User,&quot;
                    &quot;you,&quot; and &quot;your&quot; refer to individuals
                    accessing our services. &quot;Services&quot; include the
                    website, webinars, online courses, and associated learning
                    materials we provide.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                  <h4 className="text-xl font-semibold font-serif tracking-wide text-slate-900">
                    2. Eligibility
                  </h4>
                  <p className="mt-3 text-slate-600">
                    You must be at least 18 years old to use our services. If
                    you are under 18, parental or guardian consent is required.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                  <h4 className="text-xl font-semibold font-serif tracking-wide text-slate-900">
                    3. User Accounts
                  </h4>
                  <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-600">
                    <li>
                      Some services require an account. You are responsible for
                      keeping your login credentials confidential.
                    </li>
                    <li>
                      You must provide accurate and complete registration
                      details.
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                  <h4 className="text-xl font-semibold font-serif tracking-wide text-slate-900">
                    4. Payment and Refunds
                  </h4>
                  <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-600">
                    <li>
                      Payments for webinars, courses, and subscriptions are
                      non-refundable unless course-specific terms state
                      otherwise.
                    </li>
                    <li>
                      Pricing may change, but adjustments do not affect payments
                      already processed.
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                  <h4 className="text-xl font-semibold font-serif tracking-wide text-slate-900">
                    5. Intellectual Property
                  </h4>
                  <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-600">
                    <li>
                      All content, materials, and resources we provide are the
                      intellectual property of <strong>House of Wizard</strong>{' '}
                      or its licensors.
                    </li>
                    <li>
                      You may not reproduce, distribute, or share materials
                      without prior written consent.
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                  <h4 className="text-xl font-semibold font-serif tracking-wide text-slate-900">
                    6. Prohibited Conduct
                  </h4>
                  <p className="mt-3 text-slate-600">You agree not to:</p>
                  <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-600">
                    <li>
                      Use our services for unlawful or unauthorized purposes.
                    </li>
                    <li>Share your account access with others.</li>
                    <li>
                      Copy, modify, or resell our materials without permission.
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                  <h4 className="text-xl font-semibold font-serif tracking-wide text-slate-900">
                    7. Disclaimers
                  </h4>
                  <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-600">
                    <li>
                      Our webinars and courses are for educational purposes
                      only; we do not guarantee specific outcomes.
                    </li>
                    <li>
                      We are not responsible for technical interruptions or
                      platform issues beyond our control.
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                  <h4 className="text-xl font-semibold font-serif tracking-wide text-slate-900">
                    8. Limitation of Liability
                  </h4>
                  <p className="mt-3 text-slate-600">
                    To the maximum extent permitted by law, we are not liable
                    for indirect, incidental, or consequential damages arising
                    from the use of our services.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                  <h4 className="text-xl font-semibold font-serif tracking-wide text-slate-900">
                    9. Privacy Policy
                  </h4>
                  <p className="mt-3 text-slate-600">
                    Our Privacy Policy explains how we protect your data. Review
                    it{' '}
                    <Link
                      to="/privacy"
                      className="font-semibold text-slate-900 underline decoration-amber-400/70 underline-offset-4 transition hover:text-slate-700"
                    >
                      here
                    </Link>
                    .
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                  <h4 className="text-xl font-semibold font-serif tracking-wide text-slate-900">
                    10. Termination
                  </h4>
                  <p className="mt-3 text-slate-600">
                    We may suspend or terminate access to our services if you
                    violate these Terms.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                  <h4 className="text-xl font-semibold font-serif tracking-wide text-slate-900">
                    11. Governing Law
                  </h4>
                  <p className="mt-3 text-slate-600">
                    These Terms are governed by the laws of Indonesia. Any
                    disputes will be resolved exclusively in the courts of
                    Indonesia.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                  <h4 className="text-xl font-semibold font-serif tracking-wide text-slate-900">
                    12. Changes to Terms
                  </h4>
                  <p className="mt-3 text-slate-600">
                    We may update these Terms from time to time. Continued use
                    of our services after updates constitutes acceptance of the
                    revised Terms.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                  <h4 className="text-xl font-semibold font-serif tracking-wide text-slate-900">
                    13. Contact Us
                  </h4>
                  <p className="mt-3 text-slate-600">
                    If you have questions about these Terms, reach out via{' '}
                    <Link
                      to="/contact"
                      className="font-semibold text-slate-900 underline decoration-amber-400/70 underline-offset-4 transition hover:text-slate-700"
                    >
                      our contact page
                    </Link>
                    . By using our services, you acknowledge that you have read,
                    understood, and agreed to these Terms.
                  </p>
                </div>
              </section>
            </div>

            <aside className="space-y-6">
              <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                <h3 className="text-lg font-semibold text-slate-900">
                  Key Highlights
                </h3>
                <ul className="mt-4 space-y-3 text-slate-600">
                  <li>
                    <span className="font-semibold text-slate-800">
                      Responsible access:
                    </span>{' '}
                    18+ learners or guardian-approved participation.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-800">
                      Educational focus:
                    </span>{' '}
                    our insights are guidance, not guarantees.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-800">
                      Intellectual property:
                    </span>{' '}
                    respect all course materials and resources.
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                <h3 className="text-lg font-semibold text-slate-900">
                  Need Help?
                </h3>
                <p className="mt-3 text-slate-600">
                  We are here to clarify any policy or learning requirement.
                </p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center rounded-full border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Contact Support
                </Link>
              </div>

              <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                <Separator />
                <p className="mt-4 text-sm text-slate-600">
                  By using our website, webinars, or courses, you agree to the
                  Terms of Service above.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}
