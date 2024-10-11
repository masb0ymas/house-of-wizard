import { MantineProvider } from "@mantine/core"
import { ModalsProvider } from "@mantine/modals"
import { PropsWithChildren } from "react"
import { theme } from "~/styles/theme"

type IProps = PropsWithChildren

export default function WrapperMantine({ children }: IProps) {
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>{children}</ModalsProvider>
    </MantineProvider>
  )
}
