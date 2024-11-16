'use client'

import { Container, rem, Stack, Text } from '@mantine/core'
import MyImage from '~/components/image'
import Attendance from './partials/Attendance'
import Welcome from './partials/Welcome'
import useProfile from '~/data/query/useProfile'
import VerifyPage from '~/components/verify-page'
import { useRouter } from 'next/navigation'
import { useStore } from '~/config/zustand'

export default function Home() {
  const router = useRouter()
  const { data, isLoading, isFetching } = useProfile()

  const fetchingData = isLoading || isFetching

  if (fetchingData) {
    return <VerifyPage loading={fetchingData} />
  }

  // @ts-expect-error
  if (_.isEmpty(data) || _.isNil(data?.email)) {
    router.push('/login')
    return
  }

  return (
    <Container size="lg" my={100}>
      <Stack align="center" gap={10}>
        <MyImage src="/static/logo-how.png" alt="logo how" width="150px" height="150px" />
        <Text component="h1" size={rem('32px')} fw={700} c={'#705C53'} my={16}>
          Welcome to House of Wizard
        </Text>

        <Welcome />

        <Attendance />
      </Stack>
    </Container>
  )
}
