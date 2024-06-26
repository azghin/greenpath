import { Link } from "react-router-dom";

// import Gmap from "";
import { Suspense, lazy, useEffect, useState } from "react";
const Gmap = lazy(() => import("./Gmap"));

function NavigationMap(props) {
  const [defaultCenter, setDefaultCenter] = useState({});
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  useEffect(() => {
    if (props.defaultCenter) {
      setDefaultCenter(props.defaultCenter);  
    }
  }, [props.defaultCenter]);
  // init the arrays !!
  useEffect(() => {
    if (props.data) {
      setFilteredPlaces(props.data);
    }
  }, [props.data]);

  // handle hover event 
  const HandleHover = (data) => {
    const hoveredValue = data;
    setDefaultCenter(hoveredValue);
  };

  // handle outHover event 
  const HandlOutHover = (data) => {
    setDefaultCenter(props.defaultCenter)
  }

  return (
    <>
      <section id="NavPlaces">
        <div className="container ">
          <div className="list-places">
            <div className="filters mb-3 mt-3">
              <label htmlFor="" className="form-label"> enter city name </label>
              <input type="text" className="form-control" />
            </div>
            <ul className="scroll-container">
              {filteredPlaces.length === 0 ? null : filteredPlaces.map((data) => (<li key={data.name} onMouseEnter={() => HandleHover(data)} onMouseOut={() => HandlOutHover(data)}>
                <Link to={`${data.name}`}>
                  <h3>{data.name}</h3>
                </Link>
              </li>))}
            </ul>
          </div>
          <div className="mapPlaces">
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
