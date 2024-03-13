import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import './css/App.css'
import InfoCard from './InfoCard.jsx'
import SchoolInfoCard from './SchoolInfoCard.jsx'
import CompanyInfoCard from './WorkExperienceCard.jsx'
import "./css/BoxOutline.css";
import './css/Form.css'
import AddNewCard from './AddWorkExperienceCard.jsx'
import AddNewEducationCard from './AddEducationCard.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InfoCard />

    <AddNewEducationCard/>

   
    <AddNewCard/>

    
    

  </React.StrictMode>,
)
