import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__inner">
        <div>
          <h3>email</h3>
          <a href="mailto:mo0647@naver.com">mo0647@naver.com</a>
        </div>
        <div>
          <h3>kakao</h3>
          <a href="/">11255</a>
        </div>
        <div>
          <h3>social</h3>
          <ul>
            <li>
              <a href="/">youtube</a>
            </li>
            <li>
              <a href="/">instagram</a>
            </li>
            <li>
              <a href="/">github</a>
            </li>
            <li>
              <a href="/">blog</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
