import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

function MoviePopular(props) {
  return (
    <li>
      <a href={`https://www.themoviedb.org/movie/${props.movie.id}`}>
        <span className="ranking">{props.rank + 1}</span>
        <span className="vote_average">★ {props.movie.vote_average}</span>
        <img src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={`${props.movie.title}`} />
        <span className="original_title">{props.movie.original_title}</span>
      </a>
    </li>
  );
}

const MovieList = (props) => {
  return (
    <section className="movie__list">
      <div className="container">
        <h2>POPULAR Movies</h2>
        <div className="popular__box">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {/* <ul className="moviePop__list"> */}
            {props.populars.map((movies, index) =>
              index < 10 ? (
                <SwiperSlide key={index}>
                  <MoviePopular key={index} rank={index} movie={movies} />{" "}
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

export default MovieList;
