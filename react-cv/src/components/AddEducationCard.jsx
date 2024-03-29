import React from "react";
import { useState } from "react";
import SchoolInfoCard from './SchoolInfoCard'

export default function AddNewEducationCard()
{
    const [ cards, setCards ] = useState([]);
    const [ nextID, setNextID ] = useState([]);

    function handleAddNewClick()
    {
        const newCardData = {
            id: nextID,
        };

        setCards(prevCards => [...prevCards, newCardData]);
        setNextID(nextID + 1);
    }

    function handleRemoveCard(id)
    {
        const isConfirmed = window.confirm("Are you sure you want to remove this item?");

        if (isConfirmed)
        {
            setCards(cards.filter(card => card.id !== id));
        }
    }

    return (
        <div className="add-button-container">
            {cards.map(card => (
                <SchoolInfoCard
                    key={card.id}
                    removeCard={() => handleRemoveCard(card.id)}
                />
            ))}

            <button
            className="add-new-card-button"
            type="button"
            onClick={handleAddNewClick}>
                Add Education
            </button>
        </div>
    )
}