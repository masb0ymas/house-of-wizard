import { redirect } from 'next/navigation'
import { PropsWithChildren } from 'react'
import Layout from '~/components/layout'
import { auth } from '~/lib/auth/handler'

type IProps = PropsWithChildren

export default async function ProfileLayout(props: IProps) {
  const session = await auth()

  if (!session?.user) {
    redirect('/')
  }

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-36 pb-24">
        {props.children}
      </div>
    </Layout>
  )
}
