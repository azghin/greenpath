import img from "../../img/info-img.svg";
import { useLocation } from "react-router-dom";
import { useEffect, lazy } from "react";
import { CitiesL } from "../../recoil_state";
import { useRecoilValue } from "recoil";
const NavigationMap = lazy(() => import("../../layouts/clients/NavigationMap"));


const defaultCenter = {
  lat: 29.71138072361799,
  lng: -8.714060252932148,
  zoom: 5,
  name: "Morocco",
};

function Cities() {
  const allCities = useRecoilValue(CitiesL);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <section id="intro" className="clearfix">
        <div className="container">
          <div className="intro-img">
            <img src={img} alt="" />
          </div>
          <div className="intro-desc">
            <div>
              <h2>
               
                Unleash your wanderlust. Explore destinations near and far
              </h2>
              <p>
                Discover new cities and explore diverse destinations with ease.
                From bustling urban hubs to serene retreats, our curated
                selection offers something for every traveler. Begin your
                journey now and unlock unforgettable experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      {allCities.length === 0 ? null : (
        <NavigationMap data={allCities} defaultCenter={defaultCenter} />
      )}
    </>
  );
}
export default Cities;
