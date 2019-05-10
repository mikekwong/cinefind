import React, { Component } from 'react'
import theMovieDB, { API_KEY } from '../../api/theMovieDB'
import SearchBar from '../main/SearchBar'
import MovieList from '../main/MovieList'

export default class Upcoming extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      info: '',
    }
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }

  async componentDidMount() {
    try {
      const { data } = await theMovieDB.get(
        `/movie/upcoming?api_key=${API_KEY}`
      )
      this.setState({
        movies: data.results,
        info: 'Upcoming Movies',
      })
    } catch (error) {
      console.error(error)
    }
  }

  async onSearchSubmit(term) {
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
    const { info, movies } = this.state
    return (
      <div className="container">
        <MovieList info={info} movies={movies} />
      </div>
    )
  }
}
