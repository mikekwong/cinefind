import React from 'react'
import { Link } from 'react-router-dom'
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
      return (
        <Link to={`/${movie.id}`}>
          <MovieCard key={movie.id} movie={movie} />
        </Link>
      )
    })

  return (
    <div>
      <h1 className='text'>{info}</h1>
      <br />
      <div className='movies-list'>{movieListing}</div>
    </div>
  )
}

export default MovieList
