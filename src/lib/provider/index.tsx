import { SessionProvider } from 'next-auth/react'
import { PropsWithChildren } from 'react'
import { Toaster } from '~/components/ui/toaster'
import WrapperNProgress from './WrapperNProgress'
import WrapperReactQuery from './WrapperReactQuery'

type IProps = PropsWithChildren

export default function Provider({ children }: IProps) {
  return (
    <SessionProvider>
      <WrapperReactQuery>
        <WrapperNProgress>
          {children}
          <Toaster />
        </WrapperNProgress>
      </WrapperReactQuery>
    </SessionProvider>
  )
}
