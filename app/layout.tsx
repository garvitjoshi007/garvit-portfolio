import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CommandPalette } from '@/components/command-palette'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Garvit Joshi – SRE Portfolio',
  description:
    'Garvit Joshi - Enterprise SRE portfolio dashboard. Infrastructure, Reliability, Production Systems.',
  keywords: [
    'Garvit Joshi',
    'SRE',
    'Infrastructure',
    'DevOps',
    'Kubernetes',
    'Distributed Systems',
    'Observability',
  ],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://garvitjoshi.dev',
    title: 'Garvit Joshi – SRE Portfolio',
    description: 'Enterprise SRE portfolio dashboard by Garvit Joshi',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider>
          {children}
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  )
}
