import { createRoot } from 'react-dom/client'
import '@/styles/global.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
)
