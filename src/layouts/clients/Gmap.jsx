import { APIProvider, Map ,AdvancedMarker, Pin} from "@vis.gl/react-google-maps";
import { useState,useEffect } from "react";

export default function Gmap(props) {
    const [center,setCenter]=useState({
        lat: 29.71138072361799,
    lng: -8.714060252932148,
    zoom: 5,
    name:'Morocco'
    });
    const [country,setCountry]=useState('Morocco')
    useEffect(()=>{
        setCenter(props.data)
        setCountry(props.data.name)
    },[props.data])
    const isMorocco = isPlaceMorocco(country);
    
    console.log(center.name)
    const apikey='AIzaSyBFT7f7Ep3ASYRZUH9R7bdr7IZmIkhwbhI'
  return (
    <div className="googlemap"  >
      <APIProvider
      region="ma"
        apiKey={apikey}
      >
        <Map
          style={{ width: "100%", height: "100%" }}
          defaultCenter={{ lat: 29.71138072361799 , lng: -8.714060252932148 }}
          defaultZoom={5}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          mapId={'921104f6dd1bfaa2'}
          
        >   
        {isMorocco ? console.log('true'):<AdvancedMarker position={{lat:center.lat,lng:center.lng}}>
                <Pin  background={'#0f9d58'}
      borderColor={'#006425'}
      glyphColor={'#60d98f'} />
            </AdvancedMarker>}
            
            
        </Map>
      </APIProvider>
    </div>
  );

}
function isPlaceMorocco(center){
    // const placeName = String(center.name)
    if (center==='Morocco'){
        return true
    }
    else return false
}
