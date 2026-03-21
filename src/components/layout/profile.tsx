import { Link } from '@tanstack/react-router'

import { cn } from '~/lib/utils'

import { RainbowButton } from '../ui/rainbow-button'

interface ProfileProps {
  isMobile?: boolean
}

export default function Profile({ isMobile }: ProfileProps) {
  return (
    <Link to="/sign-in">
      <RainbowButton
        className={cn(
          'h-10 rounded-lg pt-1 font-serif font-semibold tracking-wider',
          isMobile && 'w-full',
        )}
      >
        <span>Get Access</span>
      </RainbowButton>
    </Link>
  )
}
