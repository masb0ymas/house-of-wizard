import axios, { AxiosRequestConfig } from 'axios'
import { env } from '~/config/env'

export default class WebinarAttendanceRepository {
  private static readonly baseURL = `${env.API_URL}/v1/webinar-attendance`

  /**
   *
   * @param formData
   * @returns
   */
  public static async markAttendance(formData: any, options?: AxiosRequestConfig) {
    const response = await axios.post(`${this.baseURL}`, formData, options)
    return response.data
  }
}
