import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App.tsx'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="davidlpoole.au.auth0.com"
      clientId="EQqnf7la5j8xPSP0v7oIrwd0QXbLcWVX"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://fruits/api',
      }}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  )
})
