import { redirect } from 'next/navigation'
import { PropsWithChildren } from 'react'
import Layout from '~/components/layout'
import { auth } from '~/lib/auth/handler'
import { Sidebar } from './partials/sidebar'

type IProps = PropsWithChildren

export default async function SettingLayout({ children }: IProps) {
  const session = await auth()

  if (!session?.user) {
    const baseUrl = '/attendance'
    redirect(`/sign-in?callbackUrl=${encodeURIComponent(baseUrl)}`)
  }

  return (
    <Layout>
      <div className="bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-36 pb-24">
        <Sidebar>{children}</Sidebar>
      </div>
    </Layout>
  )
}
