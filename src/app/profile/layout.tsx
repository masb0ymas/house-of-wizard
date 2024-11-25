import { PropsWithChildren } from 'react'
import Layout from '~/components/layout'

type IProps = PropsWithChildren

export default function ProfileLayout(props: IProps) {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-36 pb-24">
        {props.children}
      </div>
    </Layout>
  )
}
