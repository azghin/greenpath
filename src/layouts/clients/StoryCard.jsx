function StoryCard(props) {
  return (
    <div className="card">
      <div className="row review_header">
        <div className="col-xl-1 col-sm-12 img-holder">
          <img
            src={props.data.user.profile ?? "profile"}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-11 name-holder">
          <h3>{props.data.user.name ?? "name"} </h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>{props.data.review ?? "review"}</p>
        </div>
      </div>
    </div>
  );
}
export default StoryCard;
