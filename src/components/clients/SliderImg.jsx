import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

//import images

import Images from "../../Data/Images.json";

function SliderImg() {
  return (
    <section id="Swiper">
      <div className="container">
        <h3 className="section-title">Morocco through our gallery</h3>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          // mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {Images.map((image) => (
            <SwiperSlide key={image.id}>
              
              <div
                className="sildeImgWrapper"
               
              >
                <div className="image-background"  style={{ background: `url(${image.src}) `,backgroundSize:'cover' }} >

                  <div className="content">
                  <h1>
                    {image.city}
                  </h1>
                  <p>Lorem ipsum ...</p>
                </div>
                </div>
                
                {/* <img src={image.src} alt="" /> */}
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
export default SliderImg;
