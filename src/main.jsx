import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopeContextProvider from './Context/ShopeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopeContextProvider>
    <App />
  </ShopeContextProvider>

)
