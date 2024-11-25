'use client'

import { IconWallet } from '@tabler/icons-react'
import { Button } from '~/components/ui/button'
import { toast } from '~/lib/hooks/use-toast'

export default function SignInWeb3() {
  return (
    <Button
      variant={'outline'}
      className="w-full"
      radius={'lg'}
      type="button"
      onClick={() => {
        toast({
          title: 'Login with Web3 Wallet',
          description: 'This feature is coming soon',
          className: 'rounded-xl',
        })
      }}
    >
      <IconWallet className="w-5 h-5" />
      <span className="font-medium font-serif tracking-wider">Connect Wallet</span>
    </Button>
  )
}
