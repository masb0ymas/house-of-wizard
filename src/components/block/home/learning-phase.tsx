import { IconArrowRight, IconCheck } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'

import { Button } from '~/components/ui/button'
import { GridPattern } from '~/components/ui/grid-pattern'
import { RainbowButton } from '~/components/ui/rainbow-button'
import { cn } from '~/lib/utils'

export default function LearningPhaseSection() {
  return (
    <section
      id="learning-phase"
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 font-serif tracking-wide">
            Choose Your Learning Phase
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {"Choose the plan that's right for you."}
          </p>
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
          'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12',
        )}
      />
    </section>
  )
}

type Feature = {
  text: string
}

type LearningCardProps = {
  features: Feature[]
  title: string
  description: string
  disabled?: boolean
}

function LearningCard({
  features,
  title,
  description,
  disabled = false,
}: LearningCardProps) {
  function renderButton() {
    if (disabled) {
      return (
        <Button
          className="w-full rounded-lg px-4 py-3 h-11 text-sm font-semibold transition-colors"
          disabled={disabled}
        >
          Coming Soon
        </Button>
      )
    }

    return (
      <Link
        to="/webinar/batch"
        className="inline-flex items-center justify-center w-full"
      >
        <RainbowButton className="w-full gap-2 h-11 rounded-lg">
          <span>Join Now</span>
          <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </RainbowButton>
      </Link>
    )
  }

  return (
    <div className="flex flex-col h-full rounded-lg border bg-white transition-all duration-200 hover:shadow-lg z-10">
      <div className="p-8 flex flex-col grow">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold font-serif tracking-wide text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        {/* Features */}
        <div className="grow">
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <IconCheck className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm font-medium">
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="mt-8">{renderButton()}</div>
      </div>
    </div>
  )
}
