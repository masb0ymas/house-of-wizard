type Options = {
  currency?: string
  locales?: string
}

/**
 * Format currency
 * @param amount - The amount to format
 * @param options - The options to use for formatting
 * @returns The formatted currency
 */
export const formatCurrency = (amount: number, options?: Options) => {
  return new Intl.NumberFormat(options?.locales || 'id-ID', {
    style: 'decimal',
    currency: options?.currency || 'IDR',
    minimumFractionDigits: 0,
  }).format(amount)
}
