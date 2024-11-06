'use client'

import { Center, Stack, Text, Title } from '@mantine/core'
import _ from 'lodash'
import { useParams } from 'next/navigation'
import MyImage from '~/components/image'
import YoutubePlyr from '~/components/plyr'
import useWebinarById from '~/data/query/webinar/useWebinarById'
import { formatDate } from '~/lib/date'

export default function WatchWebinar() {
  const params = useParams()
  const id = params.id as string

  const { data, isLoading, isFetching } = useWebinarById(id)
  console.log(id, data)

  if (isLoading || isFetching) {
    return <Center>Loading...</Center>
  }

  let videoId = null

  if (!_.isNil(data?.recording_url)) {
    if (data.recording_url.match(/youtu\.be/)) {
      videoId = data.recording_url.split('/')[3]
    } else {
      videoId = data.recording_url.split('v=')[1]
    }
  }

  console.log({ videoId })

  if (_.isNil(videoId)) {
    return (
      <Stack align="center" justify="center">
        <Title size={32}>{data?.title}</Title>
        <Text component="span">{formatDate(String(data?.start_date), 'MMM dd, yyyy')}</Text>

        <MyImage
          src={'/static/recording_not_available.png'}
          alt="recording not available"
          width="1080px"
          height="560px"
        />
      </Stack>
    )
  }

  const title = data?.title as string
  const recording_url = data?.recording_url as string

  return (
    <Stack align="center" justify="center">
      <Title size={32}>{data?.title}</Title>
      <Text component="span">{formatDate(String(data?.start_date), 'MMM dd, yyyy')}</Text>

      <YoutubePlyr title={title} src={recording_url} />
    </Stack>
  )
}
