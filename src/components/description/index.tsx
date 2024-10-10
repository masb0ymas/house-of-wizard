import { Divider, Group, Paper, Text } from "@mantine/core"
import { formatDate } from "date-fns"
import { id } from "date-fns/locale"
import _ from "lodash"
import Link from "next/link"
import classes from "./description.module.css"

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
  console.log(data, item, key)

  return (
    <Paper>
      <Group justify="space-between">
        <Text className={classes.modal_label} size="sm">
          {title} :
        </Text>

        {type === ItemType.string && <Text size="sm">{data}</Text>}

        {type === ItemType.date && !_.isNil(data) && (
          <Text size="sm">
            {data && formatDate(new Date(data || null), "dd MMM yyyy HH:mm", { locale: id })}
            {/* {data} */}
          </Text>
        )}

        {type === ItemType.link && (
          <Link href={data} target="_blank" rel="noreferrer">
            <Text size="sm">{data}</Text>
          </Link>
        )}
      </Group>

      <Divider variant="dashed" />
    </Paper>
  )
}
