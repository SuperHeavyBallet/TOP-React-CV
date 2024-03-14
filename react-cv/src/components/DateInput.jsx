import React, { useState, useEffect } from "react";

export default function DateInput( { value, onInputChange, placeHolder })
{

    const [ date, setDate ] = useState(() => {
        const today = new Date();
        return today.toISOString().split("T")[0];
    })

    function handleInputChange(event)
    {
        setDate(event.target.value);
        onInputChange(event.target.value);
    }

    // Clear button handler
    function handleClearButtonClick()
    {
        setDate("");
        onInputChange("");
    }

    // Effect to handle external value change (e.g., initivial value or reset)
    useEffect(() => {
        setDate(value);
    }, [value]);

    return (
        <div>
            <input
            onChange={handleInputChange}
            type="date"
            id="dateInput"
            placeholder={placeHolder || "Input..."}
            value={date}></input>
        
        <button 
        className="clear-button"
        type="button" 
        onClick={handleClearButtonClick}>
            Clear
        </button>

        </div>
    )

}