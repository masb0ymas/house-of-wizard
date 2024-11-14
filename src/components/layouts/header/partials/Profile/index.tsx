'use client'

import { Button, Tooltip } from '@mantine/core'
import { useDisclosure, useViewportSize } from '@mantine/hooks'
import { IconUser } from '@tabler/icons-react'
import React from 'react'
import { useStore } from '~/config/zustand'
import { shortText } from '~/lib/string'

export default function Profile() {
  const { width } = useViewportSize()
  const [opened, { open, close }] = useDisclosure(false)

  const { auth } = useStore()
  const email = shortText(String(auth?.email), 5, 10)

  return (
    <Tooltip
      label="Click to view"
      withArrow
      position="bottom"
      transitionProps={{ transition: 'pop', duration: 300 }}
    >
      <Button
        variant="light"
        radius="lg"
        onClick={open}
        leftSection={<IconUser stroke={1.5} />}
        style={width < 480 ? { width: '80%' } : undefined}
      >
        {email}
      </Button>
    </Tooltip>
  )
}
