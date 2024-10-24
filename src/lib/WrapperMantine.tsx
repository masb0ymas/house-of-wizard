import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { PropsWithChildren, Suspense } from 'react'
import RouterTransition from '~/components/router-transition'
import { theme } from '~/styles/theme'

type IProps = PropsWithChildren

export default function WrapperMantine({ children }: IProps) {
  return (
    <MantineProvider theme={theme}>
      <Suspense>
        <RouterTransition />
        <Notifications />

        <ModalsProvider>{children}</ModalsProvider>
      </Suspense>
    </MantineProvider>
  )
}
