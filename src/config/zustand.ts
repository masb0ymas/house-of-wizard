import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export type StoreProps = {
  chainId: number | null
}

export type ActionProps = {
  addChainId: (chainId: number) => void
  removeChainId: () => void
}

export type StateProps = StoreProps & ActionProps
const keyStorage = `how-state`

export const useStore = create<StateProps, [["zustand/persist", StateProps]]>(
  persist(
    (set) => ({
      chainId: null,

      addChainId: (chainId: number) => {
        set((state) => ({
          ...state,
          chainId: chainId,
        }))
      },

      removeChainId: () => set({ chainId: null }),
    }),
    {
      name: keyStorage, // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
)
