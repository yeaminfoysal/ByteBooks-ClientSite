
import { Outlet } from 'react-router'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
