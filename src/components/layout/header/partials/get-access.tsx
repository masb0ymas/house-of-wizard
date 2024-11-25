'use client'

import clsx from 'clsx'
import _ from 'lodash'
import { Session } from 'next-auth'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import { RainbowButton } from '~/components/ui/rainbow-button'

type IProps = {
  session?: Session | null
  isMobile?: boolean
}

export default function GetAccess({ session, isMobile }: IProps) {
  if (!_.isEmpty(session?.user?.email)) {
    return (
      <Link href="/profile">
        <Button variant={'outline'} radius={'xl'}>
          <span>{session?.user?.name}</span>
        </Button>
      </Link>
    )
  }

  return (
    <Link href="/sign-in">
      <RainbowButton
        className={clsx('h-10 font-serif font-semibold tracking-wider', isMobile && 'w-full')}
      >
        <span>Get Access</span>
      </RainbowButton>
    </Link>
  )
}
