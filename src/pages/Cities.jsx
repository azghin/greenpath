import Intro from "../components/Intro"
import NavCities from "../components/NavCities"
import { useLocation  } from "react-router-dom"
import { useEffect } from "react"

function Cities (){
    const location = useLocation()
    useEffect(()=>{
        window.scrollTo(0,0)
    },[location])
    return(
        <main >
        <Intro/>
        <NavCities/>
        </main>
    )
}
export default Cities