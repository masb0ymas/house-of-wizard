import { createFileRoute, Link } from '@tanstack/react-router'

import Loading from '~/components/block/common/loading'
import NotFound from '~/components/block/common/not-found'
import { Separator } from '~/components/ui/separator'

export const Route = createFileRoute('/(site)/about/')({
  component: RouteComponent,
  pendingComponent: Loading,
  notFoundComponent: NotFound,
})

function RouteComponent() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50 py-24 sm:py-28">
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-white/80 px-4 py-1 font-serif text-xs font-medium tracking-[0.3em] text-slate-500 uppercase">
            House of Wizard
          </span>
          <div className="space-y-4">
            <h1 className="font-serif text-4xl leading-tight font-semibold tracking-normal text-slate-900 sm:text-5xl">
              Elegant, rigorous education for web3 data analysts.
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              We are a premium learning studio shaping the next generation of web3 data analysts.
              House of Wizard blends research-grade analytics, cohort mentorship, and community
              guidance so learners can turn on-chain signals into confident decisions.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Join the community
            </Link>
            <Link
              to="/privacy"
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
            >
              Our privacy approach
            </Link>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
              <h2 className="font-serif text-xl font-semibold text-slate-900">Our mission</h2>
              <p className="mt-3 text-slate-600">
                We help analysts master blockchain data with confidence. From token flows to
                protocol health, we train you to ask sharper questions, build trusted dashboards,
                and deliver insights that move teams forward.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
              <h3 className="text-lg font-semibold text-slate-900">What you learn</h3>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
                <li>On-chain data modeling and analytics workflows.</li>
                <li>Protocol growth, retention, and cohort analysis.</li>
                <li>Research storytelling for product and community teams.</li>
                <li>Ethical use of data in emerging web3 ecosystems.</li>
              </ul>
            </div>

            <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
              <h3 className="text-lg font-semibold text-slate-900">How we deliver</h3>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
                <li>Mentor-led cohorts with live case walkthroughs.</li>
                <li>Research studio sessions for portfolio-ready insights.</li>
                <li>Community critiques and feedback loops.</li>
                <li>Tools and templates tailored for web3 analytics.</li>
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
              <h3 className="text-lg font-semibold text-slate-900">Brand pillars</h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li>
                  <span className="font-semibold text-slate-800">Craftsmanship:</span> elegant
                  analysis and meticulous data narratives.
                </li>
                <li>
                  <span className="font-semibold text-slate-800">Integrity:</span> transparent
                  methods and privacy-first learning.
                </li>
                <li>
                  <span className="font-semibold text-slate-800">Community:</span> a global network
                  of analysts, builders, and mentors.
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
              <h3 className="text-lg font-semibold text-slate-900">Community touchpoints</h3>
              <p className="mt-3 text-slate-600">
                We connect learners through curated circles and meaningful rituals that deepen
                skills and trust.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
                <li>Weekly research salons and data discussions.</li>
                <li>Peer review lounges and portfolio feedback.</li>
                <li>Private events with web3 data leaders.</li>
              </ul>
            </div>

            <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
              <Separator />
              <p className="mt-4 text-sm text-slate-600">
                Ready to turn insight into impact? Join House of Wizard and shape the future of web3
                analytics with us.
              </p>
            </div>
          </aside>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
              Experience
            </p>
            <p className="mt-3 text-2xl font-semibold text-slate-900">Cohort-led learning</p>
            <p className="mt-2 text-slate-600">
              Small, high-touch cohorts focused on mastery and accountability.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">Focus</p>
            <p className="mt-3 text-2xl font-semibold text-slate-900">Web3 intelligence</p>
            <p className="mt-2 text-slate-600">
              We specialize in on-chain data, protocols, and ecosystem growth.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200/70 bg-white/90 p-6 shadow-xs">
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
              Outcomes
            </p>
            <p className="mt-3 text-2xl font-semibold text-slate-900">Insight-ready portfolios</p>
            <p className="mt-2 text-slate-600">
              Graduate with case studies and dashboards that earn trust.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200/70 bg-slate-900 p-8 text-white shadow-lg sm:p-10">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold tracking-[0.3em] text-amber-200 uppercase">
              The invitation
            </p>
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
              Join a community where analytics meets craft.
            </h2>
            <p className="text-slate-200">
              Whether you are leveling up or leading analytics at a protocol, House of Wizard is a
              home for thoughtful, ethical data builders. We would love to meet you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-white/20 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Apply for the next cohort
              </Link>
              <a
                href="mailto:info@house-of-wizard.xyz"
                className="inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/60"
              >
                Talk with the team
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
