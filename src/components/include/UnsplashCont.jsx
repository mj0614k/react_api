import React from "react";

const UnsplashItem = (props) => {
  return (
    <li>
      <a href={`https://unsplash.com/photos/${props.image.id}`}>
        <img src={props.image.urls.regular} alt={props.image.urls.alt_description} />
      </a>
    </li>
  );
};

const UnsplashCont = (props) => {
  // console.log(props.images);
  return (
    <section className="cont__unsplash">
      <div className="container">
        <div className="unsplash__inner">
          <ul>
            {props.images.map((image, index) => (
              <UnsplashItem key={index} image={image} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UnsplashCont;
