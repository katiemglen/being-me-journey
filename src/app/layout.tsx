import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Being Me Journey',
  description: 'A journey of self-discovery and growth',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
