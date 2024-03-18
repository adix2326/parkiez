import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="714006340346-tbtmd2aikafoqgc9ukp6f161kl2pfjrn.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>    
  </React.StrictMode>,
)
