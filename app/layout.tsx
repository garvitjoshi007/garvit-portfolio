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
  title: 'SRE Portfolio | Garvit Joshi',
  description:
    'Enterprise SRE portfolio dashboard - Infrastructure, Reliability, Production Systems',
  keywords: [
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
    title: 'SRE Portfolio | Garvit Joshi',
    description: 'Enterprise SRE portfolio dashboard',
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
