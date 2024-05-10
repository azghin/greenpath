import { layer, Map, Layers } from "react-openlayers";
import  getTransform  from 'ol/proj';
function OpenMap() {
  return (
    <Map view={{ center:getTransform([37.6178, 55.7517]), zoom: 5 }}>
      <Layers>
        <layer.Tile />
      </Layers>
    </Map>
  );
}
export default OpenMap;
