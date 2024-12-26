import { SessionProvider } from 'next-auth/react'
import { PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'
import WrapperNProgress from './WrapperNProgress'
import WrapperWagmi from './WrapperWagmi'

type IProps = PropsWithChildren & {
  cookie: string | null
}

export default function Provider({ children, cookie }: IProps) {
  return (
    <SessionProvider>
      <WrapperWagmi cookie={cookie}>
        <WrapperNProgress>
          {children}
          <Toaster position="top-right" />
        </WrapperNProgress>
      </WrapperWagmi>
    </SessionProvider>
  )
}
