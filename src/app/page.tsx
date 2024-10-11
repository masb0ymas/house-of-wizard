import { Container, Stack } from "@mantine/core"
import Attendance from "~/ui/home/Attendance"
import WalletConnect from "~/ui/home/WalletConnect"
import Welcome from "~/ui/home/Welcome"

export default function page() {
  return (
    <Container size="sm">
      <Welcome />

      <Stack align="center" gap={16}>
        <Attendance />

        <WalletConnect />
      </Stack>
    </Container>
  )
}
