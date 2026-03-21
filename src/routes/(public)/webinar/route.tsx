import { createFileRoute, Outlet } from '@tanstack/react-router'

import MainLayout from '~/components/layout/main-layout'

export const Route = createFileRoute('/(public)/webinar')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center bg-linear-to-br from-indigo-100 via-white to-purple-100 py-36 pb-24">
        <Outlet />
      </div>
    </MainLayout>
  )
}
