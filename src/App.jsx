import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards'
import LocationRickyAndMorty from './Components/LocationRickyAndMorty'
import MenuSearch from './Components/MenuSearch'
import useAPI from './Hooks/useAPI'

function App() {

  const [search, setSearch] = useState()
  const { location } = useAPI(search)

  console.log(location);
  return (
    <div className="App">
      <MenuSearch
        setSearch={setSearch}
      />
      <LocationRickyAndMorty
        location={location}
      />
      <div className='residents-container'>
        {location?.residents.map(resident => (
          <Cards resident={resident}
            key={resident} />
        ))}
      </div>
    </div>
  )
}

export default App
