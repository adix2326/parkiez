import React from 'react'
import ParkiezLogo from '../assets/images/parkiez_logo1.png'
import NotificationsIcons from '@mui/icons-material/Notifications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const navbar = () => {
  return (
    <>
    <div className='maincontainer m-auto flex flex-row no-wrap justify-between items-center'>
      <img className="ml-[25px]" width={200} src={ParkiezLogo} alt="logo" />
      <div className="right text-gray-500 text-xl">
        <NotificationsIcons className="mr-8" style={{ fontSize: '1.2em'}}/>
        <AccountCircleIcon className="mr-6" style={{ fontSize: '1.8em'}}/>
      </div>
    </div>
    </>
  )
}

export default navbar