import Places from "../../Data/Places.json";
import Cities from "../../Data/Cities.json";
import { useState, useEffect, lazy, Suspense } from "react";
const Gmap = lazy(() => import("../../layouts/clients/Gmap"));





export default function NavPlaces(props) {
  const [ShouldRender, setShouldRender] = useState(false)
  const [DefaultCity, setDefaultCity] = useState();
  const [DefaultCenter, setDefaultCenter] = useState({});
  const [cityPlaces, setCityPlace] = useState([]);

  const cityName = props.name.toString();
  const newCity = Cities.find((city) => city.name === cityName);

  useEffect(() => {
    if (typeof DefaultCenter === 'object') {
      setShouldRender(true)
    }
  }, [DefaultCenter])

  useEffect(() => {
    if (newCity) {
      setDefaultCity(newCity)
    }
  }, [newCity])


  useEffect(() => {
    if (DefaultCity) {
      setDefaultCenter(DefaultCity)
    }
  }, [DefaultCity])
  console.log(DefaultCity)
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
  console.log(DefaultCity)
  return (

    <section id="NavPlaces" className="clearfix">

      {ShouldRender ? <div className="container h-100">
        <div className="list-places ">
          {DefaultCity.name === cityName ? <h2>in {DefaultCity.name} you'll find </h2> : <h1>loading</h1>}

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
          {typeof DefaultCenter === 'object' ? <Suspense fallback={<div>loading</div>}>
            <Gmap city={true} data={DefaultCenter} />
          </Suspense> : <h1>loading</h1>}


        </div>
      </div> : <h2>no</h2>}

    </section>




  );
}
