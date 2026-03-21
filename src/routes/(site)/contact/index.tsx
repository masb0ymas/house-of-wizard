import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(site)/contact/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(site)/contact/"!</div>
}
