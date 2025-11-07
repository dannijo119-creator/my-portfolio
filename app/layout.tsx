import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import ThemeProviderWrapper from '@/components/ThemeProviderWrapper'
import ThemeBackground from '@/components/ThemeBackground'

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
export const poppins = Poppins({ weight: ['600', '700', '800'], subsets: ['latin'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Adrienne Jones - Portfolio',
  description: 'Creative front-end developer building luxurious web experiences — motion, micro-interactions, and beautiful gradients.',
  keywords: 'portfolio, developer, web development, software engineer, react, nextjs, front-end developer',
  authors: [{ name: 'Adrienne Jones' }],
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Adrienne Jones - Portfolio',
    description: 'Creative front-end developer building luxurious web experiences — motion, micro-interactions, and beautiful gradients.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} ${inter.className} antialiased`}>
        <ThemeProviderWrapper>
          <ThemeBackground />
          <Navigation />
          <main>{children}</main>
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}