import React, {useRef} from 'react'

const MovieTag = ({onSearch}) => {
  const inputRef = useRef();
  return (
    <div className="movie__tag">
      <div className="container">
        <div className="keyword">
            <button type="submit" >animation</button>
        </div>
      </div>
    </div>
  )
}

export default MovieTag;