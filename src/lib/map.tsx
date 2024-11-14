'use client'

import { Box } from '@mantine/core'
import _ from 'lodash'
import { Children, useMemo } from 'react'
import EmptyRecord from '~/components/empty'

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
export function Mapping<T>({
  data,
  render,
  isLoading,
  error,
  EmptyComponent = EmptyRecord,
}: Props<T>): React.ReactNode {
  // Handle loading state
  if (isLoading) {
    return (
      <Box my={50} style={{ textAlign: 'center' }}>
        <div>Loading...</div>
      </Box>
    )
  }

  // Handle error state
  if (error) {
    return (
      <Box my={50} style={{ textAlign: 'center', color: 'red' }}>
        <div>{error}</div>
      </Box>
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
      <Box my={50}>
        <EmptyComponent />
      </Box>
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
