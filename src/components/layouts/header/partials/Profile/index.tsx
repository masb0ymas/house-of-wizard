'use client'

import { Button, Modal, Text, Tooltip } from '@mantine/core'
import { useDisclosure, useViewportSize } from '@mantine/hooks'
import { IconUser } from '@tabler/icons-react'
import React from 'react'
import { GoogleIcon } from '~/components/icon/google'
import { useStore } from '~/config/zustand'
import { shortText } from '~/lib/string'

export default function Profile() {
  const { width } = useViewportSize()
  const [opened, { open, close }] = useDisclosure(false)

  const { auth } = useStore()
  const email = shortText(String(auth?.email), 5, 10)

  let icon = <IconUser stroke={1.5} />
  if (auth?.provider === 'google.com') {
    icon = <GoogleIcon />
  }

  return (
    <>
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
          leftSection={icon}
          style={width < 480 ? { width: '80%' } : undefined}
        >
          {email}
        </Button>
      </Tooltip>

      <Modal
        opened={opened}
        onClose={close}
        size="auto"
        radius="lg"
        centered
        withCloseButton={false}
      >
        <Text>Test</Text>
      </Modal>
    </>
  )
}
