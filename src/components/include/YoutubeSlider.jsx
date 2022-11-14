import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

function YoutubeSliderItem(props) {
  return (
    <li>
      <a href={`https://www.youtube.com/watch?v=${props.popular.id}`}>
        <img src={props.popular.snippet.thumbnails.medium.url} alt={``} />
        <h2 className="youtube__popular__title">{props.popular.snippet.title}</h2>
      </a>
    </li>
  );
}

const YoutubeSlider = (props) => {
  return (
    <section className="youtube__popular">
      <div className="container">
      <h2>POPULAR Vedios</h2>
        <div className="youtube__popular__box">
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
            {props.populars.map((popular, index) =>
              index < 10 ? (
                <SwiperSlide key={index}>
                  <YoutubeSliderItem key={index} popular={popular} />
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

export default YoutubeSlider;
