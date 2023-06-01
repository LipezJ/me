import './globals.css'
import './style.css'
import { Inter } from 'next/font/google'

import HeaderCont from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lipez',
  description: 'Lipez a developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderCont />
         <main>
          {children}
         </main>
        <Footer />
      </body>
    </html>
  )
}
