import { PropsWithChildren } from "react"
import Footer from "./footer"
import Navbar from "./header"

type LayoutProps = PropsWithChildren

export default function Layout(props: LayoutProps) {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {props.children}
      <Footer />
    </main>
  )
}
