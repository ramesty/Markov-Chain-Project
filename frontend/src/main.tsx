import "./index.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import { DataProvider } from "./context/AppContext";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DataProvider>
      <Home />
    </DataProvider>
  </StrictMode>,
)
