import { useLocation } from "react-router-dom";
import PlaceDetails from "../../components/clients/PlaceDetails";
import { useEffect, useState } from "react";
import { Places } from "../../recoil_state";
import { useRecoilValue } from "recoil";
import Gmap from '../../layouts/clients/Gmap'
function Place() {
  const allPlaces = useRecoilValue(Places);
  const [defaultCenter, setDefaultCenter] = useState({});
  const Path = useLocation().pathname.split("/");
  useEffect(() => {
    const placeIndice = allPlaces.find(
      (obj) => obj.id === Number(Path[Path.length - 1])
    );
    console.log(placeIndice);
    if (placeIndice) {
      setDefaultCenter(placeIndice);
    } else {
      console.log("probleme we have");
    }
  }, [Path, allPlaces]);

  return (
    <>
      <section id="place" className="clearfix">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-6 p-text">
              <h2>
                {/* you're now navigating <span> {defaultCenter.city}</span> <br />{" "}
                in <span>{defaultCenter.place} </span> you'll find{" "} */}
                {defaultCenter.description}
              </h2>
            </div>
            <div className="col-6 p-2">
              <Gmap data={defaultCenter } isPlace={true} />
            </div>
          </div>
        </div>
      </section>
      <PlaceDetails data={defaultCenter} />
    </>
  );
}
export default Place;
