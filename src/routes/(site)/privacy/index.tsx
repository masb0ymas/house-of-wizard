import { createFileRoute } from '@tanstack/react-router'

import Loading from '~/components/block/common/loading'
import NotFound from '~/components/block/common/not-found'
import { Separator } from '~/components/ui/separator'

export const Route = createFileRoute('/(site)/privacy/')({
  component: RouteComponent,
  pendingComponent: Loading,
  notFoundComponent: NotFound,
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
            <span className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-white/80 px-4 py-1 text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">
              Privacy &amp; Data Stewardship
            </span>
            <h1 className="font-serif text-4xl leading-tight font-semibold tracking-normal text-slate-900 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              Built for web3 data analyst education. We protect the data you share while you learn,
              research, and collaborate inside House of Wizard programs.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[2.2fr_1fr]">
            <div className="space-y-6">
              <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                <p className="text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase">
                  Effective Date
                </p>
                <p className="mt-2 font-serif text-2xl font-semibold text-slate-900">
                  {lastUpdated}
                </p>
                <p className="mt-4 text-slate-600">
                  <strong>House of Wizard</strong> (&quot;we,&quot; &quot;our,&quot; or
                  &quot;us&quot;) is committed to safeguarding your privacy. This policy describes
                  how we collect, use, disclose, and protect information when you join our webinars
                  and online courses focused on web3 data analysis.
                </p>
              </div>

              <section className="space-y-6">
                <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                  <h4 className="font-serif text-xl font-semibold tracking-wide text-slate-900">
                    1. Information We Collect
                  </h4>
                  <p className="mt-3 font-semibold text-slate-700">1.1 Personal Information</p>
                  <p className="text-slate-600">
                    We may collect the following information directly from you:
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-600">
                    <li>Name and email address</li>
                    <li>Phone number (if provided)</li>
                    <li>Billing information (for paid courses)</li>
                    <li>Organization or company name (if applicable)</li>
                    <li>Job title and specialization (if applicable)</li>
                  </ul>
                  <p className="mt-4 font-semibold text-slate-700">
                    1.2 Automatically Collected Information
                  </p>
                  <p className="text-slate-600">
                    When you access our webinars or courses, we may automatically collect:
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-600">
                    <li>IP address and approximate location</li>
                    <li>Device type and browser information</li>
                    <li>Course and webinar usage data (time spent, progress, completion status)</li>
                    <li>Cookies and session identifiers</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                  <h4 className="font-serif text-xl font-semibold tracking-wide text-slate-900">
                    2. How We Use Your Information
                  </h4>
                  <p className="mt-3 text-slate-600">We use the collected information to:</p>
                  <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-600">
                    <li>Deliver, manage, and improve our learning programs.</li>
                    <li>Communicate updates, certificates, and relevant program opportunities.</li>
                    <li>Process payments, invoices, and refunds.</li>
                    <li>Monitor engagement and optimize learning experiences.</li>
                    <li>Comply with legal and regulatory obligations.</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                  <h4 className="font-serif text-xl font-semibold tracking-wide text-slate-900">
                    3. Sharing Your Information
                  </h4>
                  <p className="mt-3 text-slate-600">
                    We do not sell your personal information. We may share data only when necessary
                    with:
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-600">
                    <li>Service providers that support payments, hosting, or analytics.</li>
                    <li>
                      Legal authorities when required to comply with law or protect our rights.
                    </li>
                    <li>Trusted affiliates for co-branded education initiatives.</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                  <h4 className="font-serif text-xl font-semibold tracking-wide text-slate-900">
                    4. Your Rights and Choices
                  </h4>
                  <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-600">
                    <li>Access &amp; update your information by contacting us.</li>
                    <li>Opt out of marketing communications via the unsubscribe link.</li>
                    <li>Disable cookies through your browser settings.</li>
                    <li>Request data deletion, subject to legal obligations.</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                  <h4 className="font-serif text-xl font-semibold tracking-wide text-slate-900">
                    5. Security Measures
                  </h4>
                  <p className="mt-3 text-slate-600">
                    We implement encryption, secure storage, and regular audits to protect your
                    information. While we use industry-standard safeguards, no online transmission
                    is 100% secure.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                  <h4 className="font-serif text-xl font-semibold tracking-wide text-slate-900">
                    6. Third-Party Links
                  </h4>
                  <p className="mt-3 text-slate-600">
                    Our materials may contain links to third-party websites. We are not responsible
                    for the privacy practices of those external sites.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                  <h4 className="font-serif text-xl font-semibold tracking-wide text-slate-900">
                    7. Retention of Information
                  </h4>
                  <p className="mt-3 text-slate-600">
                    We retain your data only as long as necessary to deliver our services or comply
                    with legal requirements.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                  <h4 className="font-serif text-xl font-semibold tracking-wide text-slate-900">
                    8. International Users
                  </h4>
                  <p className="mt-3 text-slate-600">
                    If you access our services from outside Indonesia, your data may be transferred
                    to and processed in Indonesia, where privacy laws may differ.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                  <h4 className="font-serif text-xl font-semibold tracking-wide text-slate-900">
                    9. Updates to This Policy
                  </h4>
                  <p className="mt-3 text-slate-600">
                    We may update this policy from time to time. Any changes will be posted with the
                    effective date noted above.
                  </p>
                </div>
              </section>
            </div>

            <aside className="space-y-6">
              <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                <h3 className="text-lg font-semibold text-slate-900">Our Privacy Commitments</h3>
                <ul className="mt-4 space-y-3 text-slate-600">
                  <li>
                    <span className="font-semibold text-slate-800">Transparency:</span> clear
                    visibility into how we use learning data.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-800">Data stewardship:</span> only the
                    information needed to support your growth.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-800">Security first:</span> encryption
                    and audits aligned with industry standards.
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                <h3 className="text-lg font-semibold text-slate-900">Contact Us</h3>
                <p className="mt-3 text-slate-600">
                  Questions about this policy or your data? Reach out anytime.
                </p>
                <a
                  href="mailto:info@house-of-wizard.xyz"
                  className="mt-4 inline-flex items-center rounded-full border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  info@house-of-wizard.xyz
                </a>
              </div>

              <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
                <Separator />
                <p className="mt-4 text-sm text-slate-600">
                  By participating in our webinars or online courses, you agree to the terms of this
                  Privacy Policy.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}
