import { SessionProvider } from 'next-auth/react'
import { PropsWithChildren } from 'react'
import { Toaster } from '~/components/ui/toaster'
import WrapperNProgress from './WrapperNProgress'
import WrapperWeb3 from './WrapperWeb3'

type IProps = PropsWithChildren

export default function Provider({ children }: IProps) {
  return (
    <SessionProvider>
      <WrapperWeb3>
        <WrapperNProgress>
          {children}
          <Toaster />
        </WrapperNProgress>
      </WrapperWeb3>
    </SessionProvider>
  )
}
