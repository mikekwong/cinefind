import React, { Component } from 'react'
import theMovieDB, { API_KEY } from './../api/theMovieDB'
import SearchBar from './main/SearchBar'
import MovieList from './main/MovieList'

export default class Popular extends Component {
  state = {
    movies: [],
    info: '',
  }

  onSearchSubmit = async term => {
    try {
      const { data } = await theMovieDB.get(
        `/search/movie?api_key=${API_KEY}&query=${term}`
      )
      this.setState({
        info: 'Search Results',
        movies: data.results,
      })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { movies, info } = this.state
    return (
      <div className="container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <br />
        <MovieList info={info} movies={movies} />
      </div>
    )
  }
}
