import Cities from "../../Data/Cities.json";
import { Places } from "../../recoil_state";
import { useRecoilValue } from "recoil";

import { lazy, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Gmap = lazy(() => import('../../layouts/clients/Gmap'))

function CityPlaces() {
    const Location = useLocation().pathname
    const CityName = Location.split('/').pop()
    const allPlaces=useRecoilValue(Places)
    const [defaultPlaces,setDefaultPlaces]=useState([])
    const newCity = Cities.find((city) => city.name === CityName);
    const [DefaultCity, setDefaultCity] = useState({})
    const [DefaultCenter, setDefaultCenter] = useState({})
    const [FilteredPlaces,setFilteredPlaces]=useState([])
    const [searchTerm,setSearchTerm]=useState('');

    useEffect(()=>{
        const filtered = allPlaces.filter(place=>place.city.toLowerCase()===CityName.toLowerCase())
        setFilteredPlaces(filtered)
        setDefaultPlaces(filtered)
        console.log('something');
    },[allPlaces,CityName])
    useEffect(()=>{
        if(newCity){
            setDefaultCity(newCity)
            setDefaultCenter(newCity)
        }
    },[newCity])
    const handleSearch = (event)=>{
        const value = event.target.value.toLowerCase();
        setSearchTerm(value)
        const filtered = defaultPlaces.filter(obj=>obj.name.toLowerCase().includes(value));
        setFilteredPlaces(filtered)
        console.log(filtered)
    }

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
            <div className="filters mb-3 mt-3">
              <label htmlFor="" className="form-label"> enter place name </label>
              <input type="text" className="form-control" value={searchTerm} onChange={handleSearch}  />
            </div>
                {Array.isArray(FilteredPlaces) && FilteredPlaces.length > 0 ? (
                    <ul className="scroll-container">
                        {FilteredPlaces.map((placeCity) => (
                            <li
                                key={placeCity.id}
                                onMouseEnter={() => { HandelHover(placeCity) }}
                                onMouseLeave={HandleOutHover}
                            >
                                
                             <Link to={`${placeCity.id}`} ><h5>{placeCity.place}</h5> <p>{placeCity.description}</p></Link>  
                            </li>
                        ))}
                    </ul>
                ) : (
                    <h2>Nothing to show</h2>
                )}
            </div>

            <div className="mapPlaces">
                {typeof DefaultCity.name === 'string' ? <Gmap data={DefaultCenter} isCity={true}/> : <h2>Loading</h2>}

            </div>
            </div>

        </section>
    )

}
export default CityPlaces
