import React from "react";
// 리액트에서만 쓸 수 있는 변수 {}
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ReferCont from "../include/ReferCont";
import Contact from "../layout/Contact";

// 클래스형 컴퍼넌트 / 함수형 컴퍼넌트
// 클래스가 간지지만 리액트에서는 함수형 추천
// 그러나 함수형은 단점 많음, 클래스의 장점을 살리기 위해 생겨난 것 --> 리액트 훅
// 함수형을 사용하면서도 클래스 컴퍼넌트의 효과를 가져올 수 있음

const Reference = () => {
  // 반복문으로 불러와야 하기 때문에 복수형으로 작성하였음
  const [references, setReferences] = useState([]);

  useEffect(() => {
    fetch("https://webstoryboy.github.io/react2022/src/assets/json/refer.json")
      .then(response => response.json())
      // .then(result => console.log(result.data.htmlRefer))
      // 객체까지 불러왔는지, 배열까지 불러왔는지 꼭 확인하기
      // 데이터 저장(데이터의 변화를 감지하는 setReferences에)
      .then(result => setReferences(result.data.htmlRefer))
      .catch(error => console.log('error', error));
  }, [])

  return (
    <>
      <Header />
      <Contents>
        <Title title={["reference", "book"]} />
        <ReferCont references={references}/>
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Reference;
