import { useParams } from "react-router-dom"
function City(){
    const cityname=useParams()
    console.log(cityname)
    return(
        <main>
            <h1> City {cityname.name}  </h1>
        </main>
    )
}

export default City