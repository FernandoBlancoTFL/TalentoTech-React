import { Header } from './pages/Header'
import { Main } from './pages/Main'
import { Footer } from './pages/Footer'
import { About } from './components/About'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import { Contact } from './components/Contact'

export function App () {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
  )
}
