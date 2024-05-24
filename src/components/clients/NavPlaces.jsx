import Places from "../../Data/Places.json";
import Cities from "../../Data/Cities.json";
import { useState, useEffect, lazy, Suspense } from "react";
const Gmap =  lazy(() => import("../../layouts/clients/Gmap"));

export default function NavPlaces(props) {
  const [DefaultCity, setDefaultCity] = useState();
  const [DefaultCenter, setDefaultCenter] = useState({});
  const [cityPlaces, setCityPlace] = useState([]);

  const cityName = props.name.toString();
  const newCity = Cities.find((city) => city.name === cityName);
  
  useEffect(()=>{
    if(newCity){
      setDefaultCity(newCity)
    }
  },[newCity])


  useEffect(()=>{
    if(DefaultCity){
      setDefaultCenter(DefaultCity)
    }
  },[DefaultCity])
  console.log(DefaultCity)
  // useEffect(() => {
  //   if (newCity) {
  //     setDefaultCenter(newCity);
  //     setDefaultCity(newCity);
  //   } else {
  //     console.warn(`City "${cityName}" not found in Cities data.`);
  //   }

  // }, [cityName, newCity]);
  useEffect(() => {
    let newPlaces = [];
    for (let i = 0; i < Places.length; i++) {
      if (Places[i].city === cityName) {
        newPlaces = [...newPlaces, Places[i]];
      }
    }

    if (newPlaces.length === 0) {
      setCityPlace("nothing toshow");
    } else {
      setCityPlace(newPlaces);
    }
  }, [cityName]);

  const HandleHover = (placeCity) => {
    const HoveredValue = placeCity
    setDefaultCenter(HoveredValue);

  };
  // const outHover = useEffect(() => {
  //   const mainCity=DefaultCity;
  //   setDefaultCenter(mainCity);
  //   console.log(DefaultCenter)
  // }, [cityName,DefaultCity]);
  return (
    <section id="NavPlaces" className="clearfix">
      
      <div className="container h-100">
        <div className="list-places ">
          {/* <h2>in {DefaultCity.name} you'll find </h2> */}
          {Array.isArray(cityPlaces) ? (
            <ul>
              {cityPlaces.map((placeCity) => (
                <li
                  key={placeCity.place}
                  onMouseEnter={() => {
                    HandleHover(placeCity);
                  }}
                >
                  {" "}
                  <h5>{placeCity.place}</h5> <p>{placeCity.description}</p>{" "}
                </li>
              ))}
            </ul>
          ) : (
            <h2>{cityPlaces}</h2>
          )}
        </div>
        <div className="mapPlaces">
          <Suspense fallback={<div>loading</div>}>
            <Gmap city={true} data={DefaultCenter} />
          </Suspense>
          
        </div>
      </div>
    </section>
  );
}


