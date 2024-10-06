import "@mantine/core/styles.css"

import { MantineProvider } from "@mantine/core"
import Head from "next/head"
import { WagmiProvider } from "wagmi"
import { config } from "~/config/wagmi"
import { theme } from "~/styles/theme"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <WagmiProvider config={config}>
        <Head>
          <title>House of Wizard</title>
          <meta name="description" content="House of Wizard" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>

        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </WagmiProvider>
    </MantineProvider>
  )
}
