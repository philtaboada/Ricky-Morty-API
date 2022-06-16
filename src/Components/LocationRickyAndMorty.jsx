import React from 'react'


const LocationRickyAndMorty = ({ location }) => {


    return (
        <div className='Location'>
            <div className='Location-container'>
                <div className='Location-title'>
                    <h1>{location?.name}</h1>
                </div>
                <div className='Location-info'>
                    <div>
                        <h3>Type:</h3>
                        <p>{location?.type}</p>
                    </div>
                    <div>
                        <h3>Dimension: </h3>
                        <p>{location?.dimension}</p>
                    </div>
                    <div>
                        <h3>Population: </h3>
                        <p>{location?.residents.length}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationRickyAndMorty

