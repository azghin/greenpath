import { useLocation } from "react-router-dom"
import PlaceDetails from "../../components/clients/PlaceDetails"



function Place(){
const Path=useLocation().pathname.split('/')
    return(
        <>
        <section id="place" className="clearfix">
            <div className="container">
                <div className="place-svg">
                    img
                </div>
                <div className="placeIntro">
                    <h2>you're now navigating <span> {Path[Path.length-2]}</span>  <br/> in <span>{Path[Path.length-1]}</span>  you'll find </h2>
                </div>
            </div>
        </section>
        <PlaceDetails/>
        </>
        
    )
}
export default Place