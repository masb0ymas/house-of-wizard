'use client'

import {
  Card,
  Divider,
  Grid,
  Group,
  Input,
  Pagination,
  Select,
  Skeleton,
  Stack,
} from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { useViewportSize } from '@mantine/hooks'
import { IconCalendar, IconLicense, IconSearch } from '@tabler/icons-react'
import _ from 'lodash'
import { useState } from 'react'
import useWebinar from '~/data/query/webinar/useWebinar'
import { Mapping } from '~/lib/map'
import CardWebinar from '../partials/CardWebinar'

const payable = ['free', 'freemium', 'premium']
const selectPayable = payable.map((item) => ({ value: item, label: _.capitalize(item) }))

export default function UpcomingTab() {
  const { width } = useViewportSize()
  const mobile_device = width < 780

  const [page, setPage] = useState(1)
  const [pageSize] = useState(9)

  const { data, total, isLoading, isFetching, helpers } = useWebinar({
    query: {
      defaultValue: {
        page,
        pageSize,
      },
    },
  })

  if (isLoading || isFetching) {
    return (
      <Grid columns={12} gutter={16}>
        {['1', '2', '3'].map((x) => {
          return (
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={x}>
              <Skeleton radius="lg">
                <Card h={200} />
              </Skeleton>
            </Grid.Col>
          )
        })}
      </Grid>
    )
  }

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
        <Mapping
          data={data}
          render={(item) => (
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={item.id}>
              <CardWebinar participant={0} {...item} />
            </Grid.Col>
          )}
        />
      </Grid>

      <Group justify={!mobile_device ? 'right' : 'center'} mt={16}>
        <Pagination
          radius="md"
          value={page}
          onChange={(newPage) => {
            setPage(newPage)
            helpers.setQuery((helper) => {
              helper.query.set('page', newPage ?? 1)
            })
          }}
          total={Math.ceil(Number(total || 0) / Number(pageSize ?? 10))}
        />
      </Group>
    </Stack>
  )
}
