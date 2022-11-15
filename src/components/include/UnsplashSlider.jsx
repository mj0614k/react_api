import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

function UnsplashSliderItem(props) {
  return (
    <li>
      <a href="/">
        <figure className="unsplash__image">
          <img src={props.random.urls.regular} alt={``} />
        </figure>
      </a>
    </li>
  );
}

const UnsplashSlider = (props) => {
  return (
    <section className="unsplash__popular">
      <div className="container">
        <h2>RANDOM Images</h2>
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
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {/* <ul className="moviePop__list"> */}
            {props.random.map((random, index) =>
              index < 10 ? (
                <SwiperSlide key={index}>
                  <UnsplashSliderItem key={index} random={random} />
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
