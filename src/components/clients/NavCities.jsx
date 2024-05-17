import { Link } from "react-router-dom";
import { useState } from "react";
import Gmap from "../../layouts/clients/Gmap";
function NavCities() {
  const [dataCity, setDataCity] = useState({
    lat: 29.71138072361799,
    lng: -8.714060252932148,
    zoom: 5,
    name:'Morocco'
  });
  const cities = [
    {
      lat: 33.56883816432362,
      lng: -7.594107258405521,
      zoom: 8,
      name: "casa",
    },
    {
      lat: 31.61687337033625,
      lng: -7.987592416193535,
      zoom: 8,
      name: "Marrakech",
    },
  ];
  const handleHover = (city) => {
    const clickedValue = city; // Parse the stored JSON value
    setDataCity(clickedValue);
  };
  const outHover = () => {
    setDataCity({
      lat: 29.71138072361799,
      lng: -8.714060252932148,
      zoom: 5,
      name: "Morocco",
    });
  };
  return (
    <section id="SelectCity">
      <div className="container h-100">
        <div className="citieslist">
          <ul >
            {cities.map((city) => (
              <Link to={`/client/city/${city.name}`} key={`${city.name}-1`}>
                {" "}
                <li
                  
                  id={`city-${city.name}`}
                  
                  onMouseEnter={() => handleHover(city)}
                  onMouseLeave={outHover}
                >
                  {" "}
                  <h3>{city.name}</h3>{" "}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="mapcity " >
          <Gmap data={dataCity} city={true}  />
        </div>
      </div>
    </section>
  );
}
export default NavCities;
