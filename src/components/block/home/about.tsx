import { FEATURES } from '~/data/mock-site'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-linear-to-b from-violet-50 via-white to-fuchsia-50/40 py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-200/35 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 rounded-full bg-fuchsia-200/30 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-700">
            House of Wizard
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl font-serif tracking-wide leading-tight">
            The next generation of education for Web3 Data Analyst
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-linear-to-r from-violet-300/40 via-fuchsia-500/70 to-violet-300/40" />
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            We blend mastery-driven curriculum with studio-level mentorship so
            every learner can build with confidence, precision, and lasting
            impact.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.name} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: (typeof FEATURES)[0] }) {
  return (
    <div
      key={feature.name}
      className="group h-full rounded-2xl border border-white/70 bg-white/80 p-8 text-left shadow-[0_20px_50px_-40px_rgba(15,23,42,0.7)] ring-1 ring-slate-200/60 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_rgba(15,23,42,0.8)]"
    >
      <div className="flex items-center justify-between">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-700 ring-1 ring-purple-200/70">
          <feature.icon className="h-6 w-6" strokeWidth={1.6} />
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          {feature.name}
        </span>
      </div>
      <h3 className="mt-6 text-xl font-semibold text-slate-900 font-serif tracking-wide">
        {feature.name}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        {feature.description}
      </p>
    </div>
  )
}
