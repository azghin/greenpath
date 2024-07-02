import { useMemo, useState } from "react";
import { CitiesL } from "../../recoil_state";
import { useRecoilState } from "recoil";
function AddCity() {
  const [cityExist, setCityExist] = useState(false);
  const [getCities, setCities] = useRecoilState(CitiesL);

  const [newCity, setNewCity] = useState({
    name: "",
    lat: null,
    lng: null,
    zoom: 10,
    id: getCities.length + 1,
    desc: "",
    img: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    if(name==='lat'||name==='lng'){
      setNewCity({...newCity,
        [name]:Number(value)}
      );
    }
    else {
      setNewCity({...newCity,
        [name]:value}
      );
    }
      
  };
  const isDuplicate = useMemo(() => {
    return getCities.some(obj => obj.name.toLowerCase() === newCity.name.toLowerCase());
  }, [newCity.name, getCities]);
    console.log(isDuplicate);
  const handleSubmit = ()=>{
    if(isDuplicate){
      setCityExist(true)
    }else{
      setCities([...getCities,newCity])
      setNewCity({name: "",
        lat: null,
        lng: null,
        zoom: 10,
        id: getCities.length + 1,
        desc: "",
        img: "",})
    }
  }
  return (
    <div className="container">
      <h1>Add new Cities</h1>
      
        <div className="mb-3 row">
          <label htmlFor="inputName" className="col-4 col-form-label">
            City
          </label>
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              name="name"
              id="inputName"
              value={newCity.name}
              onChange={handleChange}
            />
          </div>
          {cityExist ? <mark className="text-danger"> city already exist </mark> : null}
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputName" className="col-4 col-form-label">
            Latitude
          </label>
          <div className="col-8">
            <input
              type="number"
              className="form-control"
              name="lat"
              id="inputName"
              onChange={handleChange}
              value={newCity.lat}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputName" className="col-4 col-form-label">
            longitude
          </label>
          <div className="col-8">
            <input
              type="number"
              className="form-control"
              name="lng"
              id="inputName"
              value={newCity.lng}
              onChange={handleChange}

            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputName" className="col-4 col-form-label">
            Desc
          </label>
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              name="desc"
              id="inputName"
              value={newCity.desc}
              onChange={handleChange}

            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputName" className="col-4 col-form-label">
            Images
          </label>
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              name="img"
              id="inputName"
              value={newCity.img}
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

export default AddCity;
