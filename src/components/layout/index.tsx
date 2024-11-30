import { PropsWithChildren } from 'react'
import Footer from './footer'
import Header from './header'

type IProps = PropsWithChildren

export default function Layout(props: IProps) {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      {props.children}
      <Footer />
    </main>
  )
}
