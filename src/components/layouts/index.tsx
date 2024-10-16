"use client"

import { PropsWithChildren } from "react"
import Footer from "./footer"
import Header from "./header"

type IProps = PropsWithChildren

export default function Layout({ children }: IProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
