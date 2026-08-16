import type { PropsWithChildren } from 'react'

export default function WebinarLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-center justify-center bg-linear-to-br from-indigo-100 via-white to-purple-100 py-24">
      {children}
    </div>
  )
}
