import React from "react";
import { useState } from "react";
import Input from "./Input";
import DateInput from "./DateInput";


export default function SchoolInfoCard()
{
    const [ schoolName, setSchoolName ] = useState("");
    const [ titleOfStudy, setTitleOfStudy ] = useState("");
    const [ dateOfStudyStart, setDateOfStudyStart ] = useState("");
    const [ dateOfStudyEnd, setDateOfStudyEnd ] = useState("");

    const [ displaySchoolName, setDisplaySchoolName ] = useState("");
    const [ displayTitleOfStudy, setDisplayTitleOfStudy ] = useState("");
    const [ displayDateOfStudyStart, setDisplayDateOfStudyStart ] = useState("");
    const [ displayDateOfStudyEnd, setDisplayDateOfStudyEnd ] = useState("");

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
                <div id="information-form" className="box-outline pop-up-form">
                    <form onSubmit={handleSubmit}>
                        <button
                            type="button"
                            onClick={handleCloseBox}>X
                        </button>
                    <div>School Name< Input value={schoolName} onInputChange={setSchoolName}/> </div>
                    <div>Title of Study< Input value={titleOfStudy} onInputChange={setTitleOfStudy}/> </div>
                    <div>Started< DateInput value={dateOfStudyStart} onInputChange={setDateOfStudyStart} /> </div>
                    <div>Finished< DateInput value={dateOfStudyEnd} onInputChange={setDateOfStudyEnd}/> </div>
                    <button type="submit">Submit</button>
                    </form>
                </div>
            )}

        <div className="box-outline">
            <div >
                <h3>Education</h3>
                <p>School Name: {displaySchoolName}</p>
                <p>Title of Study: {displayTitleOfStudy}</p>
                <p>Started: {displayDateOfStudyStart}</p>
                <p>Finished: {displayDateOfStudyEnd}</p>
            </div>

            <div>
                <button onClick={handleEditClick}>Edit Info</button>
            </div>
        </div>

        </div>
    )


}