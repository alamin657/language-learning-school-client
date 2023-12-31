import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route.jsx'
import AuthProviders from './Providers/AuthProviders'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <div className='overflow-hidden  max-w-7xl mx-auto'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </AuthProviders>
  </React.StrictMode>,
)
