import { GridPattern } from '~/components/ui/grid-pattern'
import { COURSE_DETAIL_FEATURES } from '~/data/mock-site'
import { cn } from '~/lib/utils'

export default function CoursesDetailSection() {
  return (
    <section className="relative mb-20 overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center font-serif text-2xl font-semibold tracking-[0.08em] text-slate-900 sm:text-3xl">
          {"What You'll Get"}
        </h2>
        <div className="relative z-10 w-full py-6 sm:py-8">
          <CourseDetails />
        </div>
      </div>

      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 6],
          [10, 15],
          [16, 11],
          [14, 8],
          [17, 9],
        ]}
        className={cn(
          'mask-[radial-gradient(800px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12',
        )}
      />
    </section>
  )
}

function CourseDetails() {
  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
      {COURSE_DETAIL_FEATURES.map((feature, index) => (
        <div
          key={index}
          className="group relative flex items-start gap-4 rounded-2xl border border-slate-200/60 bg-linear-to-br from-white via-white to-slate-50/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="shrink-0 rounded-2xl bg-slate-900/5 p-3 text-slate-900 ring-1 ring-slate-200/70 transition duration-300 group-hover:bg-slate-900/10">
            <feature.icon className="size-6" />
          </div>
          <div>
            <h3 className="mb-1 font-serif text-lg font-semibold tracking-wide text-slate-900">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
