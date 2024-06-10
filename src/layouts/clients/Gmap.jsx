import {APIProvider, Map,AdvancedMarker,Pin} from "@vis.gl/react-google-maps";
import { useState, useEffect, useMemo } from "react";

const defaultCenter  = {
  lat: 29.71138072361799,
  lng: -8.714060252932148,
  zoom: 5,
  name: "Morocco",
}
export default function Gmap(props) {
  const [center, setCenter] = useState(defaultCenter);

  useEffect(() => {
    setCenter(props.data);
  }, [props.data]);

  const isMorocco = useMemo(()=>center.name === "Morocco" , [center])
  
  const apikey = "AIzaSyBFT7f7Ep3ASYRZUH9R7bdr7IZmIkhwbhI";
  return (
    <div className="googlemap">
      <APIProvider region="ma" apiKey={apikey}>
        <Map
          style={{ width: "100%", height: "100%" }}
          defaultCenter={defaultCenter}
          defaultZoom={defaultCenter.zoom}
          center={(center.lat && center.lng) ? { lat: center.lat , lng: center.lng  }: null}
          zoom={center.zoom}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          mapId={"921104f6dd1bfaa2"}
          
        >
           
            {!isMorocco &&<AdvancedMarker position={{ lat: center.lat, lng: center.lng }}>
              <Pin
                background={"#0f9d58"}
                borderColor={"#006425"}
                glyphColor={"#60d98f"}
              />
            </AdvancedMarker>}
          
        </Map>
      </APIProvider>
    </div>
  );
}
