'use client'

import { Checkbox, Divider, Group, Text } from '@mantine/core'
import _ from 'lodash'
import Link from 'next/link'
import { formatDate } from '~/lib/date'
import classes from './description.module.css'

interface ItemProps<T> {
  item: T
  content: ContentDetailType
}

type ContentDetailType = {
  title: string
  key: string
  type: ItemType
}

export enum ItemType {
  string,
  boolean,
  date,
  number,
  currency,
  date_time,
  html,
  image,
  link,
}

export default function Description<T>({ item, content }: ItemProps<T>) {
  const { title, key, type } = content

  const data = _.get(item, key, null) as any

  function renderValue() {
    if (_.isNil(data)) {
      return <Text size="md">{'-'}</Text>
    }

    if (type === ItemType.date) {
      const value = formatDate(data, 'dd MMM yyyy HH:mm')
      return <Text size="md">{value}</Text>
    }

    if (type === ItemType.boolean) {
      return <Checkbox checked={data} label={data ? 'Yes' : 'No'} />
    }

    if (type === ItemType.link) {
      return (
        <Link href={data} target="_blank" rel="noreferrer">
          <Text size="md">{data}</Text>
        </Link>
      )
    }

    return <Text size="md">{data}</Text>
  }

  return (
    <>
      <Group justify="space-between">
        <Text className={classes.modal_label} size="md">
          {title} :
        </Text>

        {renderValue()}
      </Group>

      <Divider variant="dashed" />
    </>
  )
}
