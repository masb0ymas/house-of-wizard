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
