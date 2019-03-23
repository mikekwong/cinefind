import React, { Component } from 'react'
import '../styles/testpage.css'
import theMovieDB, { API_KEY } from '../api/theMovieDB'
import SearchBar from './main/SearchBar'
import MovieList from './main/MovieList'
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
        info: 'Top movie releases in the U.S.',
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
        <br />
        <MovieList info={info} movies={movies} />
      </div>
    )
  }
}
