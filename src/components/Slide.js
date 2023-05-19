import {React} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination,EffectCoverflow, Autoplay} from "swiper";
import "../css/slide.css";


const Slide = (props) => {
  console.log(props.slidedb)
  return (
    <div id="slideWrap">
      <Swiper
        autoplay={{delay: 3000, disableOnInteraction:false}}
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img onClick={()=>{window.location.href="http://localhost:3000/intro"}} src={props.slidedb?.movieDB.data[0].썸네일} alt="imgs" />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={()=>{window.location.href="http://localhost:3000/intro"}} src={props.slidedb?.movieDB.data[1].썸네일} alt='imgs' />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={()=>{window.location.href="http://localhost:3000/intro"}} src={props.slidedb?.movieDB.data[2].썸네일} alt='imgs' />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={()=>{window.location.href="http://localhost:3000/intro"}} src={props.slidedb?.movieDB.data[3].썸네일} alt='imgs' />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={()=>{window.location.href="http://localhost:3000/intro"}} src={props.slidedb?.movieDB.data[4].썸네일} alt='imgs' />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={()=>{window.location.href="http://localhost:3000/intro"}} src={props.slidedb?.movieDB.data[5].썸네일} alt='imgs' />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={()=>{window.location.href="http://localhost:3000/intro"}} src={props.slidedb?.movieDB.data[6].썸네일} alt='imgs' />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={()=>{window.location.href="http://localhost:3000/intro"}} src={props.slidedb?.movieDB.data[7].썸네일} alt='imgs'/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide;