function StoryCard(props) {
  return (
    <div className="card story-card">
      <div className="row review_header">
        <div className="col-xl-1 col-sm-12 img-holder">
          <img
            src={props.data.user.profile ?? "profile"}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-11 name-holder">
          <h2>{props.data.user.name ?? "name"} </h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p style={{marginBottom:'15px'}}>{props.data.review ?? "review"}</p>
        </div>
      </div>
      <div className="row ">
        <div className="col d-flex">
          {props.data.tags.map((obj) => (
            <div className="tag" key={obj}>
              {obj}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default StoryCard;
