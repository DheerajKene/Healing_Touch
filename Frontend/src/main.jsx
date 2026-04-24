import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthcontextProvider } from './context/Authcontext.jsx'
import { Provider } from './src/components/ui/provider.jsx'

createRoot(document.getElementById('root')).render(
  <Provider>
    <AuthcontextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthcontextProvider>
  </Provider>
)
