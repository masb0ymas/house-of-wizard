import { COURSE_CURRICULUM } from '~/data/mock-site'

export default function CurriculumSection() {
  return (
    <section className="relative mb-20">
      <h2 className="mb-10 text-center font-serif text-xl font-bold tracking-wide text-slate-800 sm:text-3xl">
        Course Curriculum
      </h2>
      <Curriculum />
    </section>
  )
}

function Curriculum() {
  return (
    <div className="space-y-2 sm:space-y-4 md:space-y-6">
      {COURSE_CURRICULUM.map((module, index) => (
        <div
          key={index}
          className="bg-background z-10 rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
        >
          <div className="mb-4 flex items-start justify-between">
            <h3 className="font-serif text-lg font-semibold tracking-wide text-slate-800 sm:text-xl">
              {module.title}
            </h3>
            <span className="rounded-full bg-gray-900/70 px-3 py-1 font-serif text-sm font-medium tracking-wide text-purple-100">
              {module.week}
            </span>
          </div>
          <ul className="space-y-2">
            {module.topics.map((topic, topicIndex) => (
              <li key={topicIndex} className="flex items-center gap-2 text-gray-900">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-900"></span>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
