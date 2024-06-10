import { useEffect, useMemo, useState } from "react";
import Reviews from "../../Data/Reviews.json";
import StoryCard from "../../layouts/clients/StoryCard";

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
            <StoryCard data={pplStories[0]} />
            <StoryCard data={pplStories[1]} />
          </div>
        </div>
      )}
    </section>
  );
}
export default HStory;
