/**
 *
 * @param text
 * @returns
 */
export function shortText(text: `0x${string}` | string, start: number, end: number) {
  const firstText = text?.slice(0, start)
  const lastText = text?.slice(-end)
  const result = `${firstText}...${lastText}`

  return result
}
