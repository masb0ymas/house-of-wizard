import { GridPattern } from '~/components/ui/grid-pattern'
import { COURSE_DETAIL_FEATURES } from '~/data/mock-site'
import { cn } from '~/lib/utils'

export default function CoursesDetailSection() {
  return (
    <section className="relative mb-20">
      <h2 className="mb-10 text-center font-serif text-xl font-bold tracking-wide text-slate-800 sm:text-3xl">
        {"What You'll Get"}
      </h2>
      <CourseDetails />

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
    <div className="grid gap-2 sm:gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {COURSE_DETAIL_FEATURES.map((feature, index) => (
        <div
          key={index}
          className="bg-background z-10 flex flex-row items-center gap-4 rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
        >
          <div className="shrink-0 text-gray-900">
            <feature.icon className="size-6" />
          </div>
          <div>
            <h3 className="mb-1 font-serif font-semibold tracking-wide text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-900">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
