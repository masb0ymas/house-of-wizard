import type { PropsWithChildren } from 'react'

import { AuthSession } from '@/types/auth'

import PublicFooter from './footer'
import PublicHeader from './header'

interface PublicLayoutProps extends PropsWithChildren {
  auth?: AuthSession | null
}

export default function PublicLayout({ children, auth }: PublicLayoutProps) {
  return (
    <>
      <PublicHeader auth={auth} />
      <main className="py-16 bg-linear-to-br from-indigo-100 via-white to-purple-100">
        {children}
      </main>
      <PublicFooter />
    </>
  )
}
