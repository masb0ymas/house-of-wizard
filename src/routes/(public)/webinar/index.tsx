import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/webinar/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(public)/webinar/"!</div>
}
