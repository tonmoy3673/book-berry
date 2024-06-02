import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './components/Context/AuthProvider.jsx'
import { router } from './components/Routes/router.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router}/>
   <Toaster/>
   </AuthProvider>
  </React.StrictMode>,
)
