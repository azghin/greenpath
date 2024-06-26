import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Reviews from "../../Data/Reviews.json";
import StoryCard from "../../layouts/clients/StoryCard";

import Storyimg from '../../img/Storyboard-pana.svg'

function HStory() {
  const [pplStories, setPplStories] = useState([]);
  useEffect(() => {
    let initReviews = [];
    for (let i = 0; i < Reviews.length; i++) {
      initReviews = [...initReviews, Reviews[i]];
    }
    setPplStories(initReviews);
  }, []);
  const isReviewsEmpty = useMemo(() => pplStories.length > 0, [pplStories]);
  return (
    <section id="Homestories">
      {!isReviewsEmpty ? null : (
        <div className="container">
          <div className="story-desc centertext">
            <h3 className="section-title">Explore ppl stories</h3>
          </div>
          <div className="row cards_review_home">
            <div className="col-9">
              <StoryCard data={pplStories[0]} />
              <StoryCard data={pplStories[1]} />
            </div>
            <div className="col-3 d-flex aligne-center justify-content-center"> <img src={Storyimg} alt="" /> </div>
          </div>
          <div className="storybtn ">
            <p>read more stories </p>
          <Link to="/blog" className='btn-get-started scrollto'>Read More</Link>
          </div>
        </div>
      )}
    </section>
  );
}
export default HStory;
