import { Abi } from "viem"
import { base, sepolia } from "viem/chains"
import contract_abi from "./contractAbi.json"

interface AttendanceContractProps {
  address: `0x${string}`
  abi: Abi | unknown[]
  explorer: string
}

/**
 * Default Sepolia Network
 * @param chain
 * @returns
 */
export function getContractByChain(chain?: number) {
  const sepolia_contract_address = "0x021F46a1E13BBe4F320502D1C3887C5448CBc952"
  const base_contract_address = "0x122e8fFB050a5771045Dbae126f65152ABc9Da28"

  let attendanceContract: AttendanceContractProps = {
    address: sepolia_contract_address,
    abi: contract_abi.abi,
    explorer: "https://sepolia.etherscan.io",
  } as const

  // sepolia chain
  if (chain === sepolia.id) {
    attendanceContract = {
      address: sepolia_contract_address,
      abi: contract_abi.abi,
      explorer: "https://sepolia.etherscan.io",
    } as const
  }

  // base chain
  if (chain === base.id) {
    attendanceContract = {
      address: base_contract_address,
      abi: contract_abi.abi,
      explorer: "https://basescan.org",
    } as const
  }

  return attendanceContract
}
