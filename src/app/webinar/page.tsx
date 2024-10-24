import React, { Suspense } from 'react'
import Webinar from '~/ui/webinar'

export default function WebinarPage() {
  return (
    <Suspense>
      <Webinar />
    </Suspense>
  )
}
