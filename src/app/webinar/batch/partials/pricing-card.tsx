import clsx from 'clsx'
import { Check } from 'lucide-react'
import React from 'react'

interface PricingFeature {
  text: string
}

interface PricingCardProps {
  features: PricingFeature[]
  price: number
  title: string
  subtitle: string
  onSelect: () => void
  disabled?: boolean
}

export default function PricingCard({
  features,
  price,
  title,
  subtitle,
  onSelect,
  disabled = false,
}: PricingCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-purple-100">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold font-serif tracking-wide text-gray-900">
          {title}
        </h3>
        <p className="text-gray-500 font-serif tracking-wide mt-2">{subtitle}</p>
      </div>

      <div className="mb-6">
        <span className="text-2xl sm:text-4xl font-bold text-gray-900">Rp {price}.000.000</span>
        <span className="text-gray-500 font-serif tracking-wide ml-2">,-</span>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">{feature.text}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        disabled={disabled}
        className={clsx(
          'w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold font-serif tracking-wide hover:bg-purple-700 transition-colors',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
      >
        {disabled ? 'Not Available' : 'Select Plan'}
      </button>
    </div>
  )
}
