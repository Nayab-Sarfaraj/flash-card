import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from './context/themeContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { Toaster } from "react-hot-toast"
import { FlashCardProvider } from './context/FlashCardContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <FlashCardProvider>
            <Toaster />
            <App />
          </FlashCardProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
