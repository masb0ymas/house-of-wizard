import { IconArrowRight, IconCheck } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '~/components/ui/button'
import { RainbowButton } from '~/components/ui/rainbow-button'

type Feature = {
  text: string
}

type LearningCardProps = {
  features: Feature[]
  title: string
  description: string
  disabled?: boolean
}

export default function LearningCard({
  features,
  title,
  description,
  disabled = false,
}: LearningCardProps) {
  function renderButton() {
    if (disabled) {
      return (
        <Button
          className="w-full rounded-xl px-4 py-3 h-11 text-sm font-semibold transition-colors"
          disabled={disabled}
        >
          {disabled ? 'Coming Soon' : 'Join Now'}
        </Button>
      )
    }

    return (
      <Link href="/webinar/batch" className="inline-flex items-center justify-center w-full">
        <RainbowButton className="w-full gap-2">
          <span>Join Now</span>
          <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </RainbowButton>
      </Link>
    )
  }

  return (
    <div className="flex flex-col h-full rounded-2xl border bg-white shadow-sm transition-all duration-200 hover:shadow-lg z-10">
      <div className="p-8 flex flex-col flex-grow">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold font-serif tracking-wide text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        {/* Features */}
        <div className="flex-grow">
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <IconCheck className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm font-medium">{feature.text}</span>
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
