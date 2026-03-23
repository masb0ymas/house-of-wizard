import type { Icon123 } from '@tabler/icons-react'

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '~/components/ui/empty'

interface SimpleEmptyProps {
  title: string
  description: string
  icon: typeof Icon123
  children?: React.ReactNode
}

export default function SimpleEmpty(props: SimpleEmptyProps) {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <props.icon className="size-6" />
        </EmptyMedia>
        <EmptyTitle>{props.title}</EmptyTitle>
        <EmptyDescription className="text-base">{props.description}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">{props.children}</div>
      </EmptyContent>
    </Empty>
  )
}
