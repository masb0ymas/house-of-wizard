import type { PropsWithChildren } from 'react'

import PublicLayout from '@/components/layouts/public/layout'

export default function PublicLayoutWrapper({ children }: PropsWithChildren) {
  return <PublicLayout>{children}</PublicLayout>
}
