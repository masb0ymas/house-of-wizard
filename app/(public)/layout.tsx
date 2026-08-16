import type { PropsWithChildren } from 'react'

import PublicLayout from '@/components/layouts/public/layout'
import { requireSession } from '@/lib/auth/handler'
import { AuthSession } from '@/types/auth'

export default async function PublicLayoutWrapper({ children }: PropsWithChildren) {
  const auth: AuthSession = await requireSession()

  return <PublicLayout auth={auth}>{children}</PublicLayout>
}
