import { IconCheck } from '@tabler/icons-react'
import clsx from 'clsx'
import { Button } from '~/components/ui/button'
import { Skeleton } from '~/components/ui/skeleton'
import { formatCurrencyIDR } from '~/lib/number'

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

export function PricingCard({
  features,
  price,
  title,
  subtitle,
  onSelect,
  disabled = false,
}: PricingCardProps) {
  const formattedPrice = formatCurrencyIDR(price)

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-purple-100">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold font-serif tracking-wide text-gray-900">
          {title}
        </h3>
        <p className="text-gray-500 font-serif tracking-wide mt-2">{subtitle}</p>
      </div>

      <div className="mb-6">
        <span className="text-2xl sm:text-4xl font-bold text-gray-900">{formattedPrice}</span>
        <span className="text-gray-500 text-2xl tracking-wide ml-2">,-</span>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <IconCheck className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600 font-medium">{feature.text}</span>
          </li>
        ))}
      </ul>

      <Button
        onClick={onSelect}
        disabled={disabled}
        className={clsx(
          'w-full rounded-xl h-11 font-semibold font-serif tracking-wide',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
      >
        {disabled ? 'Coming Soon' : 'Select Plan'}
      </Button>
    </div>
  )
}

export function PricingCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-purple-100">
      <div className="flex flex-col gap-4 mb-6">
        <Skeleton className="h-6 w-[200px]" />
        <Skeleton className="h-6 w-[350px]" />
      </div>

      <div className="mb-6">
        <Skeleton className="h-10 w-[220px]" />
      </div>

      <ul className="space-y-4 mb-8">
        {[1, 2, 3, 4, 5, 6].map((_item, index) => (
          <div key={index} className="flex items-start gap-3">
            <Skeleton className="h-4 w-[30px]" />
            <Skeleton className={clsx('h-4 w-[250px]', index % 2 === 0 && 'w-[300px]')} />
          </div>
        ))}
      </ul>

      <Skeleton className="h-12 w-full rounded-xl" />
    </div>
  )
}
