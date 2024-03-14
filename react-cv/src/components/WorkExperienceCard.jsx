import React from "react";
import { useState } from "react";
import Input from "./Input";
import DateInput from "./DateInput";

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
    const [ displayDateOfEmploymentEnd, setDisplayDateOfEmploymentEnd ] = useState("Finished...");



    const [ isFormVisible, setIsFormVisible ] = useState(false);

    function handleSubmit(event)
    {
        event.preventDefault();

        if (displayCompanyName != "" &&
        displayPositionTitle != "" &&
        displayResponsibilities != "" &&
        dateOfEmploymentStart != "" &&
        dateOfEmploymentEnd != "")
        {

        
            setDisplayCompanyName(companyName);
            setDisplayPositionTitle([positionTitle]);
            setDisplayResponsibilities(responsibilities);
            setDisplayDateOfEmploymentStart(dateOfEmploymentStart);
            setDisplayDateOfEmploymentEnd(dateOfEmploymentEnd)
            setIsFormVisible(false);
        }
        else
        {
            window.alert("Please fill out ALL fields before submitting!")
        }
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
             <div className="edit-container">
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

                        <div className="edit-card-data">

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

                        <div className="edit-header">Finished </div>
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
                    </div>

            <div className="info-card">
            <div className="card-data-title-background">
                <h3>Work Experience</h3>
                    <svg fill="#f5f5f5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 480 500">
                        <path d="M478.409,116.617c-0.368-4.271-3.181-7.94-7.2-9.403c-4.029-1.472-8.539-0.47-11.57,2.556l-62.015,62.011l-68.749-21.768
                        l-21.768-68.748l62.016-62.016c3.035-3.032,4.025-7.543,2.563-11.565c-1.477-4.03-5.137-6.837-9.417-7.207
                        c-37.663-3.245-74.566,10.202-101.247,36.887c-36.542,36.545-46.219,89.911-29.083,135.399c-1.873,1.578-3.721,3.25-5.544,5.053
                        L19.386,373.152c-0.073,0.071-0.145,0.149-0.224,0.219c-24.345,24.346-24.345,63.959,0,88.309
                        c24.349,24.344,63.672,24.048,88.013-0.298c0.105-0.098,0.201-0.196,0.297-0.305l193.632-208.621
                        c1.765-1.773,3.404-3.628,4.949-5.532c45.5,17.167,98.9,7.513,135.474-29.056C468.202,191.181,481.658,154.275,478.409,116.617z
                        M75.98,435.38c-8.971,8.969-23.5,8.963-32.47,0c-8.967-8.961-8.967-23.502,0-32.466c8.97-8.963,23.499-8.963,32.47,0
                        C84.947,411.878,84.947,426.419,75.98,435.38z"/>
                    </svg>
                </div>
                <div className="card-data">
                <div className="data-line">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="9" y1="21" x2="9" y2="9"></line>
                        <line x1="15" y1="21" x2="15" y2="9"></line>
                        <line x1="9" y1="3" x2="9" y2="9"></line>
                        <line x1="15" y1="3" x2="15" y2="9"></line>
                    </svg>
                    <p className="data-text">{displayCompanyName}</p>
                </div>

                <div className="data-line">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                        <line x1="12" y1="15" x2="12" y2="22"></line>
                        <line x1="9" y1="19" x2="15" y2="19"></line>
                        </svg>
                    <p className="data-text">{displayPositionTitle}</p>
                </div>

                <div className="data-line">
                    <div className="data-line-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <path d="M9 11l3 3L22 4"></path>
                        <path d="M9 17l3 3L22 10"></path>
                        </svg>
                        </div>
                    <p className="data-text">{displayResponsibilities}</p>
                </div>

                <div className="data-line">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                        
                        </svg>
                    <p className="data-text">{displayDateOfEmploymentStart}</p>
                </div>

                <div className="data-line">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                        {/* Tick Element */}
                        <line x1="8" y1="15" x2="10" y2="18"></line>
                        <line x1="16" y1="13" x2="10" y2="18"></line>
                        </svg>
                    <p className="data-text">{displayDateOfEmploymentEnd}</p>
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