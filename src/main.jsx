import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router'
import Stairs from './Components/Common/Stairs.jsx'
import NavContext from './Context/NavContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Router>
  <Stairs>
    <NavContext>
      <App />
    </NavContext>
  </Stairs>
</Router>
  </StrictMode>,
)
