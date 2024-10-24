'use client'

import { Divider, Grid, Group, Input, Pagination, Select, Stack } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { useViewportSize } from '@mantine/hooks'
import { IconCalendar, IconLicense, IconSearch } from '@tabler/icons-react'
import _ from 'lodash'
import CardWebinar from '../partials/CardWebinar'

const data = [
  {
    id: '1',
    title: 'Webinar Kamisan Jogja Data Analyst',
    start_date: '10 Oct 2024 18:30 WIB',
    record_link: 'https://youtu.be/dQw4w9WgXcQ',
    time: '1:30:00',
    is_premium: false,
    participant: 24,
  },
  {
    id: '2',
    title: 'Webinar Kamisan Jogja Data Visualization',
    start_date: '16 Oct 2024 18:30 WIB',
    record_link: 'https://youtu.be/dQw4w9WgXcQ',
    time: '1:15:00',
    is_premium: false,
    participant: 20,
  },
  {
    id: '3',
    title: 'Webinar Kamisan Jogja Data Analyst with Privacy',
    start_date: '24 Oct 2024 18:30 WIB',
    record_link: 'https://youtu.be/dQw4w9WgXcQ',
    time: '1:05:22',
    is_premium: true,
    participant: 15,
  },
]

const payable = ['free', 'freemium', 'premium']
const selectPayable = payable.map((item) => ({ value: item, label: _.capitalize(item) }))

export default function UpcomingTab() {
  const { width } = useViewportSize()
  const mobile_device = width < 780

  return (
    <Stack>
      <Grid columns={12}>
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Input
            placeholder="Search webinar..."
            radius="md"
            leftSection={<IconSearch size={18} stroke={1.5} />}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 6, sm: 6, md: 4 }}>
          <DateInput
            placeholder="Search by date..."
            radius="md"
            leftSection={<IconCalendar size={18} stroke={1.5} />}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 6, sm: 6, md: 4 }}>
          <Select
            placeholder="Choose webinar"
            data={selectPayable}
            radius="md"
            clearable
            leftSection={<IconLicense size={18} stroke={1.5} />}
          />
        </Grid.Col>
      </Grid>

      <Divider variant="dashed" />

      <Grid columns={12}>
        {data.map((item) => {
          return (
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={item.id}>
              <CardWebinar {...item} />
            </Grid.Col>
          )
        })}
      </Grid>

      <Group justify={!mobile_device ? 'right' : 'center'} mt={16}>
        <Pagination total={10} radius="md" />
      </Group>
    </Stack>
  )
}
