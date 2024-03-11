import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PersonalData from './PersonalData.jsx'
import UserInfo from './UserInfo.jsx'
import InfoCard from './InfoCard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InfoCard/>
    <InfoCard/>

  </React.StrictMode>,
)
