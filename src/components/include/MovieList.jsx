import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MoviePopular = (props) => {
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
          <ul className="moviePop__list">
            <Swiper
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              scrollbar={{ draggable: true }}
              className="mySwiper"
            >
              <SwiperSlide>{props.populars.map((movies, index) => (index < 5 ? <MoviePopular key={index} rank={index} movie={movies} /> : null))}</SwiperSlide>
            </Swiper>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MovieList;
