import React from "react";
import { useState } from "react";
import Input from "./Input";




export default function InfoCard()
{

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
        setDisplayName(name);
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
        
        setIsFormVisible(true);

    }

    return (
        <div >
        { isFormVisible && (
        <div id="information-form" className="box-outline pop-up-form">
            <form onSubmit={handleSubmit}>
            <button 
                type="button"
                onClick={handleCloseBox}>X</button>
            <div>Name <Input onInputChange={setName}/> </div>
            <div>Email <Input onInputChange={setEmail}/> </div>
            <div>Phone <Input onInputChange={setPhone}/> </div>
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