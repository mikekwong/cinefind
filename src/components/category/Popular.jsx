import React from 'react'
import { API_KEY } from '../../api/theMovieDB'
import MovieList from '../main/MovieList'
import withFetching from './withFetching'

const Popular = props => {
  const { movies, info } = props
  return (
    <div className="container">
      <MovieList info={info} movies={movies} />
    </div>
  )
}

export default withFetching(
  Popular,
  `/movie/popular?api_key=${API_KEY}`,
  'Popular'
)
