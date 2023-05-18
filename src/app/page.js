import 'next/image'
import styles from './style.css'

import Header from './components/Header.js'
import General from './components/General.js'
import Footer from './components/Footer.js'

export default function Home() {
  return (
    <main>
      <Header/>
      <General/>
      <Footer/>
    </main>
  )
}
