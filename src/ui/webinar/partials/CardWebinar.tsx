'use client'

import { Button, Divider, Group, Paper, Stack, Text, Title, Tooltip } from '@mantine/core'
import { IconBrandZoom, IconClock, IconLock, IconUsers } from '@tabler/icons-react'

type IProps = {
  title: string
  start_date: string
  time: string
  participant: number
  is_premium: boolean
}

export default function CardWebinar(props: IProps) {
  const { title, start_date, time, participant, is_premium } = props

  return (
    <Paper withBorder radius="lg" shadow="lg" p="lg">
      <Stack gap={10}>
        <Title size="xl">{title}</Title>
        <Text size="sm">{start_date}</Text>

        <Tooltip
          label={is_premium ? "Subscribe to unlock" : "Watch Recording"}
          withArrow
          position="bottom"
          transitionProps={{ transition: 'pop', duration: 300 }}
        >
          <Button
            variant={is_premium ? 'filled' : 'light'}
            radius="md"
            leftSection={is_premium ? <IconLock size={18} /> : <IconBrandZoom size={18} />}
          >
            {is_premium ? 'Unlock' : 'Watch'}
          </Button>
        </Tooltip>

        <Divider variant="dashed" />
        <Group gap={7} justify="space-between">
          <div style={{ display: 'flex' }}>
            <span style={{ marginRight: '0.25rem' }}>
              <IconClock color="gray" size={16} />
            </span>
            <Tooltip
              label="Duration"
              withArrow
              position="bottom"
              transitionProps={{ transition: 'pop', duration: 300 }}
            >
              <Text component="span" size="sm" c="gray">
                {time}
              </Text>
            </Tooltip>
          </div>

          <div style={{ display: 'flex' }}>
            <span style={{ marginRight: '0.25rem' }}>
              <IconUsers color="gray" size={16} />
            </span>
            <Tooltip
              label="Total Participant"
              withArrow
              position="bottom"
              transitionProps={{ transition: 'pop', duration: 300 }}
            >
              <Text component="span" size="sm" c="gray">
                {`${participant} Participant`}
              </Text>
            </Tooltip>
          </div>
        </Group>
      </Stack>
    </Paper>
  )
}
