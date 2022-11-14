// import React, {useRef} from 'react'

// const UnsplashTag = ({onSearch}) => {
//   const inputRef = useRef();

//   const handleSearch = () => {
//     const value = inputRef.current.value;
//     onSearch(value);
//   }

//   const onKeyPress = (event) => {
//     if(event.key === "Enter"){
//       handleSearch();
//     }
//   }
//   const onClick = () => {
//     handleSearch();
//   }

//   return (
//     <div className="movie__search">
//       <div className="container">
//         <button value="color" onClick={onClick}>color</button>
//       </div>
//     </div>
//   )
// }

// export default UnsplashTag;

import React from 'react'

const UnsplashTag = () => {
  return (
    <div>UnsplashTag</div>
  )
}

export default UnsplashTag