import img from "../img/info-img.svg";
function Intro() {
  return (
    <section id="intro" className="clearfix">
      <div className="container">
        <div className="intro-img">
          <img src={img} alt="" />
        </div>
        <div className="intro-desc">
            <div>
                <h2> Unleash your wanderlust. Explore destinations near and far </h2>
          <p>
            Discover new cities and explore diverse destinations with ease. From
            bustling urban hubs to serene retreats, our curated selection offers
            something for every traveler. Begin your journey now and unlock
            unforgettable experiences.
          </p>
            </div>
          
        </div>
      </div>
    </section>
  );
}
export default Intro;
