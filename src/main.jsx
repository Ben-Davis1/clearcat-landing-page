import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import App from '../App.jsx'
import TermsAndConditions from '../components/TermsAndConditions.jsx'
import '../App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
      <Analytics />
    </Router>
  </React.StrictMode>,
)