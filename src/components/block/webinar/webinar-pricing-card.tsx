import { IconCheck } from '@tabler/icons-react'

import { Button } from '~/components/ui/button'
import { Skeleton } from '~/components/ui/skeleton'
import { formatCurrency } from '~/lib/currency'
import { cn } from '~/lib/utils'

interface Features {
  text: string
}

interface WebinarPricingCardProps {
  features: Features[]
  price: number
  title: string
  subtitle: string
  onSelect: () => void
  disabled?: boolean
}

export function WebinarPricingCard({
  features,
  price,
  title,
  subtitle,
  onSelect,
  disabled,
}: WebinarPricingCardProps) {
  const formattedPrice = formatCurrency(price)

  return (
    <div className="rounded-2xl border border-purple-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="mb-6">
        <h3 className="font-serif text-xl font-bold tracking-wide text-gray-900 sm:text-2xl">
          {title}
        </h3>
        <p className="mt-2 font-serif tracking-wide text-gray-500">{subtitle}</p>
      </div>

      <div className="mb-6">
        <span className="text-2xl font-bold text-gray-900 sm:text-4xl">{formattedPrice}</span>
        <span className="ml-2 text-2xl tracking-wide text-gray-500">,-</span>
      </div>

      <ul className="mb-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-purple-600" />
            <span className="font-medium text-gray-600">{feature.text}</span>
          </li>
        ))}
      </ul>

      <Button
        onClick={onSelect}
        disabled={disabled}
        className={cn(
          'h-11 w-full rounded-xl font-serif font-semibold tracking-wide',
          disabled && 'cursor-not-allowed opacity-50',
        )}
      >
        {disabled ? 'Coming Soon' : 'Select Plan'}
      </Button>
    </div>
  )
}

export function WebinarPricingCardSkeleton() {
  return (
    <div className="rounded-2xl border border-purple-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="mb-6 flex flex-col gap-4">
        <Skeleton className="h-6 w-[200px]" />
        <Skeleton className="h-6 w-[350px]" />
      </div>

      <div className="mb-6">
        <Skeleton className="h-10 w-[220px]" />
      </div>

      <ul className="mb-8 space-y-4">
        {[1, 2, 3, 4, 5, 6].map((_item, index) => (
          <div key={index} className="flex items-start gap-3">
            <Skeleton className="h-4 w-[30px]" />
            <Skeleton className={cn('h-4 w-[250px]', index % 2 === 0 && 'w-[300px]')} />
          </div>
        ))}
      </ul>

      <Skeleton className="h-12 w-full rounded-xl" />
    </div>
  )
}
