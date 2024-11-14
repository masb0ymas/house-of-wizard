import axios from 'axios'
import { env } from '~/config/env'
import { LoginAttributes, WalletLoginAttributes } from '../entity/auth'

export default class AuthRepository {
  private static readonly baseURL = `${env.API_URL}/v1/auth`

  /**
   *
   * @param formData
   * @returns
   */
  public static async signIn(formData: LoginAttributes | WalletLoginAttributes) {
    const response = await axios.post(`${this.baseURL}/user/sign-in`, formData)
    return response.data
  }
}
