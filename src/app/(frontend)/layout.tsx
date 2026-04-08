import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header/Header'
import { getStoreInfo } from '@/lib/apiServices'
import { getPayloadClient } from '@/lib/payloadClient'
import { headers } from 'next/headers'

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

  const store = await getStoreInfo()

  const payload = await getPayloadClient()

  const { user } = await payload.auth({ headers: await headers() })

  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header storeName={store.name} logoUrl={store.logoUrl} user={user} />
        <main>{children}</main>
      </body>
    </html>
  )
}
