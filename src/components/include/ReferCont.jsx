import React from "react";

const ReferText = ({ id, name, desc, use }) => {
  return (
    <li>
      <a href="/">
        <span className="id">{id}</span>
        <span className="name">{name}</span>
        <span className="desc">{desc}</span>
        <span className="use">{use}</span>
      </a>
    </li>
  );
};

// const ReferCont = () => {
//   return (
//     <section className="cont__refer">
//       <div className="container">
//         <div className="refer__inner">
//           <h2>CSS</h2>
//           <ul className="refer__list">
//             {referInfo.map((info) => (
//               <ReferText
//                 num={info.num}
//                 name={info.name}
//                 desc={info.desc}
//                 star={info.star}
//               />
//             ))}

const ReferCont = ({references}) => {
  // console.log({references})
  return (
    <section className="cont__refer">
      <div className="container">
        <div className="refer__inner">
          <h2>CSS</h2>
          <ul className="refer__list">
            {references.map((refer, idx) => (
              <ReferText
                key={idx}
                id={refer.id}
                title={refer.title}
                desc={refer.desc}
                use={refer.use}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ReferCont;
