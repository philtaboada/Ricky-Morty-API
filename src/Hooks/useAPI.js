import axios from 'axios'
import { useEffect, useState } from 'react'

const useAPI = searchLocation => {

    const [location, setLocation] = useState()
    const [loading, setloading] = useState(true)

    useEffect(() => {
        setloading(true)
        let locationNumber
        if (searchLocation) {
            locationNumber = searchLocation
        } else {
            locationNumber = Math.ceil(Math.random() * 126)
        }

        const URL = `https://rickandmortyapi.com/api/location/${locationNumber}`

        axios.get(URL)
            .then(res => setLocation(res.data))
            .catch(err => console.log(err))
            .finally(() => setloading(false))
    }, [searchLocation])

    return { location }
}


export default useAPI