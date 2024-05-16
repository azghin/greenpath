import Places from "../Data/Places.json";
import { useState, useEffect } from "react";
export default function NavPlaces(props) {
  const [cityPlaces, setCityPlace] = useState([]);
  const cityName = props.name.toString();
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

  return (
    <section id="NavPlaces">
      <div className="container">
        <div className="list-places">
          <h2>in {props.name} you'll find </h2>
          {Array.isArray(cityPlaces) ? (
            <ul>
            {cityPlaces.map((placeCity) => (
              <li key={placeCity.place}>
                {" "}
                <h5>{placeCity.place}</h5> <p>{placeCity.description}</p>{" "}
              </li>
            ))}
          </ul>
          ) : (
            <h2>{cityPlaces}</h2>
          )}
          
        </div>
        <div className="mapPlaces">Map</div>
      </div>
    </section>
  );
}
