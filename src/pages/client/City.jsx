import { useParams,useLocation } from "react-router-dom"
import { useEffect } from "react"
import WelcomeCity from "../../components/clients/WelcomeCity";
import NavPlaces from "../../components/clients/NavPlaces";
function City(){
    const location=useLocation();
    useEffect(()=>{
        window.scrollTo(1,1)
    },[location])
    const cityname=useParams()
    return(
        <main>
            <WelcomeCity name={cityname.name}/>
            <NavPlaces name={cityname.name}/>
        </main>
    )
}

export default City