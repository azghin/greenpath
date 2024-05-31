import infoImg from "../../img/info-img.svg";
import descImg from "../../img/Digital nomad-bro.svg";
function Info() {
  return (
    <section id="info" className="clearfix">
      <div className="container">
        <div className="row header">
          <div className="info-img">
            <img src={infoImg} alt="" />
          </div>
          <div className="info-desc">
            <h2>
              Where?When?How?
              <br />
              <span>It's up to you to decide!!</span>
              <br />
              let's get ready{" "}
            </h2>
          </div>
        </div>
        <div className="row">
          <h3 className="section-title"> Green path</h3>
          <p className="centertext">
            With a rich tapestry of culture, Morocco stuns. Explore bustling
            souks, majestic mountains, and serene riads. From desert stars to
            vibrant cities, it's a feast for the senses.
          </p>
        </div>
        <div className="row ">
          <div className="info-body">
            <div className="body-img">
              <img src={descImg} alt="" />
            </div>
            <div className="culture">
              <div className="list-wrapper">
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-brightness-alt-high"></i>
                </div>
                <h4 className="title">
                  <p className="stitle">Rich culture</p>
                </h4>
                <p className="description">
                  Morocco boasts a rich culture, a blend of Arab, Berber, and
                  European influences. This is evident in its architecture,
                  languages, and cuisine, creating a vibrant tapestry that
                  captivates all who visit.
                </p>
              </div>

              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-brightness-high"></i>
                </div>
                <h4 className="title">
                  <p className="stitle">Iconic food</p>
                </h4>
                <p className="description">
                  Spicy tagines and flaky pastries dusted with sweetness -
                  Moroccan cuisine is a symphony of flavor. Every mouthful is a
                  vibrant dance of heritage, a testament to Morocco's rich
                  cultural tapestry.
                </p>
              </div>

              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-moon-stars"></i>
                </div>
                <h4 className="title">
                  <p className="stitle">Stunning nature</p>
                </h4>
                <p className="description">
                  Morocco's landscapes shift like desert sands. Towering Atlas
                  Mountains cradle verdant valleys, while vast, ochre dunes roll
                  towards endless skies. Dramatic gorges slice through ancient
                  rock, while crashing waves pound the wild Atlantic coast.
                  Here, nature's beauty is both breathtaking and surprising.
                </p>
              </div>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
export default Info;
