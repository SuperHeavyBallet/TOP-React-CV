import React, { useState, useEffect } from "react";

export default function PhoneInput( { value, onInputChange, placeHolder })
{

    const [ input, setInput ] = useState("");

    //Phone Number formatting function
    const formatPhoneNumber = (value) =>
    {
        if (!value) return value;

        const phoneNumber = value.replace(/[^\d]/g, ''); // Remove non numeric characters
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }

        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }

    // Handle Input and apply formatting
    function handleInputChange(event)
    {
        const formattedPhoneNumber = formatPhoneNumber(event.target.value);
        setInput(formattedPhoneNumber);
        onInputChange(formattedPhoneNumber);
    }

    // Clear button handler
    function handleClearButtonClick()
    {
        setInput("");
        onInputChange("");
    }

    // Effect to handle external value change (e.g., initivial value or reset)
    useEffect(() => {
        setInput(value);
    }, [value]);

    return (
        <div>
            <input
            onChange={handleInputChange}
            type="text"
            placeholder={placeHolder || "Input..."}
            value={input}></input>
        
        <button 
        type="button"
        className="clear-button" 
        onClick={handleClearButtonClick}>
            Clear
        </button>

        </div>
    )

}