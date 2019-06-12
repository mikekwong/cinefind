import React from 'react'
import { thumbnailBaseURL } from '../../api/theMovieDB'

const MovieCard = props => {
  const { title, poster_path } = props.movie
  console.log(props.movie)
  return (
    <>
      {poster_path ? (
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
      ) : (
        <p className='no-image'>Not Available</p>
      )}
    </>
  )
}

export default MovieCard
