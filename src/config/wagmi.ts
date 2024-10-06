import { http, createConfig } from "wagmi"
import { base, baseSepolia, mainnet, sepolia } from "wagmi/chains"

export const config = createConfig({
  chains: [base, mainnet, sepolia, baseSepolia],
  transports: {
    [base.id]: http(),
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [baseSepolia.id]: http(),
  },
})
