'use client'

import { IconUser } from '@tabler/icons-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { cn } from '@/lib/utils'
import { AuthSession } from '@/types/auth'

interface ProfileProps {
  auth?: AuthSession
  isMobile?: boolean
}

export default function Profile({ auth, isMobile }: ProfileProps) {
  if (auth) {
    return (
      <Button className={cn(isMobile && 'w-full')} variant="outline" asChild>
        <Link href="/profile">
          <IconUser />
          <span>{auth.user.fullname}</span>
        </Link>
      </Button>
    )
  }

  return (
    <RainbowButton
      className={cn(
        'h-10 rounded-lg pt-1 font-serif font-semibold tracking-wider',
        isMobile && 'w-full'
      )}
      asChild
    >
      <Link href="/sign-in">
        <span>Get Access</span>
      </Link>
    </RainbowButton>
  )
}
