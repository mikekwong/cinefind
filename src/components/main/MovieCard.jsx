import React from 'react'
import { thumbnailBaseURL } from '../../api/theMovieDB'

const MovieCard = props => {
  const { id, title, poster_path, release_date } = props.movie

  return (
    <>
      <img
        onClick={props.movieDetail}
        className='movie-card'
        src={`${thumbnailBaseURL}${poster_path}`}
        alt={title}
        style={{
          display: 'block',
          width: '100%'
        }}
      />
    </>
  )
}

export default MovieCard
