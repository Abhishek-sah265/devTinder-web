import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'

createRoot(document.getElementById('root')).render(
  // due to stict mode, useEffect is called twice in development mode, so we have to make sure that the api call is idempotent, otherwise it will cause issues. In production mode, it will be called only once.
  <StrictMode> 
    <App />
  </StrictMode>,
)
