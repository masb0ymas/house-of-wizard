/**
 *
 * @param text
 * @param start
 * @param end
 * @returns
 */
export function shortWalletAddress(text: `0x${string}` | string, start: number, end: number) {
  const firstText = text?.slice(0, start)
  const lastText = text?.slice(-end)

  const result = `${firstText}...${lastText}`
  return result
}

/**
 *
 * @param text
 * @param start
 * @param end
 * @returns
 */
export function shortText(text: string, start: number, end?: number) {
  const firstText = text.slice(0, start)
  const lastText = end ? text.slice(-end) : ''

  if (text.length <= start) {
    return text
  }

  const result = `${firstText}...${lastText}`
  return result
}
/**
 *
 * @param str
 * @returns
 */
export function capitalizeFirstLetter(str: string): string {
  const specialCharsRegex = /[-`~!@#$%^&*_|=?;:'",<>]/gi

  return str
    .replace(specialCharsRegex, ' ')
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}
