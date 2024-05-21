import Places from "../../Data/Places.json";
import Cities from "../../Data/Cities.json";
import { useState, useEffect } from "react";
import Gmap from "../../layouts/clients/Gmap";
export default function NavPlaces(props) {
  const [DefaultCity, setDefaultCity] = useState();
  const [DefaultCenter, setDefaultCenter] = useState({});

  const [cityPlaces, setCityPlace] = useState([]);
  const cityName = props.name.toString();

  useEffect(() => {
    const newCity = Cities.find((city) => city.name === cityName);

    if (newCity) {
      setDefaultCenter(newCity);
      setDefaultCity(newCity);
    } else {
      console.warn(`City "${cityName}" not found in Cities data.`);
    }
  }, [cityName]);
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

  const HandleHover = () => {
    setDefaultCenter(DefaultCity);
  };
  const outHover = useEffect(() => {
    const newCity = Cities.find((city) => city.name === cityName);
    setDefaultCenter(newCity);
  }, [cityName]);
  return (
    <section id="NavPlaces" className="clearfix">
      <div className="container h-100">
        <div className="list-places ">
          <h2>in {props.name} you'll find </h2>
          {Array.isArray(cityPlaces) ? (
            <ul>
              {cityPlaces.map((placeCity) => (
                <li
                  key={placeCity.place}
                  // onMouseLeave={outHover}
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
          <Gmap city={true} data={DefaultCenter} />
        </div>
      </div>
    </section>
  );
}
