import React, { Component } from 'react'
import '../../styles/testpage.css'
import theMovieDB, { API_KEY } from '../../api/theMovieDB'
import SearchBar from '../main/SearchBar'
import MovieList from '../main/MovieList'

export default class Upcoming extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: this.props.parentState.movies,
      info: this.props.parentState.info
    }
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }

  async componentDidMount () {
    try {
      const { data } = await theMovieDB.get(
        `/movie/upcoming?api_key=${API_KEY}`
      )
      this.setState({
        movies: data.results,
        info: 'Upcoming Movies'
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
    console.log(movies)
    return (
      <div className='container'>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <br />
        <MovieList info={info} movies={movies} />
      </div>
    )
  }
}
