import { createFileRoute, Link } from '@tanstack/react-router'

import { Separator } from '~/components/ui/separator'

export const Route = createFileRoute('/(site)/contact/')({
  component: RouteComponent,
})

function RouteComponent() {
  const directContacts = [
    {
      name: 'Email',
      value: 'info@house-of-wizard.xyz',
      href: 'mailto:info@house-of-wizard.xyz',
    },
    {
      name: 'Telegram',
      value: '@HouseOfWizard',
      href: 'https://t.me/HouseofWizard',
    },
    {
      name: 'Community office hours',
      value: 'Wednesdays, 19:00-21:00 GMT+7',
      href: '#',
    },
    {
      name: 'Response time',
      value: 'Within 24 hours on business days',
      href: '#',
    },
  ]

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50 py-24 sm:py-28">
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-white/80 px-4 py-1 font-serif text-xs font-medium tracking-[0.3em] text-slate-500 uppercase">
            Contact House of Wizard
          </span>
          <div className="space-y-4">
            <h1 className="font-serif text-4xl leading-tight font-semibold tracking-normal text-slate-900 sm:text-5xl">
              Let&apos;s build clarity from web3 data.
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              Whether you&apos;re exploring a cohort, need guidance on analytics, or want to
              collaborate with the House of Wizard team, we&apos;re ready to listen.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:info@house-of-wizard.xyz"
              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Email our team
            </a>
            <Link
              to="/about"
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
            >
              Learn about House of Wizard
            </Link>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
              <h2 className="font-serif text-xl font-semibold text-slate-900">Send us a message</h2>
              <p className="mt-3 text-slate-600">
                Share the details of your inquiry and we will respond within one business day.
              </p>
              <form className="mt-6 grid gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-slate-700" htmlFor="name">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="rounded-md border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm transition outline-none focus:border-slate-400"
                  />
                </div>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="grid gap-2">
                    <label className="text-sm font-semibold text-slate-700" htmlFor="email">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@domain.com"
                      className="rounded-md border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm transition outline-none focus:border-slate-400"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-semibold text-slate-700" htmlFor="role">
                      Role or team
                    </label>
                    <input
                      id="role"
                      name="role"
                      placeholder="Data analyst, founder, DAO"
                      className="rounded-md border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm transition outline-none focus:border-slate-400"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-slate-700" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="rounded-md border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm transition outline-none focus:border-slate-400"
                  />
                </div>
                <button
                  type="button"
                  className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Send message
                </button>
              </form>
            </div>

            <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
              <h3 className="text-lg font-semibold text-slate-900">What we can help with</h3>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
                <li>Cohort enrollment and analyst readiness assessments.</li>
                <li>Custom training for protocol or DAO analytics teams.</li>
                <li>Research collaborations and on-chain data strategy.</li>
                <li>Community partnerships and event invitations.</li>
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
              <h3 className="text-lg font-semibold text-slate-900">Direct channels</h3>
              <div className="mt-4 space-y-4 text-slate-600">
                {directContacts.map((item) => (
                  <div key={item.name}>
                    <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
                      {item.name}
                    </p>

                    {item.href !== '#' ? (
                      <a
                        href={item.href}
                        className="text-sm font-semibold text-slate-900 underline decoration-amber-400/70 underline-offset-4"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm tracking-wide text-slate-900">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
              <h3 className="text-lg font-semibold text-slate-900">Community pathway</h3>
              <p className="mt-3 text-slate-600">
                Join the House of Wizard community for peer reviews, research salons, and curated
                analyst discussions.
              </p>
              <Link
                to="/about"
                className="mt-4 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
              >
                Explore the community
              </Link>
            </div>

            <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
              <Separator />
              <p className="mt-4 text-sm text-slate-600">
                Your data is handled with care. Review our{' '}
                <Link
                  to="/privacy"
                  className="font-semibold text-slate-900 underline decoration-amber-400/70 underline-offset-4 transition hover:text-slate-700"
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
