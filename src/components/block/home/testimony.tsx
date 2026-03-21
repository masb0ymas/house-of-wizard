import { IconBrandTwitter } from '@tabler/icons-react'
import React from 'react'

import { Marquee } from '~/components/ui/marquee'
import { TESTIMONIALS } from '~/data/mock-site'
import { cn } from '~/lib/utils'

type ReviewCardProps = React.ComponentPropsWithoutRef<'figure'> & {
  name: string
  username: string
  quote: string
  image: string
}

function ReviewCard({ name, username, quote, image }: ReviewCardProps) {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-full" width="32" height="32" alt="avatar" src={image} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
            <p className="text-xs text-gray-500/80 dark:text-white/40">{username}</p>
          </div>
        </div>

        <IconBrandTwitter className="h-5 w-5 text-indigo-600" />
      </div>
      <blockquote className="mt-2 text-sm">{quote}</blockquote>
    </figure>
  )
}

export default function TestimonySection() {
  return (
    <section id="testimonials" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-wide text-gray-900">
            What Our Students Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">Join thousands of successful graduates</p>
        </div>

        <div className="relative overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {TESTIMONIALS.map((testimonial, index) => (
              <React.Fragment key={index}>
                <ReviewCard {...testimonial} />
              </React.Fragment>
            ))}
          </Marquee>

          <div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-gray-50"></div>
          <div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-gray-50"></div>
        </div>
      </div>
    </section>
  )
}
