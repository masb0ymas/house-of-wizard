'use client'

import clsx from 'clsx'
import _ from 'lodash'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { RainbowButton } from '~/components/ui/rainbow-button'

type IProps = {
  isMobile?: boolean
}

export default function GetAccess({ isMobile }: IProps) {
  const { data: session } = useSession()

  if (!_.isEmpty(session?.user?.email)) {
    const name = _.get(session, 'user.name', '')

    return (
      <Link href="/profile" className="flex items-center gap-2 hover:underline">
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarImage src="https://api.dicebear.com/9.x/thumbs/svg" alt={name} />
          <AvatarFallback className="rounded-lg">{name?.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <span>{name}</span>
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
