import './styles/globals.css'

import type { Metadata } from 'next'

import { Faculty_Glyphic, Outfit } from 'next/font/google'

import { META } from '@/lib/constants/meta'
import DecorationProvider from '@/lib/providers/decoration'
import { cn } from '@/lib/utils'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' })

const facultyGlyphic = Faculty_Glyphic({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: '400',
})

export const metadata: Metadata = META

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          defer
          src="https://analytics.masb0ymas.com/script.js"
          data-website-id="be0953cb-3806-488a-95cc-eecd8e812228"
        ></script>
      </head>
      <body className={cn('font-sans', outfit.variable, facultyGlyphic.variable, 'antialiased')}>
        <DecorationProvider>{children}</DecorationProvider>
      </body>
    </html>
  )
}
