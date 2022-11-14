import React from 'react'

const YoutubeItem = (props) => {
  return (
    <li>
      <a href={`https://www.youtube.com/watch?v=${props.youtube.id.videoId}`}>
        <img src={props.youtube.snippet.thumbnails.medium.url} alt="" />
        <h2>{props.youtube.snippet.title}</h2>
      </a>
    </li>
  )
}

const YoutubeCont = (props) => {
  return (
    <section className="cont__youtube">
      <div className="container">
        <div className="youtube__inner">
          <ul className="youtube__list">
            {props.youtubes.map((youtube, index) => (
              <YoutubeItem key={index} youtube={youtube} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default YoutubeCont