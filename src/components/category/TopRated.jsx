import React from 'react'
import { API_KEY } from '../../api/theMovieDB'
import MovieList from '../main/MovieList'
import withFetching from './withFetching'

const TopRated = props => {
  const { info, movies } = props
  return (
    <div className="container">
      <MovieList info={info} movies={movies} />
    </div>
  )
}

export default withFetching(
  TopRated,
  `/movie/top_rated?api_key=${API_KEY}`,
  'Top Rated'
)
