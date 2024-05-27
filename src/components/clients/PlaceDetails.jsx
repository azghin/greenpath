import Places from "../../Data/Places.json"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

function PlaceDetails(){
    //initial the default center 
    const [defaultCenter,setDefaultCenter]=useState({});
    const path = useLocation().pathname.split('/')
    const city =path[path.length-2]
    const placesCity = Places.filter(obj=>obj.city===city)
    useEffect(()=>{
       const placeIndice = placesCity.find(obj=>obj.id===6 )
       if(placeIndice){
        setDefaultCenter(placeIndice)
       } else {
        console.log('problem')
       }

    },[placesCity])
    return(
        <section id="place-details">
            <div className="container">
                <div className="row">
                    <div className="col-6"><h2>some text about the place</h2></div>
                    <div className="col-6"> map</div>
                </div>
                <div className="row">
                    <div><h2>img</h2></div>
                    <div> {defaultCenter.name} </div>
                </div>
            </div>
        </section>
    )
}

export default PlaceDetails