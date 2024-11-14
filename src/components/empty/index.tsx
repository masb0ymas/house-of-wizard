import { Center, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconDatabaseOff } from '@tabler/icons-react'

interface EmptyRecordProps {
  label?: string
}

export default function EmptyRecord(props: EmptyRecordProps) {
  const { label = 'No Records' } = props

  return (
    <Center>
      <Stack align="center">
        <ThemeIcon variant="light" radius="xl" size="xl" color="gray">
          <IconDatabaseOff />
        </ThemeIcon>

        <Text c="dimmed">{label}</Text>
      </Stack>
    </Center>
  )
}
