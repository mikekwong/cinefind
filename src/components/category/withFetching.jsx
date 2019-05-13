import React, { Component } from 'react'
import theMovieDB, { API_KEY } from '../../api/theMovieDB'
import SearchBar from '../main/SearchBar'
import MovieList from '../main/MovieList'

export default (ChildComponent, url, info) => {
  return class extends Component {
    state = { movies: [], info: '' }

    async componentDidMount() {
      try {
        const { data } = await theMovieDB(url)
        this.setState({
          movies: data.results,
          info,
        })
      } catch (error) {
        console.error(error)
      }
    }

    render() {
      return (
        <ChildComponent
          {...this.state}
          {...this.props}
          componentDidMount={this.componentDidMount}
        />
      )
    }
  }
}
