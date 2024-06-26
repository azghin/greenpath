import { Link } from "react-router-dom";
function VisitedCard(props) {
  return (
    <div className="col-lg-4 col-sm-12 vcard">
      <div className="card border-0">
        <div className="">
            <img src={props.city.img} alt="City" className="card-img-top"/>
          </div>
          <div className=" border-0">
          <h3>{props.city.name}</h3>
        </div>
        <div className="card-body border-0">
          
          <div className="content">
            <p>{props.city.desc}</p>
          </div>
        </div>
        <div className="card-footer">
          <div>
          <Link to={`${props.city}`} >  <button className="btn-get-started scrollto"> More</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VisitedCard;
