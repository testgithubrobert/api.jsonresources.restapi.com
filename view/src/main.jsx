import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./stylesheet/app.stylesheet.css";
import "./stylesheet/responsive.css"

createRoot(document.getElementById('root')).render(
  <StrictMode> 
      <Router>
        <Routes>
          <Route path='/*' Component={App}></Route>
        </Routes>
      </Router>
  </StrictMode>,
)