import { format, FormatOptions } from 'date-fns'
import { id } from 'date-fns/locale'

/**
 *
 * @param value
 * @returns
 */
export function dateToUnixtime(value: string | Date) {
  const date = new Date(value)
  const unixTimestamp = Math.floor(date.getTime() / 1000)
  return unixTimestamp
}

/**
 *
 * @param value
 * @param formatStr
 * @param options
 * @returns
 */
export function formatDate(value: string | Date, formatStr: string, options?: FormatOptions) {
  const date = new Date(value)
  return format(date, formatStr, { ...options, locale: id })
}
