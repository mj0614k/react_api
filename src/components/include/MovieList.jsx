import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import {Autoplay, Pagination} from "swiper";

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
};

const MovieList = (props) => {
  return (
    <section className="movie__list">
      <div className="container">
        <h2>Popular Movies</h2>
        <div className="popular__box">
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper">
          {/* <ul className="moviePop__list"> */}
            {props.populars.map((movies, index) => index < 10 ? <SwiperSlide key={index}><MoviePopular key={index} rank={index} movie={movies} /> </SwiperSlide> : null)}
        </Swiper>
          {/* </ul> */}
        </div>
      </div>
    </section>
  );
};

export default MovieList;
