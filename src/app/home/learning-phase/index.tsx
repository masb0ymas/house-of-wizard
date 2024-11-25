import DotPattern from '~/components/ui/dot-pattern'
import LearningCard from './learning-card'
import { cn } from '~/lib/utils'
import GridPattern from '~/components/ui/grid-pattern'

export default function LearningPhase() {
  return (
    <section id="learning-phase" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 font-serif tracking-wide">
            Choose Your Learning Phase
          </h2>
          <p className="mt-4 text-xl text-gray-600">{"Choose the plan that's right for you."}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LearningCard
            title="Early Bird"
            description="Limited time offer for first 20 students"
            features={[
              { text: '16 weeks live training' },
              { text: 'Personal mentorship' },
              { text: 'Project portfolio' },
              { text: 'Career support' },
              { text: 'Lifetime community access' },
              { text: 'Certificate of completion' },
            ]}
          />

          <LearningCard
            title="Regular"
            description="For serious analysts ready to level up"
            disabled
            features={[
              { text: '24 weeks live training' },
              { text: 'Personal mentorship ( 1:1 sessions )' },
              { text: 'Project portfolio' },
              { text: 'Career support ( Partner )' },
              { text: 'Lifetime community access' },
              { text: 'Certificate of completion' },
            ]}
          />
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
          '[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
        )}
      />
    </section>
  )
}
