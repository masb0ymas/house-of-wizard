import axios from 'axios'
import { env } from '~/config/env'

export default class AuthRepository {
  private static readonly baseURL = `${env.API_URL}/v1/auth`

  /**
   *
   * @param formData
   * @returns
   */
  public static async signIn(formData: any) {
    const response = await axios.post(`${this.baseURL}/user/sign-in`, formData)
    return response.data
  }
}
