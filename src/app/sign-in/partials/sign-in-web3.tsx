'use client'

import { IconWallet } from '@tabler/icons-react'
import { Button } from '~/components/ui/button'

export default function SignInWeb3() {
  return (
    <Button variant={'outline'} className="w-full" radius={'lg'} type="button">
      <IconWallet className="w-5 h-5" />
      <span className="font-medium font-serif">Connect Wallet</span>
    </Button>
  )
}
