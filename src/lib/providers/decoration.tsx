import { TanStackDevtools } from '@tanstack/react-devtools'
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import type { PropsWithChildren } from 'react'

import TanStackQueryProvider from '~/integrations/tanstack-query/root-provider'

export default function DecorationProvider({ children }: PropsWithChildren) {
  return (
    <TanStackQueryProvider>
      {children}
      <TanStackDevtools
        config={{ position: 'bottom-right' }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
          {
            name: 'Tanstack Query',
            render: <ReactQueryDevtoolsPanel />,
          },
        ]}
      />
    </TanStackQueryProvider>
  )
}
