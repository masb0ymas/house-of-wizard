import { createFileRoute } from '@tanstack/react-router'

import Loading from '~/components/block/common/loading'
import NotFound from '~/components/block/common/not-found'

export const Route = createFileRoute('/(protected)/setting/')({
  component: RouteComponent,
  pendingComponent: Loading,
  notFoundComponent: NotFound,
})

function RouteComponent() {
  return <div>Hello "/(protected)/setting/"!</div>
}
