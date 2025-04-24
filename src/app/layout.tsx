import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../app/globals.css'
import Header from '../app/components/Header'
import Footer from '../app/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Habesha Brew - Authentic Ethiopian Coffee in Nanjing',
  description: 'Experience the rich tradition of Ethiopian coffee ceremony in the heart of Nanjing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}