import React from "react";
import { useState } from "react";
import Input from "./Input";
import DateInput from "./DateInput";


export default function SchoolInfoCard( { removeCard })
{
    const [ schoolName, setSchoolName ] = useState("");
    const [ titleOfStudy, setTitleOfStudy ] = useState("");
    const [ dateOfStudyStart, setDateOfStudyStart ] = useState("");
    const [ dateOfStudyEnd, setDateOfStudyEnd ] = useState("");

    const [ displaySchoolName, setDisplaySchoolName ] = useState("School...");
    const [ displayTitleOfStudy, setDisplayTitleOfStudy ] = useState("Title of Study...");
    const [ displayDateOfStudyStart, setDisplayDateOfStudyStart ] = useState("Started...");
    const [ displayDateOfStudyEnd, setDisplayDateOfStudyEnd ] = useState("Finished...");

    const [ isFormVisible, setIsFormVisible ] = useState(false);

    function handleSubmit(event)
    {
        

        event.preventDefault();
        setDisplaySchoolName(schoolName);
        setDisplayTitleOfStudy(titleOfStudy);
        setDisplayDateOfStudyStart(dateOfStudyStart);
        setDisplayDateOfStudyEnd(dateOfStudyEnd);
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
                    <form  className="edit-form" onSubmit={handleSubmit}>

                    <div className="edit-form-top-bar">
                        <h3>Edit Education</h3>
                        <div className="close-button-container">
                            <button
                                className="close-button"
                                type="button"
                                onClick={handleCloseBox}>X
                            </button>
                        </div>
                    </div>

                    <div className="card-data">

                        <div className="edit-header">School Name</div>
                            <div className="edit-data-line">
                                < Input value={schoolName} onInputChange={setSchoolName}/>
                            </div>

                        <div className="edit-header">Title of Study</div>
                            <div className="edit-data-line">
                                < Input value={titleOfStudy} onInputChange={setTitleOfStudy}/> 
                            </div>

                        <div className="edit-header">Started</div>
                            <div className="edit-data-line">    
                                < DateInput value={dateOfStudyStart} onInputChange={setDateOfStudyStart} /> 
                            </div>

                        <div className="edit-header">Finished</div>
                            <div className="edit-data-line">  
                                < DateInput value={dateOfStudyEnd} onInputChange={setDateOfStudyEnd}/> 
                            </div>
                        
                    </div>
                    
                    
                    <div className="submit-button-container">
                        <button className="submit-button" type="submit">Submit</button>
                    </div>

                    </form>
                </div>
            )}

        <div className="info-card">
        <div className="card-data-title-background"><h3>Education</h3></div>
            <div className="card-data">
            <div className="data-line">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <g fill="#000"><path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5z"/><circle cx="10" cy="5.5" r="4.5"/></g>
                    </svg>
                    <p>{displaySchoolName}</p>
                </div>

                <div className="data-line">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <g fill="#000"><path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5z"/><circle cx="10" cy="5.5" r="4.5"/></g>
                    </svg>
                    <p>{displayTitleOfStudy}</p>
                </div>

                <div className="data-line">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <g fill="#000"><path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5z"/><circle cx="10" cy="5.5" r="4.5"/></g>
                    </svg>
                    <p>{displayDateOfStudyStart}</p>
                </div>

                <div className="data-line">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <g fill="#000"><path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5z"/><circle cx="10" cy="5.5" r="4.5"/></g>
                    </svg>
                    <p>{displayDateOfStudyEnd}</p>
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