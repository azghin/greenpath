import { useRecoilValue,useRecoilState } from "recoil";
import { CitiesL,Places } from "../../recoil_state";
import { useState } from "react";
function AddPlace() {
  const [getPlaces,setPlaces]=useRecoilState(Places)
  const allCities = useRecoilValue(CitiesL);
  const [newPlace ,setNewPlace]=useState({
    place:'',
    id:getPlaces.length+1,
    city:'',
    description:'',
    lat:null,
    lng:null,
    zoom:16,
    img:'',
    details:[]
  })
  const handleChange =(event)=>{
    const {name,value}=event.target;
    if(name==='lat'||name==='lng'){
      setNewPlace({...newPlace,
      [name]:Number(value)
    })
    }else{
      setNewPlace({...newPlace,
        [name]:value
      })
    }
    
  }

  const handleSubmit=()=>{
    setPlaces([...getPlaces,newPlace])
    setNewPlace({
      place:'',
      id:getPlaces.length+1,
      city:'',
      description:'',
      lat:null,
      lng:null,
      zoom:16,
      img:'',
      details:[]
    })
  }
  return (
    <div className="container">
      <h1>add places</h1>

        <div className="mb-3 row">
          <label for="inputName" className="col-4 col-form-label">
            Place name
          </label>
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              name="place"
              id="inputName"
              value={newPlace.place}
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            City
          </label>
          <select class="form-select form-select-lg" name="city" id="">
            <option selected>Select one</option>
            {allCities.map((obj) => (
              <option onClick={handleChange} name="city" value={obj.name}>{obj.name}</option>
            ))}
          </select>
        </div>

        <div className="mb-3 row">
          <label for="inputName" className="col-4 col-form-label">
            Latitude
          </label>
          <div className="col-8">
            <input
              type="number"
              className="form-control"
              name="lat"
              id="lat"
              value={newPlace.lat}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputName" className="col-4 col-form-label">
            longitude
          </label>
          <div className="col-8">
            <input
              type="number"
              className="form-control"
              name="lng"
              id="inputName"
              value={newPlace.lng}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputName" className="col-4 col-form-label">
            Description
          </label>
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              name="description"
              id="inputName"
              value={newPlace.description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputName" className="col-4 col-form-label">
            Images
          </label>
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              name="img"
              id="inputName"
              value={newPlace.img}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="offset-sm-4 col-sm-8">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Action
            </button>
          </div>
        </div>
     
    </div>
  );
}

export default AddPlace;
