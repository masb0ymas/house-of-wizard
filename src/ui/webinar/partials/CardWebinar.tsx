'use client'

import { Box, Button, Divider, Group, Paper, Stack, Text, Title, Tooltip } from '@mantine/core'
import { IconBrandZoom, IconClock, IconLock, IconUsers, IconVideo, IconVideoOff } from '@tabler/icons-react'
import _ from 'lodash'
import Link from 'next/link'
import { WebinarEntity } from '~/data/entity/webinar'
import { formatDate } from '~/lib/date'
import { shortText } from '~/lib/string'

type IProps = WebinarEntity & {
  participant: number
}

export default function CardWebinar(props: IProps) {
  const { id, title, start_date, participant, is_premium, recording_url } = props

  const base_url = '/webinar'
  const shortTitle = shortText(title, 42)

  function btnWatch() {
    if (!_.isNil(recording_url)) {
      return (
        <Tooltip
          label={is_premium ? 'Subscribe to unlock' : 'Watch Recording'}
          withArrow
          position="bottom"
          transitionProps={{ transition: 'pop', duration: 300 }}
        >
          <Button
            variant={is_premium ? 'filled' : 'light'}
            radius="md"
            leftSection={is_premium ? <IconLock size={18} /> : <IconVideo size={18} />}
            component={Link}
            href={`${base_url}/watch/${id}`}
          >
            {is_premium ? 'Unlock' : 'Watch'}
          </Button>
        </Tooltip>
      )
    }

    return (
      <Tooltip
        label={'Recording not available'}
        withArrow
        position="bottom"
        transitionProps={{ transition: 'pop', duration: 300 }}
      >
        <Button variant="subtle" radius="md" leftSection={<IconVideoOff size={18} />}>
          No Record
        </Button>
      </Tooltip>
    )
  }

  return (
    <Paper withBorder radius="lg" shadow="lg" p="lg">
      <Stack gap={10}>
        <Title size="xl">{shortTitle}</Title>
        <Text size="sm" component="span">
          {formatDate(start_date, 'MMM dd, yyyy')}
        </Text>

        {btnWatch()}

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
                1:40:00
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
