'use client'

import { Center, Container, Stack, Text, Title } from '@mantine/core'
import { IconCalendarTime, IconHistory } from '@tabler/icons-react'
import { useSearchParams } from 'next/navigation'
import MyTabs from '~/components/tabs'
import { capitalizeFirstLetter } from '~/lib/string'
import UpcomingTab from './upcoming'

const tabLists = [
  {
    key: 'upcoming',
    title: 'Upcoming',
    icon: IconCalendarTime,
    children: <UpcomingTab />,
  },
  {
    key: 'archive',
    title: 'Archive',
    icon: IconHistory,
    children: <UpcomingTab />,
  },
]

export default function Webinar() {
  const searchParams = useSearchParams()
  const tabs = searchParams.get('tabs') as string

  const baseUrl = '/webinar'

  const defaultTabs = 'upcoming'
  const subtitle = capitalizeFirstLetter(tabs || defaultTabs)

  return (
    <Container size="lg" my={100}>
      <Stack gap="xl">
        <Center mb={16}>
          <Title>{`Webinar - ${subtitle}`}</Title>
        </Center>

        <MyTabs baseURL={baseUrl} defaultValue={defaultTabs} data={tabLists} />
      </Stack>
    </Container>
  )
}
