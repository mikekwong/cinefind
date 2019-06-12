import React, { Component } from 'react'
import theMovieDB, { API_KEY } from './../api/theMovieDB'
import SearchBar from './main/SearchBar'
import MovieList from './main/MovieList'

export default class Popular extends Component {
  state = {
    movies: [],
    info: '',
    error: null,
    isLoading: true
  }

  onSearchSubmit = async term => {
    try {
      const { data } = await theMovieDB.get(
        `/search/movie?api_key=${API_KEY}&query=${term}`
      )
      this.setState({
        info: 'Search Results',
        movies: data.results,
        isLoading: false
      })
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      })
    }
  }

  render () {
    const { movies, info, isLoading } = this.state
    return (
      <div className='container'>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <br />
        {!isLoading ? (
          <MovieList info={info} movies={movies} />
        ) : (
          <p>...Loading</p>
        )}
      </div>
    )
  }
}
