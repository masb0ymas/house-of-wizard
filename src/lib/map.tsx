'use client'

import { IconLoader } from '@tabler/icons-react'
import { Children, useMemo } from 'react'

interface Props<T> {
  /** Array of data to be mapped */
  data: T[]
  /** Render function that receives each item and its index */
  render: (item: T, index: number) => React.ReactNode
  /** Optional loading state */
  isLoading?: boolean
  /** Optional error message */
  error?: string
  /** Optional custom empty state component */
  EmptyComponent?: React.ComponentType
}
/**
 * A utility component that maps over data and renders each item using a provided render function.
 * Handles loading, empty, and error states gracefully.
 * @template T - The type of items in the data array
 * @param props - Component props
 * @returns React elements array or status component
 */
export function Mapping<T>({ data, render, isLoading, error }: Props<T>): React.ReactNode {
  // Handle loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center gap-2 mt-10">
        <IconLoader className="h-6 w-6 animate-spin" />
        <span>Loading...</span>
      </div>
    )
  }

  // Handle error state
  if (error) {
    return (
      <div className="flex items-center justify-center gap-2 mt-10">
        <span>{error}</span>
      </div>
    )
  }

  // Validate render prop is a function
  if (typeof render !== 'function') {
    console.error('Mapping: render prop must be a function')
    return <div>Render prop must be a function</div>
  }

  // Handle empty data state
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="flex items-center justify-center gap-2 mt-10">
        <span>No data found</span>
      </div>
    )
  }

  // Memoize the mapping operation
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const mappedItems = useMemo(
    () =>
      data.map((item, index) => {
        try {
          return render(item, index)
        } catch (error) {
          console.error(`Error rendering item at index ${index}:`, error)
          return (
            <div key={index} style={{ color: 'red' }}>
              Error rendering item {index + 1}
            </div>
          )
        }
      }),
    [data, render]
  )

  return Children.toArray(mappedItems)
}
