import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ticket App Ninja',
  description: 'Help Desk',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

    <body className={inter.className}>
    <Navbar />
    {children}
    </body>
    </html>
  )
}
