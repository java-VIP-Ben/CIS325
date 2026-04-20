import { StrictMode } from 'react'
import { BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import "../frontend/styles/global.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>,
)
