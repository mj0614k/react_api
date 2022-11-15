import React from "react";

const YoutubeTag = ({ onSearch }) => {
  const onClick1 = () => {
    onSearch("html");
  };
  const onClick2 = () => {
    onSearch("css");
  };
  const onClick3 = () => {
    onSearch("javascript");
  };
  const onClick4 = () => {
    onSearch("react");
  };
  const onClick5 = () => {
    onSearch("vue");
  };
  const onClick6 = () => {
    onSearch("web");
  };

  return (
    <div className="youtube__tag">
      <div className="container">
        <button type="submit" onClick={onClick1}>
          html
        </button>
        <button type="submit" onClick={onClick2}>
          css
        </button>
        <button type="submit" onClick={onClick3}>
          javascript
        </button>
        <button type="submit" onClick={onClick4}>
          react
        </button>
        <button type="submit" onClick={onClick5}>
          vue
        </button>
        <button type="submit" onClick={onClick6}>
          web
        </button>
      </div>
    </div>
  );
};

export default YoutubeTag;
