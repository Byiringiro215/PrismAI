import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { SideBarProvider } from './assets/Providers/Provider.jsx'

createRoot(document.getElementById('root')!).render(
<  SideBarProvider>
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
  </SideBarProvider>,
)
