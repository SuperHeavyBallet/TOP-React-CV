import React from "react";
import { useState } from "react"
import './Form.css'




export default function PersonalData()
{
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ emailAddress, setEmailAddress ] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState("");

    const [ displayName, setDisplayName ] = useState('');
    const [ displayEmailAddress, setDisplayEmailAddress ] = useState("");

    const [ displayPhoneNumber, setDisplayPhoneNumber] = useState("");

    
    function handleNameInput(event)
    {
        setFirstName(event.target.value);
        
    }


    function handleLastNameInput(event)
    {
        setLastName(event.target.value);
    }

    function handleEmailInput(event)
    {
        setEmailAddress(event.target.value);
    }

    function handlePhoneNumberInput(event)
    {
        setPhoneNumber(event.target.value);
    }

    function handleSubmit(event)
    {
        event.preventDefault();
        setDisplayName(firstName + " " + lastName);
        setDisplayEmailAddress(emailAddress);
        setDisplayPhoneNumber(phoneNumber);
    }

    function clearNames()
    {
        setDisplayName("");
        setDisplayEmailAddress("");
        setDisplayPhoneNumber("");

        setFirstName("");
        setLastName("");
        setEmailAddress('');
        setPhoneNumber("");
    }
    

    return(
        <div >
            <form onSubmit={handleSubmit} className="form-container">
                <div>
                    <input 
                        onChange={handleNameInput}
                        id="first-name-input"
                        type="text"
                        placeholder="First Name..."
                        value={firstName}
                        >            
                    </input>
                    <button type="button" onClick={clearNames}>Clear</button>
                </div>
                <div>
                    <input
                        onChange={handleLastNameInput}
                        id="last-name-input"
                        type="text"
                        placeholder="Last Name..."
                        value={lastName}>
                    </input>
                    <button type="button" onClick={clearNames}>Clear</button>
                </div>
                <div>
                    <input
                        onChange={handleEmailInput}
                        id="email-address-input"
                        type="text"
                        placeholder="Email Address..."
                        value={emailAddress}>
                    </input>
                    <button type="button" onClick={clearNames}>Clear</button>
                </div>
                <div>
                    <input
                        onChange={handlePhoneNumberInput}
                        id="phone-number-input"
                        type="number"
                        placeholder="Phone Number..."
                        value={phoneNumber}
                    >
                    </input>
                    <button type="button" onClick={clearNames}>Clear</button>
                </div>
            
            <button type="submit">Submit</button>
            </form>

            <div className="details-display">
                <h1>{displayName}</h1>
                <h3>{displayEmailAddress}</h3>
                <h3>{displayPhoneNumber}</h3>
            </div>
        </div>
    )
}