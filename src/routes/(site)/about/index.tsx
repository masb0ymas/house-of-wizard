import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(site)/about/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(site)/about/"!</div>
}
