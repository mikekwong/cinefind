import React, { Component } from 'react'
import './testpage.css'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import theMovieDB, { API_KEY } from './api/theMovieDB'
// import theMovieDB from './api/theMovieDB'
// import axios from 'axios'

export default class Test extends Component {
  constructor () {
    super()
    this.state = { movies: [] }
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }

  async componentDidMount () {
    try {
      const { data } = await theMovieDB.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      )
      this.setState({ data })
    } catch (error) {
      console.error(error)
    }
  }

  async onSearchSubmit (term) {
    try {
      const { data } = await theMovieDB.get(
        `/search/movie?api_key=${API_KEY}&query=${term}`
      )
      this.setState({ movies: data.results })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    return (
      <div className='container'>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
}
