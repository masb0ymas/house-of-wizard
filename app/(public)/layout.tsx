import type { PropsWithChildren } from 'react'

import PublicLayout from '@/components/layouts/public/layout'
import { getSession } from '@/lib/auth/handler'
import { AuthSession } from '@/types/auth'

export default async function PublicLayoutWrapper({ children }: PropsWithChildren) {
  const auth: AuthSession | null = await getSession()

  return <PublicLayout auth={auth}>{children}</PublicLayout>
}
