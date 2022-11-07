import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieSearch from "../include/MovieSearch";
import MovieCont from "../include/MovieCont";
import Contact from "../layout/Contact";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  const search = (query) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=4dce5e2aa071cda3c95daac64628defc&query=${query}`)
    .then(response => response.json())
    // .then((result) => console.log(result.results))
    .then((result) => setMovies(result.results))
    .catch(error => console.log(error));
  }

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/search/movie?api_key=4dce5e2aa071cda3c95daac64628defc&query=marble")
    .then(response => response.json())
    // .then((result) => console.log(result.results))
    .then((result) => setMovies(result.results))
    .catch(error => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["movie", "reference api"]} />
        <MovieSearch onSearch={search} />
        <MovieCont movies={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Movie;
