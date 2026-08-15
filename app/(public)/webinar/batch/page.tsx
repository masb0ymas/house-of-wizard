import type { Metadata } from 'next'

import WebinarBatchContent from '@/components/block/webinar/batch/content'
import { META } from '@/lib/constants/meta'

export const metadata: Metadata = {
  ...META,
  title: 'Webinar Batch | House of Wizard',
}

export default function WebinarBatchPage() {
  return <WebinarBatchContent />
}
