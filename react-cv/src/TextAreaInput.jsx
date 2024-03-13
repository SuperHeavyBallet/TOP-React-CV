import React, { useEffect } from "react";
import { useState } from "react"


export default function TextAreaInput( { value, onInputChange })
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
            <textarea
                onChange={handleInputChange}
                placeholder="Input..."
                value={input}
                >
            </textarea>
            <button className="clear-button" type="button"
            onClick={handleClearButtonClick}
            >
                Clear
            </button>

        

        </div>
    )
}