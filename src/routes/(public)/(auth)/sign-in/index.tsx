import { createFileRoute } from '@tanstack/react-router'

import LoginForm from '~/components/block/auth/login-form'
import Loading from '~/components/block/common/loading'
import NotFound from '~/components/block/common/not-found'

export const Route = createFileRoute('/(public)/(auth)/sign-in/')({
  component: RouteComponent,
  pendingComponent: Loading,
  notFoundComponent: NotFound,
})

function RouteComponent() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-linear-to-br from-indigo-100 via-white to-purple-100 p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <LoginForm title="House of Wizard" />
      </div>
    </div>
  )
}
