'use client'

import { Container, rem, Stack, Text } from '@mantine/core'
import MyImage from '~/components/image'
import Attendance from './partials/Attendance'
import Welcome from './partials/Welcome'

export default function Home() {
  return (
    <Container size="lg" my={100}>
      <Stack align="center" gap={16}>
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
