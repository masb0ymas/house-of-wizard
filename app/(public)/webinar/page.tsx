import type { Metadata } from 'next'

import WebinarContent from '@/components/block/webinar/content'
import { getSession } from '@/lib/auth/handler'
import { META } from '@/lib/constants/meta'
import { AuthSession } from '@/types/auth'

export const metadata: Metadata = {
  ...META,
  title: 'Webinar | House of Wizard',
}

export default async function WebinarPage() {
  const auth: AuthSession | null = await getSession()

  return <WebinarContent auth={auth} />
}
