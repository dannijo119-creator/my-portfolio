import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import ClientThemeProvider from '@/components/ClientThemeProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adrienne Jones - Portfolio',
  description: 'Modern portfolio showcasing my projects and skills as a Technical Analyst specializing in AI and Next.js development',
  keywords: 'portfolio, technical analyst, AI, machine learning, web development, software engineer, react, nextjs, trinidad',
  authors: [{ name: 'Adrienne Jones' }],
  openGraph: {
    title: 'Adrienne Jones - Portfolio',
    description: 'Modern portfolio showcasing my projects and skills as a Technical Analyst specializing in AI and Next.js development',
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