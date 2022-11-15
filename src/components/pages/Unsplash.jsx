import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import UnsplashSlider from "../include/UnsplashSlider";
import UnsplashSearch from "../include/UnsplashSearch";
import UnsplashTag from "../include/UnsplashTag";
import UnsplashCont from "../include/UnsplashCont";
import Contact from "../layout/Contact";

const Unsplash = () => {
  const [images, setImages] = useState([]);
  const [random, setRandom] = useState([]);

  const search = async (query) => {
    await fetch(`https://api.unsplash.com/search/photos?client_id=CMPYww6ApEZzG93YflWFOp4WZwmnK8GSCgOgbTGxo1s&query=${query}&per_page=30`)
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setImages(result.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch("https://api.unsplash.com/photos/random?client_id=CMPYww6ApEZzG93YflWFOp4WZwmnK8GSCgOgbTGxo1s&count=30")
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setImages(result))
      .catch((error) => console.log(error));
  }, []);

  // 슬라이더
  useEffect(() => {
    fetch("https://api.unsplash.com/photos/random?client_id=CMPYww6ApEZzG93YflWFOp4WZwmnK8GSCgOgbTGxo1s&count=30")
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setRandom(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["unsplash", "reference api"]} />
        <UnsplashSlider random={random} />
        <UnsplashSearch onSearch={search} />
        <UnsplashTag onSearch={search} />
        <UnsplashCont images={images} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Unsplash;
