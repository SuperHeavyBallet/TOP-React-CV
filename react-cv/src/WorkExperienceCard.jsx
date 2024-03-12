import React from "react";
import { useState } from "react";
import Input from "./Input";

export default function CompanyInfoCard({ removeCard })
{
    const [ companyName, setCompanyName ] = useState("");
    const [ positionTitle, setPositionTitle ] = useState("");
    const [ responsibilities, setResponsibilities ] = useState("");
    const [ dateOfEmployment, setDateOfEmployment ] = useState("");

    const [ displayCompanyName, setDisplayCompanyName ] = useState("");
    const [ displayPositionTitle, setDisplayPositionTitle ] = useState("");
    const [ displayResponsibilities, setDisplayResponsibilities ] = useState("");
    const [ displayDateOfEmployment, setDisplayDateOfEmployment ] = useState("");

    const [ isFormVisible, setIsFormVisible ] = useState(false);

    function handleSubmit(event)
    {
        event.preventDefault();
        setDisplayCompanyName(companyName);
        setDisplayPositionTitle([positionTitle]);
        setDisplayResponsibilities(responsibilities);
        setDisplayDateOfEmployment(dateOfEmployment);
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

    function handleRemoveCard()
    {

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
                    <div>Company Name <Input onInputChange={setCompanyName}/> </div>
                    <div>Position Title <Input onInputChange={setPositionTitle}/> </div>
                    <div>Responsibilities <Input onInputChange={setResponsibilities}/> </div>
                    <div>Date of Employment <Input onInputChange={setDateOfEmployment}/> </div>
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
                    <p>Date of Employment: {displayDateOfEmployment}</p>
                </div>

                <div>
                    <button onClick={handleEditClick} type="button">Edit Info</button>
                    <button onClick={removeCard} type="button">Remove</button>
                </div>
            </div>
        </div>
    )

}