import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import ClientThemeProvider from '@/components/ClientThemeProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Modern portfolio showcasing my projects and skills as a full-stack developer',
  keywords: 'portfolio, developer, web development, software engineer, react, nextjs',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name - Portfolio',
    description: 'Modern portfolio showcasing my projects and skills as a full-stack developer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ClientThemeProvider>
          <Navigation />
          <main>{children}</main>
        </ClientThemeProvider>
      </body>
    </html>
  )
}