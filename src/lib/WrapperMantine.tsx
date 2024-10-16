import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { PropsWithChildren } from 'react'
import { theme } from '~/styles/theme'

type IProps = PropsWithChildren

export default function WrapperMantine({ children }: IProps) {
  return (
    <MantineProvider theme={theme}>
      <Notifications />

      <ModalsProvider>{children}</ModalsProvider>
    </MantineProvider>
  )
}
