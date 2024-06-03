import { Link } from "react-router-dom";

// import Gmap from "";
import { Suspense, lazy, useEffect, useState } from "react";
const Gmap = lazy(() => import("./Gmap"));

function NavigationMap(props) {
  const [defaultCenter, setDefaultCenter] = useState({});
  const [placesToShow, setPlacesToShow] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  useEffect(() => {
    if (props.defaultCenter) {
      setDefaultCenter(props.defaultCenter);
    }
  }, [props.defaultCenter]);
  // init the arrays !!
  useEffect(() => {
    if (props.data) {
      setPlacesToShow(props.data);
      setFilteredPlaces(props.data);
    }
  }, [props.data]);

  // handle hover event 
  const HandleHover = (data) => {
    const hoveredValue = data;
    setDefaultCenter(hoveredValue);
  };

  // handle outHover event 
  const HandlOutHover = (data)=>{
    setDefaultCenter(props.defaultCenter)
  }
  console.log(placesToShow);
  console.log(filteredPlaces);

  return (
    <>
      <section id="SelectCity">
        <div className="container h-100">
          <div className="citieslist">
            <div>
              <input type="text" className="form-control"/>
              filters
            </div>
            <ul className="scroll-container">
                {}
              {filteredPlaces.map((data) => (
                <li key={data.name} onMouseEnter={() => HandleHover(data)} onMouseOut={()=>HandlOutHover(data)}>
                  <Link to={`/client/city/${data.name}`}>
                    <h3>{data.name}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mapcity">
            <Suspense>
              <Gmap data={defaultCenter} />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}

export default NavigationMap;
