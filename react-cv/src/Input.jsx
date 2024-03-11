import React from "react";
import { useState } from "react"
import './Form.css'

export default function Input( { onInputChange })
{

    const [ input, setInput ] = useState("");

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
    return (

        <div>
            <input 
                onChange={handleInputChange}
                type="text"
                placeholder="Input..."
                value={input}
                >
            </input>
            <button type="button"
            onClick={handleClearButtonClick}
            >
                Clear
            </button>

        

        </div>
    )
}