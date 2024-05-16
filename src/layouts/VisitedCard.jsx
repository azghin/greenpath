import { Link } from "react-router-dom";
function VisitedCard(props) {
  return (
    <div className="col-lg-4 col-sm-12 vcard">
      <div className="card border-0">
        <div className="card-header border-0">
          <h3>{props.city}</h3>
        </div>
        <div className="card-body border-0">
          <div className="img ">
            <img src="" alt="City" />
          </div>
          <div className="content">
            <p>content</p>
          </div>
        </div>
        <div class="card-footer">
          <div>
          <Link to={`${props.city}`} >  <button className="btn-get-started scrollto"> More</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VisitedCard;
