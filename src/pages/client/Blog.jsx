import BlogImg from "../../img/Blog post-amico.svg";
import { Blogs, User } from "../../recoil_state";
import { useRecoilValue } from "recoil";
import StoryCard from "../../layouts/clients/StoryCard";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

function Blog() {
  const allBlogs = useRecoilValue(Blogs);
  const getUser = useRecoilValue(User);
  const goRoute = useNavigate();
  const isLogedIn = useMemo(() => Object.keys(getUser).length > 2, [getUser]);
  const handleSubmit = () => {
    if (Object.keys(getUser).length > 2) {
      console.log("write the story");
    } else {
      console.log("ushould log in");
      goRoute("/login");
    }
  };
  return (
    <section id="blog">
      <div className="container">
        <div className="row blogHeader">
          <div className="blog-img">
            <img src={BlogImg} alt="svg blog" />
          </div>
          <div className="blog-texts">
            <h2>share your stories</h2>
          </div>
        </div>
        {!isLogedIn ? (
          <h1>go log in</h1>
        ) : (
          <div className="your-input row">
            <h2>share your own story and your own experience</h2>
            <label htmlFor="review">Blog</label>
            <textarea name="review" id="review"></textarea>
            <button onClick={handleSubmit}>input</button>
          </div>
        )}

        <div className="allblog">
          all blogs
          <ul>
            {allBlogs.map((obj) => (
              <li key={obj.id_review}>
                <StoryCard data={obj} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Blog;
