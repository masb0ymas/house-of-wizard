import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { CheckCircle, XCircle } from 'lucide-react'
import Link from 'next/link'
import { RainbowButton } from '~/components/ui/rainbow-button'

type IProps = {
  status: 'success' | 'failure'
  title: string
  message: string
  orderNumber?: string
}

export default function StatusCard({ status, title, message, orderNumber }: IProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl max-w-md w-full transition-all duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          {status === 'success' ? (
            <CheckCircle className="w-16 h-16 text-green-500" />
          ) : (
            <XCircle className="w-16 h-16 text-red-500" />
          )}
        </div>

        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="text-gray-600 mb-4">{message}</p>

        {orderNumber && (
          <p className="text-sm text-gray-500 mb-6">
            Order Number: <span className="font-medium">{orderNumber}</span>
          </p>
        )}

        <div className="space-y-3 w-full">
          <Link href="/">
            <RainbowButton className="w-full gap-2">
              <IconArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Return to Home</span>
            </RainbowButton>
          </Link>
        </div>
      </div>
    </div>
  )
}
