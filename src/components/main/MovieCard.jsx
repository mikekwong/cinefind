import React from 'react'
import { thumbnailBaseURL } from '../../api/theMovieDB'

const MovieCard = props => {
  const { title, poster_path } = props.movie
  console.log(poster_path)
  return (
    <img
      onClick={props.movieDetail}
      className="movie-card"
      src={`${thumbnailBaseURL}${poster_path}`}
      alt={title}
      style={{
        display: 'block',
        width: '100%',
      }}
    />
  )
}

export default MovieCard
