import type { Metadata } from 'next'

import WebinarContent from '@/components/block/webinar/content'
import { META } from '@/lib/constants/meta'

export const metadata: Metadata = {
  ...META,
  title: 'Webinar | House of Wizard',
}

export default function WebinarPage() {
  return <WebinarContent />
}
