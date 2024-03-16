import React from 'react'
import Navbar from './components/navbar'
import Dashboard from './components/dashboard'

const App = () => {
  return (
    <>
    <div className='maincontainer'>
      <Navbar/>
      <Dashboard/>
    </div>
    </>
  )
}

export default App