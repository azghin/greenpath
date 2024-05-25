import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import WelcomeCity from "../../components/clients/WelcomeCity";
import CityPlaces from "../../components/clients/CityPlaces";
function City(){
    const location=useLocation();
    useEffect(()=>{
        window.scrollTo(1,1)
    },[location])
    return(
        <main>
            <WelcomeCity />
            <CityPlaces/>
        </main>
    )
}

export default City