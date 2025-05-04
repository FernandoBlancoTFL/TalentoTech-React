import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

export function App () {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
