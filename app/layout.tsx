import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans"
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
})

export const metadata: Metadata = {
  title: 'Eon Light | Living Digital Experiences',
  description: 'We don\'t just build code; we build living digital experiences. Transform your ideas into intelligent, breathing digital solutions that evolve with your business.',
  keywords: ['digital experiences', 'AI solutions', 'tech startup', 'software development', 'innovation'],
  authors: [{ name: 'Eon Light' }],
  openGraph: {
    title: 'Eon Light | Living Digital Experiences',
    description: 'Transform your ideas into intelligent, breathing digital solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eon Light | Living Digital Experiences',
    description: 'Transform your ideas into intelligent, breathing digital solutions.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#0a0a0f] text-white`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
