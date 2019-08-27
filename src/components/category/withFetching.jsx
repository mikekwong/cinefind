import React, { Component } from 'react'
import theMovieDB from '../../api/theMovieDB'

export default (ChildComponent, url, info) => {
  return class extends Component {
    state = { movies: [], info: '' }

    async componentDidMount () {
      try {
        const { data } = await theMovieDB.get(url)
        this.setState({
          movies: data.results,
          info
        })
      } catch (error) {
        console.error(error)
      }
    }

    render () {
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
