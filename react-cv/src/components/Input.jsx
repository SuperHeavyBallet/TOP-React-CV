import React, { useEffect } from "react";
import { useState } from "react"


export default function Input( { value, onInputChange })
{

    const [ input, setInput ] = useState(value);

    function handleInputChange(event)
    {
        setInput(event.target.value);
        onInputChange(event.target.value);
    }

    function handleClearButtonClick()
    {
        setInput("");
        onInputChange("");
    }

    useEffect(() => {
        setInput(value);
    }, [value]);

    return (

        <div>
            <input 
                onChange={handleInputChange}
                type="text"
                placeholder="Input..."
                value={input}
                >
            </input>
            <button 
            className="clear-button" 
            type="button"
            onClick={handleClearButtonClick}
            >
                Clear
            </button>

        

        </div>
    )
}