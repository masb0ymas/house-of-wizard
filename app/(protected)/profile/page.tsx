import type { Metadata } from 'next'

import { META } from '@/lib/constants/meta'

export const metadata: Metadata = {
  ...META,
  title: 'Profile | House of Wizard',
}

export default function ProfilePage() {
  return <div>ProfilePage</div>
}
