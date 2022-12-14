import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import Youtube from "./components/pages/Youtube";
import Movie from "./components/pages/Movie";
import Unsplash from "./components/pages/Unsplash";
import About from "./components/pages/About";
import Reference from "./components/pages/Reference";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/unsplash" element={<Unsplash />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
