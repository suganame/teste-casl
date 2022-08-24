import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { AbilityContext } from './utility/Can'
import ability from './configs/acl'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AbilityContext.Provider value={ability}>
      <App />
    </AbilityContext.Provider>
  </React.StrictMode>
)
