import React from 'react'
import ParkiezLogo from '../assets/images/parkiez_logo1.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { GoogleLogin } from '@react-oauth/google';

const login = () => {
  return (
    <>
        <div className='maincontainer flex flex-col justify-center items-center shadow-lg w-1/3 h-screen mx-auto rounded-md gap-8'>
          <img className='' src={ParkiezLogo} alt="" width={300}/>
          <div className="incontainer flex flex-row justify-center items-center">
            <form className='flex flex-col justify-center items-center gap-5' action="">
              <TextField 
                id="outlined-basic" 
                label="Email" 
                variant="outlined" 
                color="success" 
                size="small" 
                required
              />
              <TextField 
                id="outlined-password-input" 
                label="Password" 
                type="password" 
                autoComplete="current-password" 
                color='success' 
                size="small" 
                required
              />
              <Button variant="contained" color='success'>Login</Button>
            </form>
          </div>
          <p className='font-medium'>OR</p>
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
    </>
  )
}

export default login