
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="mt-10 ml-10">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
