import type { PropsWithChildren } from 'react'

export default function ProtectedLayout({ children }: PropsWithChildren) {
  return <div>{children}</div>
}
