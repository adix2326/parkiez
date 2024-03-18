import React from 'react'
import Navbar from './components/navbar'
import Dashboard from './components/dashboard'
import Login from './components/login'

const App = () => {
  return (
    <>
    <div className='maincontainer scrollbar-hide'>
      {/* <Navbar/>
      <Dashboard/> */}
      <Login/>
    </div>
    </>
  )
}

export default App