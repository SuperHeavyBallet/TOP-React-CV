import React from "react";
import { useState } from "react";
import Input from "./Input";


export default function SchoolInfoCard()
{
    const [ schoolName, setSchoolName ] = useState("");
    const [ titleOfStudy, setTitleOfStudy ] = useState("");
    const [ dateOfStudy, setDateOfStudy ] = useState("");

    const [ displaySchoolName, setDisplaySchoolName ] = useState("");
    const [ displayTitleOfStudy, setDisplayTitleOfStudy ] = useState("");
    const [ displayDateOfStudy, setDisplayDateOfStudy ] = useState("");

    const [ isFormVisible, setIsFormVisible ] = useState(false);

    function handleSubmit(event)
    {
        

        event.preventDefault();
        setDisplaySchoolName(schoolName);
        setDisplayTitleOfStudy(titleOfStudy);
        setDisplayDateOfStudy(dateOfStudy);
        setIsFormVisible(false);
        

    }

    function handleCloseBox()
    {
        
        setIsFormVisible(false);
    }

    function handleEditClick()
    {
        
        setIsFormVisible(true);

    }


    return (
        <div>
            {isFormVisible && (
                <div id="information-form" className="box-outline pop-up-form">
                    <form onSubmit={handleSubmit}>
                        <button
                            type="button"
                            onClick={handleCloseBox}>X
                        </button>
                    <div>School Name< Input onInputChange={setSchoolName}/> </div>
                    <div>Title of Study< Input onInputChange={setTitleOfStudy}/> </div>
                    <div>Date of Study< Input onInputChange={setDateOfStudy}/> </div>
                    <button type="submit">Submit</button>
                    </form>
                </div>
            )}

        <div className="box-outline">
            <div >
                <h3>Collected Info</h3>
                <p>School Name: {displaySchoolName}</p>
                <p>Title of Study: {displayTitleOfStudy}</p>
                <p>Date of Study: {displayDateOfStudy}</p>
            </div>

            <div>
                <button onClick={handleEditClick}>Edit Info</button>
            </div>
        </div>

        </div>
    )


}