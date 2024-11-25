import Image from 'next/image'
import GridPattern from '~/components/ui/grid-pattern'
import { auth } from '~/lib/auth'
import { cn } from '~/lib/utils'
import ChoosePlan from './partials/choose-plan'
import CourseDetails from './partials/course-detail'
import Curriculum from './partials/curriculum'

export const metadata = {
  title: 'Webinar - Batch 1',
  description: 'Webinar - Open Private Batch 1',
  robots: {
    index: false,
    follow: false,
  },
}

export default async function WebinarBatchPage() {
  const session = await auth()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-4 mb-16">
        <Image
          src="/static/wizard-learn-new-spell.webp"
          alt="Hero"
          className="w-full h-auto rounded-3xl"
          width={1200}
          height={800}
        />

        <div className="text-center lg:text-right">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-serif tracking-wide mb-6">
            Become a Web3 Data Analyst
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto font-serif tracking-wide">
            Join our exclusive live private course and master the art of blockchain analytics.
            Limited spots available for <u>Batch 1.</u>
          </p>
        </div>
      </div>

      {/* Course Details */}
      <section className="mb-20 relative">
        <h2 className="text-xl sm:text-3xl font-bold font-serif tracking-wide text-center mb-10">
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
            '[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]',
            'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
          )}
        />
      </section>

      {/* Curriculum */}
      <section className="mb-20 relative">
        <h2 className="text-xl sm:text-3xl font-bold font-serif tracking-wide text-center mb-10">
          Course Curriculum
        </h2>
        <Curriculum />
      </section>

      {/* Pricing */}
      <ChoosePlan email={session?.user?.email} />
    </div>
  )
}
