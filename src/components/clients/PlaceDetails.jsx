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
          <div className="col-8">
           
            {!detailsExist
          ? null
          : details.map((obj) => {const key=Object.keys(obj)[0] ;const valKeys= Object.keys(obj[key]);console.log(valKeys);; return(
              <>
                <div className="row"> 
                    <h2>{key} </h2>
                    <ul>
                        {valKeys.map((keyy,indix)=><li> <span>  <strong>{keyy}</strong> </span> {obj[key][keyy]}</li>)}
                    </ul>
                </div>
              </>
            )})}
          </div>
        
          <div className="col-4 img"><img src={props.data.img} alt=""  className="img-fluid"/></div>

      </div></div>
    </section>
  );
}

export default PlaceDetails;
