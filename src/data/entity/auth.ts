type BaseLoginEntity = {
  fullname?: string | null
  email?: string | null
  password?: string | null
  latitude?: string | null
  longitude?: string | null
}

export type LoginAttributes = BaseLoginEntity & {
  provider: string
  access_token: string
  id_token?: string | null
}

export type WalletLoginAttributes = BaseLoginEntity & {
  wallet_address: string
  wallet_signature: string
}
