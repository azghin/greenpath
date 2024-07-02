import BlogImg from "../../img/Blog post-amico.svg";
import { Blogs, User,CitiesL } from "../../recoil_state";
import { useRecoilValue  ,useRecoilState } from "recoil";
import StoryCard from "../../layouts/clients/StoryCard";
import { Link } from "react-router-dom";
import {  useMemo, useState,useEffect } from "react";
import { useLocation } from "react-router-dom";

function Blog() {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const [allBlogs,setBlogs]=useRecoilState(Blogs)
  const [tags,setTags]=useState(['morocco']);
  const [currentTag , setCurrentTag]=useState('');
  const [Comment , setComment]=useState('');
  const getUser = useRecoilValue(User);
  const getCities= useRecoilValue(CitiesL)
  const isLogedIn = useMemo(() => Object.keys(getUser).length > 2, [getUser]);
  
  const handleComment=(event)=>{
    const value = event.target.value;
    setComment(value)
  }
  const handleChange =(event)=>{
    const value=event.target.value;
    setCurrentTag(value)
  }
  const handleCityChange = (event)=>{
    const value = event.target.value;
    const alltags = tags;
    alltags[0]=value
    setTags(alltags)
  }
  const handleTag=()=>{
    let newTag =tags
    newTag = [...newTag,currentTag]
    setTags(newTag)
    setCurrentTag('')
  }

  const handleSubmit = () => {
    if(Comment.length<2){
      console.log('no content');
    }
    else{
      let newReview = {'id_review':allBlogs.length+1,'user':{"id_user":getUser.iduser,"name":`${getUser.name} ${getUser.last_name}`,"profile":getUser.picture}}
      newReview ={...newReview,"review":Comment,"tags":tags}
      
      setBlogs([...allBlogs,newReview])
      setComment('');
      setTags(['morocco']);
    }
  };
  console.log(allBlogs);
  return (
    <section id="blog">
      <div className="container">
        <div className="row blogHeader">
          <div className="col-6 blog-img">
            <img src={BlogImg} alt="svg blog" className="img-fluid" />
          </div>
          <div className="col-6 blog-texts">
            <h2>
              {" "}
              <span>Get Inspired, Get Going:</span> Unleash Your Travel Stories
            </h2>
          </div>
        </div>
        <div className="row blog-input">
          {!isLogedIn ? (
            <h3>
              Where's your next travel chapter?{" "}
              <Link to={"/login"}>Login to start writing! </Link>
            </h3>
          ) : (
            <div className="your-input col">
              <h2>share your own story and your own experience</h2>
              <label htmlFor="comment">Comments:</label>
              <textarea
                className="form-control"
                rows="5"
                id="comment"
                name="text"
                value={Comment}
                onChange={handleComment}
              ></textarea>
              <div className="row">
                <div className="col-6">
                  <label htmlFor="">City</label>
                  <select className="form-select" >
                    <option value={'morocco'}>Morocco</option>
                    {getCities.map(obj=><option onClick={handleCityChange} key={obj.id} value={obj.name}>{obj.name}</option>)}
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="">tags</label>
                  <br />
                  <input type="text" className="form-control" onChange={handleChange} value={currentTag} />
                  <br />
                  <button onClick={handleTag}>add tag </button>
                </div>
              </div>
              <div className="row">
                <div className="col-4">              <button type="submit" className="btn-started" onClick={handleSubmit}>input</button>
                </div>
                <div className="col tags"> {tags.map(txt=><div className="tag">{txt}</div>)} </div>
              </div>

            </div>
          )}
        </div>

        <div className="allblog">
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
