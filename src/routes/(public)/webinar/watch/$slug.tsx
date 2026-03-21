import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/webinar/watch/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(public)/webinar/watch/slug"!</div>
}
