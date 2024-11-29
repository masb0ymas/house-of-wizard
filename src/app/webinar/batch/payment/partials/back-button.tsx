'use client'

import { IconArrowLeft } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { Button } from '~/components/ui/button'

export default function BackButton() {
  const router = useRouter()

  return (
    <Button variant={'ghost'} radius={'xl'} onClick={() => router.back()}>
      <IconArrowLeft className="h-4 w-4" />
      <span>Back</span>
    </Button>
  )
}
