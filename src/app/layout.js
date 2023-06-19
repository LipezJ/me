import '../styles/globals.css'
import '../styles/style.css'
import { Inter } from 'next/font/google'

import Head from 'next/head'
import HeaderCont from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lipez',
  description: 'Lipez a developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </Head>
        <HeaderCont />
         <main>
          <general>
            {children}
          </general>
         </main>
        <Footer />
      </body>
    </html>
  )
}
