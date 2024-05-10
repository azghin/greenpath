function VisitedCard(props) {
  return (
    <div className="col-lg-4 col-sm-12 vcard">
      <div className="card">
        <div className="card-header">
          <h3>{props.city}</h3>
        </div>
        <div class="card-body ">
          <div className="img ">
            <img src="" alt="City" />
          </div>
          <div className="content">
            <p>content</p>
          </div>
        </div>
        <div class="card-footer">
          <div>
            <button className="btn-get-started scrollto"> More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VisitedCard;
