import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from "react-router-dom";
import Entete from './components/Entete'
import Footer from './components/Footer.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
