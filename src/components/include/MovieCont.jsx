import React from "react";

const MovieItem = (props) => {
  return (
    <li>
      <a href={`https://www.themoviedb.org/movie/${props.movie.id}`}>
      <em>
        <span className="vote_average">★ {props.movie.vote_average}</span>
      </em>
        <img
          src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
          alt={`${props.movie.title}`}
        />
        <span className="original_title">{props.movie.original_title}</span>
      </a>
    </li>
  );
};

function MovieCont(props) {
  return (
    <section className="cont__movie">
      <div className="container">
        <div className="movie__inner">
          <h2>
            <span>' Mission '</span> Movies
          </h2>
          <ul className="movie__list">
            {props.movies.map((movies, index) => (
              <MovieItem key={index} movie={movies} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MovieCont;