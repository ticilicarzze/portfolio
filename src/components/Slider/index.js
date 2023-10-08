import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";
import images from "../../images";
import { FreeMode, Autoplay, Pagination, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

// ... (importaciones y código anterior)

function Slider() {
  // Estado para controlar la visibilidad del texto al hacer hover
  const [isTextVisible, setTextVisible] = useState(false);

  const array = [
    "First Project",
    "Second Project",
    "Third Project",
    "Fourth Project",
    "Fifth Project",
    "Sixth Project",
  ];

  return (
    <div className='container-carousel'>
      <h2>DIG INTO MY PROJECTS</h2>
      <div className='swiper-container'>
        <Swiper
          spaceBetween={30}
          freeMode={true}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[FreeMode, Autoplay, Pagination, Navigation]}
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
              <div className='link-item'>
                <a
                  href='https://www.facebook.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={image}
                    alt={`slide-project-${index}`}
                    onMouseEnter={() => setTextVisible(true)}
                    onMouseLeave={() => setTextVisible(false)}
                  />
                  {isTextVisible && (
                    <div className='hover-text'>{array[index]}</div>
                  )}
                </a>
              </div>
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
    </div>
  );
}

export default Slider;
