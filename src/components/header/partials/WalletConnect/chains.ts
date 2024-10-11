import { base, sepolia } from "viem/chains"

export const mainnets = [
  {
    title: "Base",
    description: "base chain",
    image: "/chain/logo-base.png",
    chainId: base.id,
  },
]

export const testnets = [
  {
    title: "Sepolia",
    description: "sepolia chain",
    image: "/chain/logo-eth.svg",
    chainId: sepolia.id,
  },
]
