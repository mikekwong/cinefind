import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies, info }) => {
  const movieListing = movies
    .sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1
      }
      return 0
    })
    .map(movie => {
      return <MovieCard key={movie.id} movie={movie} />
    })

  return (
    <div className='movies-list'>
      <h3>{info}</h3>
      {movieListing}
    </div>
  )
}

export default MovieList
