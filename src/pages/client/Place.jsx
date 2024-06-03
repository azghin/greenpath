import { useLocation } from "react-router-dom"
import PlaceDetails from "../../components/clients/PlaceDetails"
import LPlaces from "../../Data/Places.json";
import { useEffect, useState } from "react";


function Place(){
    const [defaultCenter,setDefaultCenter]=useState({})
    const Path=useLocation().pathname.split('/')
    const cityName = Path[Path.length-2]
    const placesCity = LPlaces.filter(obj=>obj.city===cityName)
    useEffect(()=>{
        const placeIndice = placesCity.find(obj=>obj.id===Number(Path[Path.length-1]))
        console.log(placeIndice)
        if(placeIndice){
            setDefaultCenter(placeIndice)
        }else {
            console.log('probleme we have')
        }
    },[Path,placesCity])

    return(
        <>
        <section id="place" className="clearfix">
            <div className="container">
                <div className="place-svg">
                    img
                </div>
                <div className="placeIntro">
                    <h2>you're now navigating <span> {defaultCenter.city}</span>  <br/> in <span>{defaultCenter.place} </span>  you'll find </h2>
                </div>
            </div>
        </section>
        <PlaceDetails data={defaultCenter}/>
        </>
        
    )
}
export default Place