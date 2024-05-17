

const Marker = (lat,lng,name,map, maps) => {
    let marker = new maps.Marker({
    position: { lat: lat, lng: lng },
    map,
    title: name
    });
    return marker;
   }

   export default Marker