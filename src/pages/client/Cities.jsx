import Intro from "../../components/clients/Intro"
import NavCities from "../../components/clients/NavCities"
import { useLocation } from "react-router-dom"
import { useEffect, useState, lazy, Suspense } from "react"
// import NavigationMap from "../../layouts/clients/NavigationMap"
import CitiesList from "../../Data/Cities.json";

const NavigationMap = lazy(() => import('../../layouts/clients/NavigationMap'))

function Cities() {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    const defaultCenter = {
        lat: 29.71138072361799,
        lng: -8.714060252932148,
        zoom: 5,
        name: "Morocco",
    }
    const [cities, setCities] = useState([])
    useEffect(() => {
        let newCities = []
        for (let i = 0; i < CitiesList.length; i++) {
            newCities = [...newCities, CitiesList[i]]
        }
        setCities(newCities)
    }, [])
    return (
        <main >
            <Intro />
            <Suspense>
                <NavigationMap data={cities} defaultCenter={defaultCenter} />

            </Suspense>
            {/* <NavCities/> */}
        </main>
    )
}
export default Cities