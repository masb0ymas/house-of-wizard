import type { Metadata } from 'next'

import WebinarWatchContent from '@/components/block/webinar/watch/content'
import { requireSession } from '@/lib/auth/handler'
import { META } from '@/lib/constants/meta'
import { AuthSession } from '@/types/auth'

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
  const auth: AuthSession = await requireSession()

  return <WebinarWatchContent slug={slug} auth={auth} />
}
