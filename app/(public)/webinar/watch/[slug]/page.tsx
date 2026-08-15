import type { Metadata } from 'next'

import WebinarWatchContent from '@/components/block/webinar/watch/content'
import { META } from '@/lib/constants/meta'

export const metadata: Metadata = {
  ...META,
  title: 'Webinar Watch | House of Wizard',
}

interface WebinarWatchPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function WebinarWatchPage({ params }: WebinarWatchPageProps) {
  const { slug } = await params
  return <WebinarWatchContent slug={slug} />
}
