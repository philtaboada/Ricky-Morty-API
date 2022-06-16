import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Cards = ({ resident }) => {
    const [card, setCard] = useState()

    useEffect(() => {
        axios.get(resident)
            .then(res => setCard(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(card);

    return (
        <div className='Card-container'>
            <div className='Card'>

                <img className='img-card' src={card?.image} alt="image-ricky-morty" />
                <h1 className='title-con-text'>{card?.name}</h1>
                <div className='con-text'>
                    <h2>Specie: {card?.species} </h2>
                    <h2>Origin: {card?.origin.name} </h2>
                    <h2>Type: {card?.type}</h2>
                </div>
            </div>
        </div>
    )
}

export default Cards