import React from 'react'

const MenuSearch = ({ setSearch }) => {

    const searchLocation = e => {
        e.preventDefault()
        setSearch(e.target.children[1].children[0].children[0].value)
    }

    return (
        <div>
            <form onSubmit={searchLocation} className='bg'>
                <div className='bg-container'></div>
                <div className='box-search-container'>
                    <div className='Search-container'>
                        <input className='input-style' type="number" placeholder='Discover the world of Ricky&Morty' />
                        <button className='button-search'><i className="fa-solid fa-magnifying-glass fa-2x"></i></button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MenuSearch