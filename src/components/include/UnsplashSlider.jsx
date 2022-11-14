import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

function UnsplashSliderItem(props) {
  return (
    <li>
      <a href="/">
        <img src={props.image.urls.regular} alt={``} />
      </a>
    </li>
  );
}

const UnsplashSlider = (props) => {
  return (
    <section className="unsplash__popular">
      <div className="container">
        <div className="unsplash__popular__box">
          <Swiper
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            initialSlide="1"
            spaceBetween={30}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{clickable: true}}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {/* <ul className="moviePop__list"> */}
            {props.images.map((image, index) =>
              index < 10 ? (
                <SwiperSlide key={index}>
                  <UnsplashSliderItem key={index} image={image} />
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
          {/* </ul> */}
        </div>
      </div>
    </section>
  );
};

export default UnsplashSlider;
