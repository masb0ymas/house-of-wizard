import StatusCard from '../partials/status-card'

export const metadata = {
  title: 'Payment Failure - House of Wizard',
  description: 'Payment Failure, please try again',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PaymentFailurePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <StatusCard
        status="failure"
        title="Payment Failed"
        message="We couldn't process your payment. Please try again or contact support."
      />
    </div>
  )
}
