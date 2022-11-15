import React from "react";

const UnsplashTag = ({ onSearch }) => {
  const onClick1 = () => {
    onSearch("dog");
  };
  const onClick2 = () => {
    onSearch("cat");
  };
  const onClick3 = () => {
    onSearch("alpaca");
  };
  const onClick4 = () => {
    onSearch("mouse");
  };
  const onClick5 = () => {
    onSearch("hamster");
  };
  const onClick6 = () => {
    onSearch("bear");
  };
  const onClick7 = () => {
    onSearch("elephant");
  };
  const onClick8 = () => {
    onSearch("rabbit");
  };

  return (
    <div className="unsplash__tag">
      <div className="container">
        <button type="submit" onClick={onClick1}>
          dog
        </button>
        <button type="submit" onClick={onClick2}>
          cat
        </button>
        <button type="submit" onClick={onClick3}>
          alpaca
        </button>
        <button type="submit" onClick={onClick4}>
          mouse
        </button>
        <button type="submit" onClick={onClick5}>
          hamster
        </button>
        <button type="submit" onClick={onClick6}>
          bear
        </button>
        <button type="submit" onClick={onClick7}>
          elephant
        </button>
        <button type="submit" onClick={onClick8}>
          rabbit
        </button>
      </div>
    </div>
  );
};

export default UnsplashTag;
