import { formatDate } from 'date-fns'
import { id } from 'date-fns/locale'

/**
 *
 * @param date
 * @returns
 */
export function formatLocalDate(date: string | Date, formatString?: string) {
  return formatDate(new Date(date), formatString || 'dd MMM yyyy HH:mm', { locale: id })
}
