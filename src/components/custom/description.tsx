import { formatDate } from 'date-fns'
import { id } from 'date-fns/locale'
import _ from 'lodash'
import Link from 'next/link'
import React from 'react'
import { Checkbox } from '../ui/checkbox'
import { Separator } from '../ui/separator'

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

export function Description<T>({ item, content }: ItemProps<T>) {
  const { title, key, type } = content

  const data = _.get(item, key, null) as any

  function renderValue() {
    if (_.isNil(data)) {
      return <span>{'-'}</span>
    }

    if (type === ItemType.string) {
      return <span>{data}</span>
    }

    if (type === ItemType.date) {
      const value = formatDate(data, 'dd MMM yyyy HH:mm', { locale: id })
      return <span>{`${value} WIB`}</span>
    }

    if (type === ItemType.boolean) {
      return (
        <>
          <Checkbox checked={data} id={title} />
          <label
            htmlFor={title}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {data ? 'Yes' : 'No'}
          </label>
        </>
      )
    }

    if (type === ItemType.link) {
      return (
        <Link
          href={data}
          className="text-blue-600 hover:text-blue-500"
          target="_blank"
          rel="noreferrer"
        >
          <span>{data}</span>
        </Link>
      )
    }
  }

  return (
    <React.Fragment key={key}>
      <div className="flex flex-row gap-2 justify-between items-center">
        <span className="font-semibold">{title}:</span>

        {renderValue()}
      </div>

      <Separator className="my-1" />
    </React.Fragment>
  )
}
