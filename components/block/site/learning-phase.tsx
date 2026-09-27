import { IconArrowRight, IconCheck, IconSparkles } from '@tabler/icons-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { GridPattern } from '@/components/ui/grid-pattern'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { cn } from '@/lib/utils'

export default function LearningPhaseSection() {
  return (
    <section id="learning-phase" className="relative isolate overflow-hidden py-20 sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-section-wash opacity-60" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Find your path</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Choose your learning phase
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Choose the plan that&apos;s right for you.
          </p>
        </div>
        <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mx-auto lg:max-w-4xl">
          <LearningCard
            title="Early Bird"
            description="Limited time offer for first 20 students"
            highlight
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
              { text: 'Personal mentorship (1:1 sessions)' },
              { text: 'Project portfolio' },
              { text: 'Career support (Partner)' },
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

type Feature = {
  text: string
}

type LearningCardProps = {
  features: Feature[]
  title: string
  description: string
  highlight?: boolean
  disabled?: boolean
}

function LearningCard({
  features,
  title,
  description,
  highlight = false,
  disabled = false,
}: LearningCardProps) {
  function renderButton() {
    if (disabled) {
      return (
        <Button className="h-11 w-full rounded-xl px-4 py-3 text-sm font-semibold transition-colors" disabled>
          Coming Soon
        </Button>
      )
    }
    return (
      <RainbowButton className="h-11 w-full gap-2 rounded-xl" asChild>
        <Link href="/webinar/batch">
          <span>Join Now</span>
          <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </RainbowButton>
    )
  }

  return (
    <div
      className={cn(
        'group relative z-10 flex h-full flex-col rounded-2xl border p-[1px] backdrop-blur-sm transition-all duration-300',
        highlight
          ? 'border-primary/30 bg-card/90 shadow-lg shadow-primary/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/15'
          : 'border-border/80 bg-card/70 hover:border-border hover:bg-card/90 hover:shadow-lg'
      )}
    >
      {highlight && (
        <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-primary px-3.5 py-1 text-xs font-semibold tracking-wider text-primary-foreground uppercase">
          <IconSparkles className="h-3.5 w-3.5" />
          Enrollment Open
        </span>
      )}
      <div className="flex grow flex-col rounded-[calc(1rem-1px)] p-7 sm:p-8">
        <div className="mb-6">
          <h3 className="mb-2 font-serif text-xl font-bold tracking-wide text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="grow">
          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature.text} className="flex items-start gap-3">
                <IconCheck
                  aria-hidden="true"
                  className={cn(
                    'mt-0.5 h-5 w-5 shrink-0',
                    highlight ? 'text-gold' : 'text-muted-foreground/60'
                  )}
                />
                <span className="text-sm font-medium text-foreground/80">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8">{renderButton()}</div>
      </div>
    </div>
  )
}
