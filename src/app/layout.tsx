import "@mantine/core/styles.css"

import { ColorSchemeScript } from "@mantine/core"
import { PropsWithChildren } from "react"
import WrapperMantine from "~/lib/WrapperMantine"
import WrapperReactQuery from "~/lib/WrapperReactQuery"
import WrapperWagmi from "~/lib/WrapperWagmi"
import SimpleHeader from "~/components/header/SimpleHeader"

export const metadata = {
  title: "House of Wizard",
  description: "Learning Web3 Academy with House of Wizard",
}

type IProps = PropsWithChildren

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <WrapperMantine>
          <WrapperWagmi>
            <WrapperReactQuery>
              <SimpleHeader />

              {children}
            </WrapperReactQuery>
          </WrapperWagmi>
        </WrapperMantine>
      </body>
    </html>
  )
}
