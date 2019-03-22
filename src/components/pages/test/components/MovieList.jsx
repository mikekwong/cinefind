import React from 'react'
import MovieCard from './MovieCard'

const MovieList = props => {
  const movieListing = props.movies.map(movie => {
    return <MovieCard key={movie.id} movie={movie} />
  })
  return <div className='movies-list'>{movieListing}</div>
}

export default MovieList
