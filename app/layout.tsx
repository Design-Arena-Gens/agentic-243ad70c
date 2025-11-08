import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Covers the World',
  description: 'Experience the future of artificial intelligence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
