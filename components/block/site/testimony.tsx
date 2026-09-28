import { IconBrandTwitter } from '@tabler/icons-react'
import React from 'react'

import { Marquee } from '@/components/ui/marquee'
import { TESTIMONIALS } from '@/data/mock-site'

type ReviewCardProps = React.ComponentPropsWithoutRef<'figure'> & {
  name: string
  username: string
  quote: string
  image: string
}

function ReviewCard({ name, username, quote, image }: ReviewCardProps) {
  return (
    <figure className="relative w-72 cursor-pointer overflow-hidden rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-colors hover:border-primary/25 hover:bg-card">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-full" width="32" height="32" alt="" src={image} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-foreground">{name}</figcaption>
            <p className="text-xs text-muted-foreground">{username}</p>
          </div>
        </div>
        <IconBrandTwitter aria-hidden="true" className="h-5 w-5 text-primary" />
      </div>
      <blockquote className="mt-3 text-sm leading-6 text-foreground/90">{quote}</blockquote>
    </figure>
  )
}

export default function TestimonySection() {
  return (
    <section id="testimonials" className="relative isolate overflow-hidden py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-section-wash opacity-70"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            Student voices
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What our students say
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Hear from learners building a future in Web3 analytics.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <Marquee pauseOnHover className="[--duration:32s]">
            {TESTIMONIALS.map((testimonial, index) => (
              <ReviewCard key={index} {...testimonial} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-background/90 to-transparent sm:w-24"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-background/90 to-transparent sm:w-24"></div>
        </div>
      </div>
    </section>
  )
}
