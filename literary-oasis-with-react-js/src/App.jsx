
import './App.css'
import Navbar from './Components/Header/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <h2 className='text-3xl text-red-600'>pera r pera</h2>
      <Outlet></Outlet>

    </>
  )
}

export default App
