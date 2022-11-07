import React from 'react'

const MovieList = props => {
  return (
    <li>
        <a href={`https://api.themoviedb.org/3/search/movie/popular?api_key=4dce5e2aa071cda3c95daac64628defc&query=marble`}>
          <img src={`https://api.themoviedb.org/3/search/movie/popular?api_key=4dce5e2aa071cda3c95daac64628defc&query=marble`} alt={props.movie.title} />
          <em>
            <span className="title">{props.movie.title}</span>
            <span className="star">{props.movie.vote_average}</span>
          </em>
        </a>
      </li>
  )
}

export default MovieList;