'use client'

import clsx from 'clsx'
import { useSession } from 'next-auth/react'

export const ConnectButton = () => {
  const { data: session } = useSession()

  function renderAppkit() {
    // @ts-expect-error
    return <appkit-button />
  }

  return (
    <div
      className={clsx(
        `w-full flex items-center justify-center`,
        session?.provider === 'siwe' &&
          'rounded-xl border border-input bg-primary shadow-sm hover:bg-primary/80 hover:text-accent-foreground'
      )}
    >
      {renderAppkit()}
    </div>
  )
}
