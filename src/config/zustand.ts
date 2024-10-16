import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { env } from './env'

type AuthProps = {
  email: string
  access_token: string
}

type Web3WalletProps = {
  signature: `0x${string}`
}

export type StoreProps = {
  auth: AuthProps | null
  evm_wallet: Web3WalletProps | null
}

export type ActionProps = {
  setAuthSession: (data: AuthProps) => void
  removeAuthSession: () => void

  setEvmWallet: (data: Web3WalletProps) => void
  removeEvmWallet: () => void
}

export type StateProps = StoreProps & ActionProps
const keyStorage = `${env.APP_PREFIX}-state`

export const useStore = create<StateProps, [['zustand/persist', StateProps]]>(
  persist(
    (set) => ({
      auth: null,
      evm_wallet: null,

      setAuthSession: (data: AuthProps) => {
        set((state) => ({ ...state, auth: data }))
      },
      removeAuthSession: () => set({ auth: null }),

      setEvmWallet: (data: Web3WalletProps) => {
        set((state) => ({ ...state, evm_wallet: data }))
      },
      removeEvmWallet: () => set({ auth: null }),
    }),
    {
      name: keyStorage, // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
)
