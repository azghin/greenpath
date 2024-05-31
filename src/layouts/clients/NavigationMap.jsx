import { Link } from "react-router-dom";

// import Gmap from "";
import { Suspense, lazy, useEffect, useState } from "react";
const Gmap = lazy(()=>import('./Gmap'))


function NavigationMap(props){
    const [defaultCenter,setDefaultCenter]=useState({})
    const [placesToShow,setPlacesToShow]=useState([])
    const [filteredPlaces,setFilteredPlaces]=useState([])
    useEffect(()=>{
        if(props.defaultCenter){
            setDefaultCenter(props.defaultCenter)
        }
    })
    useEffect(()=>{
        if(props.data){
            setPlacesToShow(props.data)
            setFilteredPlaces(props.data)
        }
    })
    const HandleHover=(data)=>{
        const hoveredValue=data;
        setDefaultCenter(hoveredValue)
    }
    
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
                            <li key={data.name} onMouseEnter={()=>HandleHover(data)}>
                                <Link>
                                    <h3>{data.name}</h3>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mapcity">
                    {/* <h2>map</h2>
                    <h1> {defaultCenter.name} </h1> */}
                    <Suspense>
                                            <Gmap data={defaultCenter} />

                    </Suspense>
                </div>
            </div>
        </section>
        </>
    )
}

export default NavigationMap