import { Link } from "react-router-dom";
import Gmap from "./Gmap";

function NavigationMap(props){
    return(
        <>
        <section id="SelectCity">
            <div className="container h-100">
                <div className="citieslist">
                    <div>
                        <input type="text" />
                    </div>
                    <ul className="scroll-container">
                        {props.data.map((data)=>(
                            <li key={data.id}>
                                <Link>
                                    <h3>{data.name}</h3>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mapcity">
                    <h2>map</h2>
                </div>
            </div>
        </section>
        </>
    )
}

export default NavigationMap