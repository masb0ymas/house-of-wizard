import BackButton from '../partials/back-button'
import CheckoutMidtrans from '../partials/checkout-midtrans'
import CourseDetail from '../partials/course-detail'
import PriceDetail from '../partials/price-detail'

export const metadata = {
  title: 'Confirm Payment - House of Wizard',
  description: 'Confirm Payment Webinar Live Private House of Wizard',
  robots: {
    index: false,
    follow: false,
  },
}

type IParams = {
  id: string
}

type IProps = {
  params: Promise<IParams>
}

export default async function WebinarBatchPaymentPage({ params }: IProps) {
  const { id: trx_id } = await params

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="2xl:mt-5">
          <BackButton />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5">
          {/* Left Column - Course Details & Payment Form */}
          <div className="space-y-6">
            <CheckoutMidtrans id={trx_id} />
          </div>

          {/* Right Column - Price Details */}
          <div className='flex flex-col gap-2 md:gap-4'>
            <CourseDetail id={trx_id} />
            <PriceDetail id={trx_id} />
          </div>
        </div>
      </div>
    </div>
  )
}
