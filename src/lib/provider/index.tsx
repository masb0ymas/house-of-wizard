import { PropsWithChildren } from 'react'
import { Toaster } from '~/components/ui/toaster'
import WrapperNProgress from './WrapperNProgress'
import WrapperReactQuery from './WrapperReactQuery'

type IProps = PropsWithChildren

export default function Provider({ children }: IProps) {
  return (
    <WrapperReactQuery>
      <WrapperNProgress>
        {children}
        <Toaster />
      </WrapperNProgress>
    </WrapperReactQuery>
  )
}
