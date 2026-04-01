import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={inter.variable}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
