import React from "react";
import { useState } from "react";
import Input from "./Input";
import PhoneInput from "./PhoneInput";
import EmailInput from "./EmailInput";




export default function InfoCard()
{

    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");

    const [ name, setName ] = useState("");

    const [ email, setEmail ] = useState("");

    const [ phone, setPhone ] = useState("");

    const [ displayName, setDisplayName ] = useState("");
    const [ displayEmail, setDisplayEmail ] = useState("");
    const [ displayPhone, setDisplayPhone ] = useState("");

    const [ isFormVisible, setIsFormVisible ] = useState(false);
    

    function handleSubmit(event)
    {
        

        event.preventDefault();
        setDisplayName(firstName + " " + lastName);
        setDisplayEmail(email);
        setDisplayPhone(phone);
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
        <div >
        { isFormVisible && (
        <div id="information-form" className="box-outline pop-up-form">
            <form onSubmit={handleSubmit}>
            <button 
                type="button"
                onClick={handleCloseBox}>X</button>
            <div>First Name <Input value={firstName || ""} onInputChange={setFirstName}/> </div>
            <div>Last Name <Input value={lastName || ""} onInputChange={setLastName}/> </div>
            <div>Email <EmailInput value={email || ""} onInputChange={setEmail}/> </div>
            <div>Phone <PhoneInput value={phone || ""} onInputChange={setPhone} placeholder="Phone (XXX) XXX-XXXX"/> </div>
            <button type="submit">Submit</button>
            </form>
        </div>
        )}

        
        <div className="box-outline">
            <div>
                <h3>Personal Info:</h3>
                <p>Name: {displayName}</p>
                <p>Email: {displayEmail}</p>
                <p>Phone: {displayPhone}</p>
            </div>

            <div>
                <button onClick={handleEditClick}>Edit Info</button>
            </div>
            </div>


        </div>
    )
}