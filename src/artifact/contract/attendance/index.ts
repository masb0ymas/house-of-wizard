import { sepolia } from "viem/chains"
import sepolia_contract_abi from "./abi_sepolia.json"

/**
 * Default Sepolia Network
 * @param chain 
 * @returns 
 */
export function getContractByChain(chain?: number) {
  const sepolia_contract_address = "0x021F46a1E13BBe4F320502D1C3887C5448CBc952"

  let attendanceContract = {
    address: sepolia_contract_address,
    abi: sepolia_contract_abi.abi,
  } as const

  // sepolia chain
  if (chain === sepolia.id) {
    attendanceContract = {
      address: sepolia_contract_address,
      abi: sepolia_contract_abi.abi,
    } as const
  }

  return attendanceContract
}
