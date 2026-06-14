import { createRoot } from 'react-dom/client'
 import './index.css'
import App from './App.jsx'
import { AdminProvider } from './context/admincontext.jsx'
import AuthProvider from './context/authcontext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
  <AuthProvider>
      <AdminProvider>
        <App />
      </AdminProvider>
  </AuthProvider>
  </BrowserRouter>


)
