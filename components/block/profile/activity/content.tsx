'use client'

import { IconActivity } from '@tabler/icons-react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'

export function ActivityContent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif text-xl tracking-wide">Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <Empty>
          <EmptyMedia>
            <IconActivity className="h-12 w-12 text-gray-400" />
          </EmptyMedia>
          <EmptyHeader>
            <EmptyTitle>No Activity Yet</EmptyTitle>
            <EmptyDescription>
              Your recent activities will appear here once you start interacting with the platform.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent />
        </Empty>
      </CardContent>
    </Card>
  )
}
