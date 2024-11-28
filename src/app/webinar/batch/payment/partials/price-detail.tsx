import { IconCheck } from '@tabler/icons-react'
import { formatCurrencyIDR } from '~/lib/number'

export default function PriceDetail() {
  const benefits = [
    'Live interactive sessions with industry experts',
    'Lifetime access to recorded sessions',
    'Downloadable course materials',
    'Certificate of completion',
    'Access to private community',
    '1-on-1 mentoring session',
  ]

  const new_price = formatCurrencyIDR(7000000)
  const admin_fee = formatCurrencyIDR(5000)
  const uniq_code = formatCurrencyIDR(123)
  const total = formatCurrencyIDR(7000000 + 5000 + 123)

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="mb-6">
        <div className="flex justify-between items-baseline mb-2">
          <span className="text-gray-600">Price</span>
          <div className="text-right">
            <span className="text-2xl font-bold text-gray-900">{new_price}</span>
            <span className="text-gray-500 text-2xl ml-1">,-</span>
          </div>
        </div>
        <div className="text-sm text-gray-500">One-time payment • Instant access</div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900">What&apos;s included:</h3>
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-3">
            <IconCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-600">{benefit}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">{new_price}</span>
        </div>
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Admin Fee</span>
          <span className="font-medium">{admin_fee}</span>
        </div>
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Unique Code</span>
          <span className="font-medium">{uniq_code}</span>
        </div>
        <div className="flex justify-between text-base font-medium mt-4 pt-4 border-t border-gray-200">
          <span>Total</span>
          <span>{total}</span>
        </div>
      </div>
    </div>
  )
}
