import React from "react";
import { useState } from "react";
import Input from "./Input";
import DateInput from "./DateInput";


export default function SchoolInfoCard( { removeCard })
{
    const [ schoolName, setSchoolName ] = useState("");
    const [ titleOfStudy, setTitleOfStudy ] = useState("");
    const [ levelOfStudy, setLevelOfStudy ] = useState("");
    const [ dateOfStudyStart, setDateOfStudyStart ] = useState("");
    const [ dateOfStudyEnd, setDateOfStudyEnd ] = useState("");

    const [ displaySchoolName, setDisplaySchoolName ] = useState("School...");
    const [ displayTitleOfStudy, setDisplayTitleOfStudy ] = useState("Title of Study...");
    const [ displayLevelOfStudy, setDisplayLevelOfStudy ] = useState("Level of Study...");
    const [ displayDateOfStudyStart, setDisplayDateOfStudyStart ] = useState("Started...");
    const [ displayDateOfStudyEnd, setDisplayDateOfStudyEnd ] = useState("Finished...");

    const [ isFormVisible, setIsFormVisible ] = useState(false);

    function handleSubmit(event)
    {
        

        event.preventDefault();

        if (schoolName != "" &&
        titleOfStudy != "" &&
        levelOfStudy != "" &&
        dateOfStudyStart != "" &&
        dateOfStudyEnd != "")
        {
            setDisplaySchoolName(schoolName);
            setDisplayTitleOfStudy(titleOfStudy);
            setDisplayLevelOfStudy(levelOfStudy);
            setDisplayDateOfStudyStart(dateOfStudyStart);
            setDisplayDateOfStudyEnd(dateOfStudyEnd);
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

                                <div className="edit-card-data">

                                    <div className="edit-header">School Name</div>
                                        <div className="edit-data-line">
                                            < Input value={schoolName} onInputChange={setSchoolName}/>
                                        </div>

                                    <div className="edit-header">Title of Study</div>
                                        <div className="edit-data-line">
                                            < Input value={titleOfStudy} onInputChange={setTitleOfStudy}/> 
                                        </div>

                                    <div className="edit-header">Level of Study</div>
                                        <div className="edit-data-line">
                                            < Input value={levelOfStudy} onInputChange={setLevelOfStudy}/> 
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
                        </div>

        <div className="info-card">
        <div className="card-data-title-background">
            <h3>Education</h3>
                <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 256 256">
                    <path fill="#f5f5f5" d="M241.1,82.8L136.5,46.8c-6.5-2.4-5.2-2.4-11.6,0L19.7,82.5c-6.5,2.3-6.5,6.2,0.1,8.5l25,8.5c-11.1,10.8-11.8,22-11.9,34.9c-4.3,1.6-7.3,5.8-7.3,10.7c0,4.5,2.6,8.4,6.3,10.3c-1.8,13.2-6.8,28.2-21.7,46c7.3,5.7,11.1,7.7,16.9,9.6c20.9-9,18.3-32.8,16.7-56.6c2.9-2.1,4.7-5.4,4.7-9.3c0-4.1-2.2-7.7-5.4-9.7c0.4-12.7,3.1-24.1,12.6-31.4c0.1-0.2,0.3-0.4,0.7-0.5l15.1,5.2l54.4,18.5c6.5,2.4,5.2,2.4,11.6,0l103.8-35.8C247.7,89,247.6,85.2,241.1,82.8L241.1,82.8L241.1,82.8z"/>
                    <path fill="#f5f5f5" d="M137.4,144.1c-6.5,2.3-5.1,2.3-11.6,0l-54.4-18.5L57.9,121v51.5l0,0l0,0v0.6l0,0c0.9,14.6,34.7,26.4,76.1,26.4c41.4,0,75.2-11.8,76.1-26.4l0,0v-54L137.4,144.1z"/>
                </svg>
            </div>
            <div className="card-data">
            <div className="data-line">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="8" width="14" height="11" />
                        <polygon points="12 3 3 8 21 8" />
                        <line x1="8" y1="21" x2="8" y2="12" />
                        <line x1="16" y1="21" x2="16" y2="12" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    <p>{displaySchoolName}</p>
                </div>

                <div className="data-line">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 1H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7z"></path>
                        <polyline points="16 1 16 7 22 7"></polyline>
                        <line x1="9" y1="12" x2="15" y2="12"></line>
                        <line x1="9" y1="16" x2="15" y2="16"></line>
                        <line x1="9" y1="20" x2="12" y2="20"></line>
                        </svg>
                    <p>{displayTitleOfStudy}</p>
                </div>

                <div className="data-line">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7z"></path>
                        <path d="M2 7v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7"></path>
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        </svg>
                    <p>{displayLevelOfStudy}</p>
                </div>

                <div className="data-line">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                        
                        </svg>
                    <p>{displayDateOfStudyStart}</p>
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