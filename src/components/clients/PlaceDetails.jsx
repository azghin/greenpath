import { useEffect, useMemo, useState } from "react";

function PlaceDetails(props) {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    setDetails(props.data.details);
  }, [props.data.details]);
  const detailsExist = useMemo(() => typeof details === "object", [details]);
  return (
    <section id="place-details">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2>{props.data.description}</h2>
          </div>
          <div className="col-6"> map</div>
        </div>
        {!detailsExist
          ? null
          : details.map((obj) => {const key=Object.keys(obj)[0] ;const valKeys= Object.keys(obj[key]);console.log(valKeys);; return(
              <div className="row">
                <div className="col-8"> 
                    <h2>{key} </h2>
                    <ul>
                        {valKeys.map((keyy,indix)=><li><strong>{keyy}</strong>  {obj[key][keyy]}</li>)}
                    </ul>
                </div>
                <div className="col-4"> {obj.svg}</div>
              </div>
            )})}
      </div>
    </section>
  );
}

export default PlaceDetails;
