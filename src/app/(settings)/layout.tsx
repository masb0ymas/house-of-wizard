import { redirect } from 'next/navigation'
import { PropsWithChildren } from 'react'
import Layout from '~/components/layout'
import { auth } from '~/lib/auth/handler'
import { Sidebar } from './partials/sidebar'

type IProps = PropsWithChildren

export default async function SettingLayout({ children }: IProps) {
  const session = await auth()

  if (!session?.user) {
    redirect(`/sign-in?callbackUrl=${encodeURIComponent('/attendance')}`)
  }

  return (
    <Layout>
      <div className="bg-gradient-to-br from-gray-200 via-white to-gray-200 py-36 pb-24">
        <Sidebar>{children}</Sidebar>
      </div>
    </Layout>
  )
}
