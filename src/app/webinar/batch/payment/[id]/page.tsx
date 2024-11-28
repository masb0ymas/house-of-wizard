import { IconArrowLeft } from '@tabler/icons-react'
import { Button } from '~/components/ui/button'
import CourseDetail from '../partials/course-detail'
import PriceDetail from '../partials/price-detail'

export default function WebinarBatchPaymentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="lg:mt-10">
          <Button variant={'ghost'} radius={'xl'}>
            <IconArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mt-5">
          {/* Left Column - Course Details & Payment Form */}
          <div className="space-y-6">
            <div className="h-[720px] w-full">
              <iframe
                src="https://app.sandbox.midtrans.com/snap/v4/redirection/8c3e4b3e-ea9c-4840-96c9-128aef1ffaee"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          {/* Right Column - Price Details */}
          <div>
            <CourseDetail />
            <PriceDetail />
          </div>
        </div>
      </div>
    </div>
  )
}
