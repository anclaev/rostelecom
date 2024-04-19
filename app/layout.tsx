import type { Metadata } from 'next'

import Layout from '@components/layouts/Layout'

import '@styles/normalize.css'
import '@styles/globals.css'

export const metadata: Metadata = {
  title: 'Ростелеком',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
