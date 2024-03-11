import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PersonalData from './PersonalData.jsx'
import UserInfo from './UserInfo.jsx'
import InfoCard from './InfoCard.jsx'
import SchoolInfoCard from './SchoolInfoCard.jsx'
import CompanyInfoCard from './CompanyInfoCard.jsx'
import "./BoxOutline.css";
import './Form.css'
import AddNewCard from './AddNewCard.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InfoCard/>

    <SchoolInfoCard/>
    <AddNewCard/>
    

  </React.StrictMode>,
)
