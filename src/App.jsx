import React from 'react'
import Navbar from './components/navbar'
import Dashboard from './components/dashboard'
import Login from './components/login'
import Register from './components/register'
import Home from './components/home'

const App = () => {
  return (
    <>
    <div className='maincontainer scrollbar-hide'>
      {/* <Navbar/>
      <Dashboard/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      <Home/>
    </div>
    </>
  )
}

export default App