import ErrorPage from '../../components/ErrorPage'
import { metadata } from '../layout'
 
export default function NotFound() {
  metadata.title = 'Blog | Lipez'

  return <ErrorPage title='Coming Soon...' desc='' />
}