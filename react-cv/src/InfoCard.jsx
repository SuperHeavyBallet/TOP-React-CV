import React from "react";
import { useState } from "react";
import Input from "./Input";
import "./BoxOutline.css";

export default function InfoCard()
{

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");

    return (
        <div >
        
        <div className="box-outline">
            <div>Name <Input onInputChange={setName}/> </div>
            <div>Email <Input onInputChange={setEmail}/> </div>
            <div>Phone <Input onInputChange={setPhone}/> </div>
        </div>

        
            <div className="box-outline">
                <h3>Collected Info:</h3>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
            </div>

        </div>
    )
}