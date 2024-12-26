'use client'

import { IconBrandDiscord } from '@tabler/icons-react'
import toast from 'react-hot-toast'
import { Button } from '~/components/ui/button'

export default function SignInDiscord() {
  return (
    <Button
      variant={'outline'}
      className="w-full h-10"
      radius={'lg'}
      onClick={() => {
        toast(
          'We are currently developing the ability to log in with Discord API.\n\n Thank you for your patience.'
        )
      }}
    >
      <IconBrandDiscord />
      <span>Discord</span>
    </Button>
  )
}
