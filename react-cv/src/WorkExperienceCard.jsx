import React from "react";
import { useState } from "react";
import Input from "./Input";
import DateInput from "./DateInput";
import TextAreaInput from "./TextAreaInput";

export default function CompanyInfoCard({ removeCard })
{
    const [ companyName, setCompanyName ] = useState("");
    const [ positionTitle, setPositionTitle ] = useState("");
    const [ responsibilities, setResponsibilities ] = useState("");
    const [ dateOfEmployment, setDateOfEmployment ] = useState("");

    const [ dateOfEmploymentStart, setDateOfEmploymentStart ] = useState("");
    const [ dateOfEmploymentEnd, setDateOfEmploymentEnd ] = useState("");

    const [ displayCompanyName, setDisplayCompanyName ] = useState("Company Name...");
    const [ displayPositionTitle, setDisplayPositionTitle ] = useState("Position Title...");
    const [ displayResponsibilities, setDisplayResponsibilities ] = useState("Responsibilities...");
    const [ displayDateOfEmployment, setDisplayDateOfEmployment ] = useState("");

    const [ displayDateOfEmploymentStart, setDisplayDateOfEmploymentStart] = useState("Started...");
    const [ displayDateOfEmploymentEnd, setDisplayDateOfEmploymentEnd ] = useState("Ended...");



    const [ isFormVisible, setIsFormVisible ] = useState(false);

    function handleSubmit(event)
    {
        event.preventDefault();
        setDisplayCompanyName(companyName);
        setDisplayPositionTitle([positionTitle]);
        setDisplayResponsibilities(responsibilities);
        setDisplayDateOfEmploymentStart(dateOfEmploymentStart);
        setDisplayDateOfEmploymentEnd(dateOfEmploymentEnd)
        setIsFormVisible(false);
    }

    function handleCloseBox()
    {
        setIsFormVisible(false);
    }

    function handleEditClick()
    {
        if (!isFormVisible)
        {
            setIsFormVisible(true);
        }
        else
        {
            setIsFormVisible(false);
        }
    }



    return (
        <div>
            {isFormVisible && (
                <div className="pop-up-form">
                    
                <form className="edit-form" onSubmit={handleSubmit}>

                <div className="edit-form-top-bar">
                    <h3>Edit Work Experience</h3>
                    <div className="close-button-container">
                    <button
                        className="close-button"
                        type="button"
                        onClick={handleCloseBox}>X
                    </button>
                    </div>
                </div>

                <div className="card-data">

                <div className="edit-header">Company Name </div>
                    <div className="edit-data-line">
                        <Input value={companyName} onInputChange={setCompanyName}/> 
                    </div>

                <div className="edit-header">Position Title </div>
                    <div className="edit-data-line">  
                        <Input value={positionTitle} onInputChange={setPositionTitle}/> 
                    </div>
                    
                <div className="edit-header">Responsibilities </div>
                    <div className="edit-data-line">      
                        <Input value={responsibilities} onInputChange={setResponsibilities}/> 
                    </div>
                    
                <div className="edit-header">Started </div>
                    <div className="edit-data-line">  
                        < DateInput value={dateOfEmploymentStart} onInputChange={setDateOfEmploymentStart} />
                    </div>

                <div className="edit-header">Ended </div>
                    <div className="edit-data-line"> 
                        < DateInput value={dateOfEmploymentEnd} onInputChange={setDateOfEmploymentEnd} />
                    </div>
                    
                </div>

                    <div className="submit-button-container">
                        <button className="submit-button" type="submit">Submit</button>
                    </div>

                    </form>
                </div>
            )}

            <div className="info-card">
            <div className="card-data-title-background"><h3>Work Experience</h3></div>
                <div className="card-data">
                <div className="data-line">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <g fill="#000"><path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5z"/><circle cx="10" cy="5.5" r="4.5"/></g>
                    </svg>
                    <p>{displayCompanyName}</p>
                </div>

                <div className="data-line">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <g fill="#000"><path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5z"/><circle cx="10" cy="5.5" r="4.5"/></g>
                    </svg>
                    <p>{displayPositionTitle}</p>
                </div>

                <div className="data-line">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <g fill="#000"><path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5z"/><circle cx="10" cy="5.5" r="4.5"/></g>
                    </svg>
                    <p>{displayResponsibilities}</p>
                </div>

                <div className="data-line">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <g fill="#000"><path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5z"/><circle cx="10" cy="5.5" r="4.5"/></g>
                    </svg>
                    <p>{displayDateOfEmploymentStart}</p>
                </div>

                <div className="data-line">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <g fill="#000"><path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5z"/><circle cx="10" cy="5.5" r="4.5"/></g>
                    </svg>
                    <p>{displayDateOfEmploymentEnd}</p>
                </div>

                </div>

                <div  className="edit-button-container">
                    <button className="edit-button" onClick={handleEditClick} type="button">Edit</button>
                    <button className="remove-button" onClick={removeCard} type="button">Remove</button>
                </div>
            </div>
        </div>
    )

}