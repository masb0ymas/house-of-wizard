"use client"

import { Group, Image, Text } from "@mantine/core"

export default function Brand() {
  return (
    <Group>
      <Image
        src={"/static/logo-how.png"}
        alt="logo house of wizard"
        width="auto"
        height={50}
        fit="contain"
        radius="lg"
      />
      <Text size="lg" fw={700} c={"#705C53"}>
        House of Wizard
      </Text>
    </Group>
  )
}
