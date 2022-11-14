import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

function UnsplashSliderItem(props) {
  return (
    <li>
      <a href={`https://unsplash.com/photos/${random.id}`}>
        <img src={props.random.urls.regular} alt={props.random.urls.alt_description} />
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
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
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
