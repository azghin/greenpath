import { useLocation } from "react-router-dom"
export default function WelcomeCity(){
    const CityName=useLocation().pathname.split('/').pop()
    return(
        <section id="WCity" className="clearfix">
            <div className="container">
                <h3> you're now navigating {CityName}  </h3>
            </div>
            <div className="welcome-svg"></div>
        </section>
    )
}