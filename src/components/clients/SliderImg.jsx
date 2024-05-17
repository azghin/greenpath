import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Slide from '../../layouts/clients/Slide';

function SliderImg() {
  return (
    <section id='Swiper'>
      
        <div className="container">
        <h3 className='section-title'>Morocco through our gallery</h3>
        
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
        <SwiperSlide> <Slide/></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </div>
    </section>
  );
}
export default SliderImg
