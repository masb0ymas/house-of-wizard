import type { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, HeadContent, Scripts } from '@tanstack/react-router'

import { GOOGLE_FONTS, META_ICONS, META_TAGS } from '~/lib/constants/meta'
import DecorationProvider from '~/lib/providers/decoration'

import appCss from '../styles/global.css?url'

interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: META_TAGS,
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      ...META_ICONS,
      ...GOOGLE_FONTS,
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        <DecorationProvider>{children}</DecorationProvider>
        <Scripts />
      </body>
    </html>
  )
}
