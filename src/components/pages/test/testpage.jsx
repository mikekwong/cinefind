import React, { Component } from 'react'
import './testpage.css'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import theMovieDB, { API_KEY } from './api/theMovieDB'

export default class Test extends Component {
  constructor () {
    super()
    this.state = {
      movies: [],
      info: ''
    }
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }

  async componentDidMount () {
    try {
      const { data } = await theMovieDB.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      )
      this.setState({
        info: 'Most popular movies in the U.S.',
        movies: data.results
      })
    } catch (error) {
      console.error(error)
    }
  }

  async onSearchSubmit (term) {
    try {
      const { data } = await theMovieDB.get(
        `/search/movie?api_key=${API_KEY}&query=${term}`
      )
      this.setState({
        info: 'Search Results',
        movies: data.results
      })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { info, movies } = this.state
    return (
      <div className='container'>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <MovieList info={info} movies={movies} />
      </div>
    )
  }
}
