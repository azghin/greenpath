import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Gmap from "../../layouts/clients/Gmap";
import Cities from "../../Data/Cities.json";
function NavCities() {
  const [DefaultCenter, setDefaultCenter] = useState({
    lat: 29.71138072361799,
    lng: -8.714060252932148,
    zoom: 5,
    name: "Morocco",
  });
  const [cities, setCities] = useState([]);
  const [InputValue, setInputValue] = useState("");
  useEffect(() => {
    let newCities = [];
    for (let i = 0; i < Cities.length; i++) {
      newCities = [...newCities, Cities[i]];
    }
    setCities(newCities);
  }, []);
  const HandleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if(value===''){
      setCities()
    }
    const filtered = cities.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setCities(filtered);
  };
  const handleHover = (city) => {
    const hoveredValue = city; // Parse the stored JSON value
    setDefaultCenter(hoveredValue);
  };
  const outHover = () => {
    setDefaultCenter({
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
          <div>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Search items"
              value={InputValue}
              onChange={HandleInputChange}
            />
            <h3> filter ....</h3>
          </div>
          <ul className="scroll-container">
            {cities.map((city) => (
              <Link to={`/client/city/${city.name}`} key={`${city.name}`}>
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

        <div className="mapcity ">
          <Gmap data={DefaultCenter} city={true} />
        </div>
      </div>
    </section>
  );
}
export default NavCities;
