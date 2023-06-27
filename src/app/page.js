import General from '../components/General.js'

import { changeTitle } from './layout'

export default function Home() {
  changeTitle('Lipez')
  return (
      <General/>
  )
}
