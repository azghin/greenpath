import Cities from "../../Data/Cities.json";
import Places from "../../Data/Places.json";

import { lazy, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Gmap = lazy(() => import('../../layouts/clients/Gmap'))

function CityPlaces() {
    const [DefaultCenter, setDefaultCenter] = useState({})
    const [DefaultCity, setDefaultCity] = useState({})
    const [PlacesOfCity, setPlacesOfCity] = useState([])

    const Location = useLocation().pathname
    const CityName = Location.split('/').pop()
    const newCity = Cities.find((city) => city.name === CityName);
    useEffect(() => {
        let newPlaces = []
        if (newCity) {
            setDefaultCity(newCity)
            setDefaultCenter(newCity)
            for (let i = 0; i < Places.length; i++) {
                if (Places[i].city === newCity.name) {
                    newPlaces = [...newPlaces, Places[i]]
                }
            }
            setPlacesOfCity(newPlaces)
        }
    }, [newCity])

    const HandelHover = (placeCity) => {
        setDefaultCenter(placeCity)
    }
    const HandleOutHover = ()=>{
        setDefaultCenter(DefaultCity)
    }
    return (
        <section id="NavPlaces">
            <div className="container">

            
            <div className="list-places">
                {Array.isArray(PlacesOfCity) && PlacesOfCity.length > 0 ? (
                    <ul className="scroll-container">
                        {PlacesOfCity.map((placeCity) => (
                            <li
                                key={placeCity.id}
                                onMouseEnter={() => { HandelHover(placeCity) }}
                                onMouseLeave={HandleOutHover}
                            >
                                {" "}
                                <h5>{placeCity.place}</h5> <p>{placeCity.description}</p>{" "}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <h2>Nothing to show</h2>
                )}
            </div>

            <div className="mapPlaces">
                {typeof DefaultCity.name === 'string' ? <Gmap data={DefaultCenter} /> : <h2>Loading</h2>}

            </div>
            </div>

        </section>
    )

}
export default CityPlaces
