import React from "react";
import { useState } from "react";
import Input from "./Input";
import PhoneInput from "./PhoneInput";
import EmailInput from "./EmailInput";




export default function InfoCard()
{

    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");

    const [ email, setEmail ] = useState("");

    const [ phone, setPhone ] = useState("");

    const [ displayName, setDisplayName ] = useState("Name...");
    const [ displayEmail, setDisplayEmail ] = useState("Email@Address");
    const [ displayPhone, setDisplayPhone ] = useState("(000) 000-0000");

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
        <div className="pop-up-form">
            <form className="edit-form" onSubmit={handleSubmit}>

                <div className="edit-form-top-bar">
                    <h3>Edit Personal Info</h3>
                    <div className="close-button-container">
                    <button 
                        className="close-button"
                        type="button"
                        onClick={handleCloseBox}>
                            X
                        </button>

                    </div>
                </div>            
                <div className="card-data">

                <div className="edit-header">First Name </div>
                    <div className="edit-data-line">
                        <Input value={firstName || ""} onInputChange={setFirstName}/>
                    </div>

                <div className="edit-header">Last Name </div>
                    <div className="edit-data-line">
                        <Input value={lastName || ""} onInputChange={setLastName}/>
                    </div>

                <div className="edit-header">Email </div>
                    <div className="edit-data-line">
                        <EmailInput value={email || ""} onInputChange={setEmail}/>
                    </div>

                <div className="edit-header">Phone </div>
                    <div className="edit-data-line">
                        <PhoneInput value={phone || ""} onInputChange={setPhone} placeholder="Phone (XXX) XXX-XXXX"/>
                    </div>
            </div>
            <div className="submit-button-container">
                <button className="submit-button" type="submit">Submit</button>
            </div>
            </form>
        </div>
        )}

        
        <div className="info-card">
            <div className="card-data-title-background"><h3>Personal Info</h3></div>
            <div className="card-data">
                <div className="data-line">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <g fill="#000"><path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5z"/><circle cx="10" cy="5.5" r="4.5"/></g>
                    </svg>
                    <p>{displayName}</p>
                </div>

                <div className="data-line">
                <svg fill="#000" height="20" width="20" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 80 50">
                    <path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
                            c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
                            H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
                            c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
                            c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
                            c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
                            c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"/>
                </svg>
                <p>{displayEmail}</p>
                </div>

                <div className="data-line">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 122.88 122.27">
                    <g><path d="M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11 c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21 l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1 c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69 c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89 C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2c0.95,0.07,1.8,0.62,2.25,1.44 l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03 c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25L33.84,50.25L33.84,50.25z"/></g></svg>
                <p>{displayPhone}</p>
                </div>


                
                
            </div>

            <div className="edit-button-container">
                <button className="edit-button" onClick={handleEditClick}>Edit</button>
            </div>
            </div>


        </div>
    )
}