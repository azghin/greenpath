import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { useState } from "react";
function Gmap(props) {
  const [city,setCity]=useState(false)
  if (!city){
    setCity(props)
  }
  return (
    // Important! Always set the container height explicitly
    <div className="googlemap" >
      <GoogleMapReact
        yesIWantToUseGoogleMapApiInternals={true}
        bootstrapURLKeys={{ key: "AIzaSyBFT7f7Ep3ASYRZUH9R7bdr7IZmIkhwbhI" }}
        region='ma'
        language='ar'
        defaultCenter={[city.lat,city.lng]}
        defaultZoom={city.zoom}
        onGoogleApiLoaded={({ map, maps }) => Marker(city.lat,city.lng,city.name,map,maps)}
      >
      </GoogleMapReact>
      <div>
      </div>
    </div>
  );
}

export default Gmap;


