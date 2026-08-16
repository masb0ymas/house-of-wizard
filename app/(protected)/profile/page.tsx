import type { Metadata } from 'next'

import ProfileContent from '@/components/block/profile/content'
import { requireSession } from '@/lib/auth/handler'
import { META } from '@/lib/constants/meta'
import { AuthSession } from '@/types/auth'

export const metadata: Metadata = {
  ...META,
  title: 'Profile | House of Wizard',
}

export default async function ProfilePage() {
  const auth: AuthSession = await requireSession()

  return <ProfileContent auth={auth} />
}
