import React from "react";
import { useState } from "react";
import CompanyInfoCard from "./WorkExperienceCard";

export default function AddNewCard()
{
    const [ cards, setCards ] = useState([]);

    const [ nextID, setNextID ] = useState(0);


    function handleAddNewClick()
    {
        const newCardData = {
            id: nextID,
        }
        //const newCard = <CompanyInfoCard key={cards.length} />;
        setCards(prevCards => [...prevCards, newCardData]);
        setNextID(nextID + 1);

    }

    function handleRemoveCard( id)
    {
        const isConfirmed = window.confirm("Are you sure you want to remove this item?");

        if (isConfirmed)
        {
            setCards(cards.filter(card => card.id !== id));
        }
        
        
    }

    

    return (
        <div>
            {cards.map(card => (
                <CompanyInfoCard
                key={card.id}
                removeCard={() => handleRemoveCard(card.id)}
                />
            ))}
        <button 
            className="add-new-card-button"
            type="button"
            onClick={handleAddNewClick}
            
            >Add Work Experience</button>
            
            </div>
        )   

}