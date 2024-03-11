import React from "react";
import { useState } from "react";
import CompanyInfoCard from "./CompanyInfoCard";

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
        setCards(cards.filter(card => card.id !== id));
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
            type="button"
            onClick={handleAddNewClick}
            
            >Add Work Experience</button>
            
            </div>
        )   

}