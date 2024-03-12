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

    const [ displayCompanyName, setDisplayCompanyName ] = useState("");
    const [ displayPositionTitle, setDisplayPositionTitle ] = useState("");
    const [ displayResponsibilities, setDisplayResponsibilities ] = useState("");
    const [ displayDateOfEmployment, setDisplayDateOfEmployment ] = useState("");

    const [ displayDateOfEmploymentStart, setDisplayDateOfEmploymentStart] = useState("");
    const [ displayDateOfEmploymentEnd, setDisplayDateOfEmploymentEnd ] = useState("");



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
                <div id="information-form" className="box-outline pop-up-form">
                <form onSubmit={handleSubmit}>
                    <button
                        type="button"
                        onClick={handleCloseBox}>X
                    </button>
                    <div>Company Name <Input value={companyName} onInputChange={setCompanyName}/> </div>
                    <div>Position Title <Input value={positionTitle} onInputChange={setPositionTitle}/> </div>
                    <div>Responsibilities <TextAreaInput value={responsibilities} onInputChange={setResponsibilities}/> </div>
                    
                    
                    
                    <div>Started < DateInput value={dateOfEmploymentStart} onInputChange={setDateOfEmploymentStart} /></div>
                    <div>Ended < DateInput value={dateOfEmploymentEnd} onInputChange={setDateOfEmploymentEnd} /></div>

                    <button type="submit">Submit</button>
                    </form>
                </div>
            )}

            <div className="box-outline">
                <div >
                    <h3>Work Experience</h3>
                    <p>Company Name: {displayCompanyName}</p>
                    <p>Position Title: {displayPositionTitle}</p>
                    <p>Responsibilities: {displayResponsibilities}</p>
                    <p>Started: {displayDateOfEmploymentStart}</p>
                    <p>Ended: {displayDateOfEmploymentEnd}</p>
                </div>

                <div>
                    <button onClick={handleEditClick} type="button">Edit Info</button>
                    <button onClick={removeCard} type="button">Remove</button>
                </div>
            </div>
        </div>
    )

}