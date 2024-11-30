import React from 'react'
import StatusCard from '../partials/status-card'

export const metadata = {
  title: 'Payment Finish - House of Wizard',
  description: 'Thanks for your payment, keep learning with us',
  robots: {
    index: false,
    follow: false,
  },
}

type ISearchParams = {
  txID: string
}

type IProps = {
  searchParams: Promise<ISearchParams>
}

export default async function PaymentFinishPage({ searchParams }: IProps) {
  const { txID } = await searchParams

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <StatusCard
        status="success"
        title="Payment Successful!"
        message="Thank you for your purchase. Your order has been confirmed."
        orderNumber={txID}
      />
    </div>
  )
}
