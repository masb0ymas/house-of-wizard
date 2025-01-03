/* eslint-disable @next/next/no-page-custom-font */
import './globals.css'

import '@vidstack/react/player/styles/base.css'
import '@vidstack/react/player/styles/plyr/theme.css'

import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Provider from '~/lib/provider'

export const metadata: Metadata = {
  title: 'House of Wizard',
  description: 'To become a greater wizard, join with us',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const getHeaders = await headers()
  const cookie = getHeaders.get('cookie')

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="180x180"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Faculty+Glyphic&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased`}>
        <Provider cookie={cookie}>{children}</Provider>
      </body>
    </html>
  )
}
