import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import YoutubeCont from "../include/YoutubeCont";
import YoutubeSearch from "../include/YoutubeSearch";
import YoutubeSlider from "../include/YoutubeSlider";
import Contact from "../layout/Contact";
import { useState, useEffect } from "react";

const Youtube = () => {
  const [youtubes, setYoutubes] = useState([]);
  const [populars, setPopularYoutubes] = useState([]);

  useEffect(() => {
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyDScK_kd_EDAf9lp5tqhRjnyc1f34kDTrE")
    .then((response) => response.json())
      // .then((result) => console.log(result.results))
    .then((result) => setPopularYoutubes(result.items))
    .catch((error) => console.log(error));
  }, []);

  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyDScK_kd_EDAf9lp5tqhRjnyc1f34kDTrE&part=snippet&q=${query}&maxResults=30&type=video`
    )
    .then((response) => response.json())
    // .then((result) => console.log(result.results))
    .then((result) => setYoutubes(result.items))
    .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch("https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyDScK_kd_EDAf9lp5tqhRjnyc1f34kDTrE&part=snippet&q=webstoryboy&maxResults=30&type=video")
    .then((response) => response.json())
      // .then((result) => console.log(result.results))
    .then((result) => setYoutubes(result.items))
    .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Header />
      <Contents>
        <Title title={["youtube", "reference api"]} />
        <YoutubeSlider populars={populars}/>
        <YoutubeSearch onSearch={search}/>
        <YoutubeCont youtubes={youtubes}/>
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Youtube;