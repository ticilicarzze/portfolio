import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";
import images from "../../images";
import { Pagination, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function Slider() {
  return (
    <div className='swiper-container'>
      <Swiper
        spaceBetween={30}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1000: {
            slidesPerView: 2,
          },

          1400: {
            slidesPerView: 3,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide className='item' key={index}>
            <img src={image} alt={`slide-project-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='swiper-button-prev'>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className='swiper-button-next'>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
}

export default Slider;
