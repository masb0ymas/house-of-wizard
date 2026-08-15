import Link from 'next/link'

import { RainbowButton } from '@/components/ui/rainbow-button'
import { cn } from '@/lib/utils'

interface ProfileProps {
  isMobile?: boolean
}

export default function Profile({ isMobile }: ProfileProps) {
  return (
    <Link href="/sign-in">
      <RainbowButton
        className={cn(
          'h-10 rounded-lg pt-1 font-serif font-semibold tracking-wider',
          isMobile && 'w-full'
        )}
      >
        <span>Get Access</span>
      </RainbowButton>
    </Link>
  )
}
