import { PropsWithChildren } from 'react'
import { auth } from '~/lib/auth'
import Footer from './footer'
import Header from './header'

type IProps = PropsWithChildren

export default async function Layout(props: IProps) {
  const session = await auth()

  return (
    <main className="min-h-screen bg-white">
      <Header session={session} />
      {props.children}
      <Footer />
    </main>
  )
}
