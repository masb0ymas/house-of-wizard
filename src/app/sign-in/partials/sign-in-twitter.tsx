'use client'

import { IconBrandTwitter } from '@tabler/icons-react'
import toast from 'react-hot-toast'
import { Button } from '~/components/ui/button'

export default function SignInTwitter() {
  return (
    <Button
      variant={'outline'}
      className="w-full h-10"
      radius={'lg'}
      onClick={() => {
        toast(
          'We are currently developing the ability to log in with Twitter API.\n\n Thank you for your patience.'
        )
      }}
    >
      <IconBrandTwitter />
      <span>Twitter</span>
    </Button>
  )
}
