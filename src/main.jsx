import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import { RouteProvider } from '../components/context-api/RouteContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteProvider>
        <App />
      </RouteProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
